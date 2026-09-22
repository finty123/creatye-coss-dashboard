import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const baseUrlFlag = process.argv.indexOf("--base-url");
const baseUrl =
  (baseUrlFlag >= 0 ? process.argv[baseUrlFlag + 1] : undefined) ??
  process.env.CREATYE_VISUAL_BASE_URL ??
  "http://127.0.0.1:3000";
const outputRoot = ".agent/tmp/m006-creatye-canvas";
const viewports = [
  { name: "mobile-390", width: 390, height: 844 },
  { name: "tablet-768", width: 768, height: 900 },
  { name: "halfwide-1100", width: 1100, height: 900 },
  { name: "reference-1287", width: 1287, height: 913 },
  { name: "desktop-1440", width: 1440, height: 1000 },
  { name: "ultrawide-1920", width: 1920, height: 900 }
];
const surfaces = [
  { group: "dashboard", path: "/" },
  { group: "automations", path: "/automations" },
  { group: "templates", path: "/templates" },
  { group: "studio", path: "/studio?step=customize" }
];
const cases = surfaces.flatMap((surface) => viewports.map((viewport) => ({ ...surface, ...viewport, name: `${surface.group}-${viewport.name}` })));
cases.push(
  { group: "design-system", name: "design-system-light-1440", path: "/design-system", width: 1440, height: 1000 },
  { group: "design-system", name: "design-system-dark-1440", path: "/design-system", width: 1440, height: 1000, dark: true }
);

for (const group of ["dashboard", "automations", "templates", "studio", "design-system"]) await mkdir(`${outputRoot}/${group}`, { recursive: true });

const browser = await chromium.launch();
const results = [];
for (const testCase of cases) {
  const page = await browser.newPage({ viewport: { width: testCase.width, height: testCase.height } });
  await page.goto(`${baseUrl}${testCase.path}`, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForFunction(() => Array.from(document.images).every((item) => item.complete), undefined, { timeout: 60_000 });
  if (testCase.dark) {
    const toggle = page.getByRole("button", { name: /dark mode/i });
    if (await toggle.count()) await toggle.first().click();
    await page.waitForTimeout(200);
  }
  const focusSequence = [];
  for (let index = 0; index < 6; index += 1) {
    await page.keyboard.press("Tab");
    focusSequence.push(await page.evaluate(() => {
      const element = document.activeElement;
      if (!element || typeof element.getAttribute !== "function") return "none";
      return element.getAttribute("aria-label") ?? element.innerText?.trim().slice(0, 32) ?? element.tagName;
    }));
  }
  const diagnostics = await page.evaluate(() => {
    const focusStyle = document.defaultView.getComputedStyle(document.activeElement);
    return {
      horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      bodyOverflow: document.body.scrollWidth - document.body.clientWidth,
      imageCount: document.images.length,
      blankImages: Array.from(document.images).filter((item) => !item.naturalWidth).length,
      focusOutline: focusStyle.outlineStyle,
      focusBoxShadow: focusStyle.boxShadow,
      focusVisible: focusStyle.outlineStyle !== "none" || focusStyle.boxShadow !== "none"
    };
  });
  const file = `${outputRoot}/${testCase.group}/${testCase.name}.png`;
  await page.evaluate(() => document.activeElement?.blur());
  await page.screenshot({ path: file, fullPage: true });
  results.push({ ...testCase, file, focusSequence, ...diagnostics });
  await page.close();
}
await browser.close();
const failures = results.filter((result) => result.horizontalOverflow !== 0 || result.bodyOverflow !== 0 || result.blankImages !== 0 || !result.focusVisible);
console.log(JSON.stringify({ baseUrl, cases: results.length, passed: results.length - failures.length, failures }, null, 2));
if (failures.length) process.exitCode = 1;
