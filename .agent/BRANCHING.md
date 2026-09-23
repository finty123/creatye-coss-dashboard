# Branching Strategy

- `main` — always shippable. Protected where possible.
- `feat/<slug>` — one feature per branch per agent.
- `fix/<slug>` — bug fixes.
- Merge via PR by default. A direct push to the requested deployment branch is allowed only when the product owner explicitly asks for it.

## Enforcement
Run `jaxx doctor` to verify expected branches exist and working
trees are clean before starting work.

## Conflict resolution strategy
`AGENT_LOG.jsonl`, `.agent/quality/`, and `.agent/tmp/` are local and ignored.
Versioned control-plane conflicts in `STATE.md`, `PLAN.md`, `PROGRESS.md`,
`DECISIONS.md`, and `VERIFICATION.md` must be resolved semantically after
`git pull --rebase`; do not discard another session's record.
