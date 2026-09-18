# Agent Operation Protocol - Creatye Studio

You are an autonomous agent working on **Creatye Studio** under the governance of **Agent Jaxx Model**.
The project control plane lives in `.agent/`.

## Hard Rules

- Never use `--no-verify` or `-n` on `git commit`. The `post-commit` hook may roll back bypass attempts.
- Never add `.agent/` to `.gitignore`.
- Code or documentation changes must be accompanied by a managed Jaxx session.
- Do not create duplicate files for state, plan, progress, decisions, or verification.
- Jaxx native files are the official sources for those concerns.

## Project Governance

The "Agent Creatye" operating model is:

Jaxx + `AGENTS.md` + project context + specialized skills + architecture governance + design governance + documentation governance.

Use these project skills when relevant:

- `context-manager`
- `architecture-guardian`
- `design-system-guardian`
- `documentation-manager`

Use `docs/project/CONTEXT_INDEX.md` to discover documentation progressively.
Use `docs/legacy/LEGACY_BOUNDARY.md` before relying on the legacy Creatye system.

## Required Workflow

### 1. Before any change

- Read `.agent/STATE.md` and `.agent/PLAN.md`.
- Open a managed session:
  `jaxx session open --agent <your-name>`

### 2. During work

- Log meaningful actions:
  `jaxx log <INFO|WARN|ERROR|DONE|GIT> "<message>" --agent <your-name>`

### 3. Before commit

- Validate quality gates, audit trail, and blast radius:
  `jaxx verify`
- Close the session with a summary:
  `jaxx session close --summary "<what was done and how it was verified>"`

### 4. Commit

- Commit normally, without bypass flags:
  `git add -A && git commit -m "tipo(escopo): mensagem descritiva"`
