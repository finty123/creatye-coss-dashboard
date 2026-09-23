import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const baseUrlFlag = process.argv.indexOf("--base-url");
const baseUrl =
  (baseUrlFlag >= 0 ? process.argv[baseUrlFlag + 1] : undefined) ??
  process.env.CREATYE_VISUAL_BASE_URL ??
  "http://127.0.0.1:3000";
const outputFlag = process.argv.indexOf("--output");
const outputDirectory =
  (outputFlag >= 0 ? process.argv[outputFlag + 1] : undefined) ??
  ".agent/tmp/frontend-completion-review";
const viewports = [
  { name: "mobile-390", width: 390, height: 844 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "halfwide-1100", width: 1100, height: 900 },
  { name: "desktop-1440", width: 1440, height: 1000 },
  { name: "wide-1920", width: 1920, height: 1080 }
];
const surfaces = [
  { group: "dashboard", path: "/" },
  { group: "automations", path: "/automations" },
  { group: "automation-detail", path: "/automations/comment-keyword" },
  { group: "automation-builder", path: "/automations/comment-keyword/builder" },
  { group: "pages", path: "/pages" },
  { group: "page-detail", path: "/pages/creatye-brasil" },
  { group: "templates", path: "/templates" },
  { group: "studio-select", path: "/studio?step=select" },
  { group: "studio-customize", path: "/studio?step=customize" },
  { group: "studio-review", path: "/studio?step=review" },
  { group: "studio-publish", path: "/studio?step=publish" },
  { group: "image-studio", path: "/image-studio" },
  { group: "publishing", path: "/publishing" },
  { group: "analytics", path: "/analytics" },
  { group: "settings", path: "/settings" },
  { group: "help", path: "/help" }
];
const cases = surfaces.flatMap((surface) => viewports.map((viewport) => ({ ...surface, ...viewport, name: `${surface.group}-${viewport.name}` })));
cases.push(
  { group: "dashboard", name: "dashboard-actions-menu-reference-1287", path: "/", width: 1287, height: 913, actionsMenu: true },
  { group: "pages", name: "pages-connect-reference-1287", path: "/pages", width: 1287, height: 913, connectDialog: true },
  { group: "pages", name: "pages-dark-1440", path: "/pages", width: 1440, height: 1000, dark: true },
  { group: "design-system", name: "design-system-light-1440", path: "/design-system", width: 1440, height: 1000 },
  { group: "design-system", name: "design-system-dark-1440", path: "/design-system", width: 1440, height: 1000, dark: true }
);

const screenshotDirectory = path.resolve(outputDirectory);
await mkdir(screenshotDirectory, { recursive: true });
const browser = await chromium.launch();
const results = [];
for (const testCase of cases) {
  const page = await browser.newPage({ viewport: { width: testCase.width, height: testCase.height } });
  await page.goto(`${baseUrl}${testCase.path}`, { waitUntil: "networkidle", timeout: 60_000 });
  await page.addStyleTag({ content: "nextjs-portal { display: none !important; }" });
  await page.waitForFunction(() => Array.from(document.images).every((item) => item.complete), undefined, { timeout: 60_000 });
  if (testCase.connectDialog) {
    const connect = page.getByRole("button", { name: /Conectar página/ });
    if (await connect.count()) await connect.first().click({ force: true });
    await page.waitForTimeout(200);
  }
  if (testCase.dark || testCase.actionsMenu) {
    const more = page.getByRole("button", { name: "More options" });
    if (await more.count()) await more.first().click({ force: true });
    const themeMenu = page.getByRole("menuitem", { name: "Theme" });
    if (await themeMenu.count()) await themeMenu.click({ force: true });
    if (testCase.dark) {
      const dark = page.getByRole("menuitemradio", { name: "Dark" });
      if (await dark.count()) await dark.click({ force: true });
    }
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
  await page.evaluate(() => document.activeElement?.blur());
  await page.screenshot({ path: path.join(screenshotDirectory, `${testCase.name}.png`), fullPage: true });
  results.push({ ...testCase, focusSequence, ...diagnostics });
  await page.close();
}
await browser.close();
const failures = results.filter((result) => result.horizontalOverflow !== 0 || result.bodyOverflow !== 0 || result.blankImages !== 0 || !result.focusVisible);
console.log(JSON.stringify({ baseUrl, cases: results.length, passed: results.length - failures.length, failures }, null, 2));
if (failures.length) process.exitCode = 1;
