---
name: radar-junk-audit
description: Audit any authorized project for junk code, dead code, unwanted files, and stale dependencies, then remove them safely. Read-only audit by default; deletions require explicit owner authorization, happen in git-reversible category-batched commits, and are verified with a passing test/build/CI run. Use for repo cleanup, hygiene sweeps, and pre-release tidying.
---

# RADAR Junk Audit

Hygiene sweep for any authorized project: find what should not be there, prove it, and remove it safely under explicit authorization. Works on any repository or path the runtime can actually read; it does not assume this repository.

## Workflow

1. **Scope**: confirm the project root, the runtime's real file access, and whether deletion is authorized. Audit-only by default; say so in the report.
2. **Inventory**: walk the tree; record paths, sizes, and git status (tracked, untracked, ignored). Ignored is context, not proof of junk.
3. **Detect junk categories**:
   - OS/editor junk: .DS_Store, Thumbs.db, desktop.ini, *.swp, *~, .idea/ (unless shared), stray .vscode/
   - Committed build artifacts: dist/, build/, out/, __pycache__/, .next/, committed *.min.js and *.map files, generated caches
   - Logs, temp, coverage: *.log, *.tmp, tmp/, committed coverage reports, test caches
   - Dead code: unreferenced files, unused exports, unreachable branches, commented-out blocks, debug statements, abandoned TODO/FIXME clusters, orphaned configs and flags
   - Dependency junk: unused dependencies, lockfile drift, duplicate packages
   - Duplicates/backups: *.bak, *_old*, "file (1).ext", copy-paste siblings
4. **Security scan (hacker mindset)**: while sweeping, flag secrets and risk - API keys, tokens, private keys, committed .env files, hardcoded credentials, suspicious package.json scripts or hooks. Report them; never delete or echo them. Rotation is the owner's action.
5. **Categorize and risk-score**: each finding gets category, path, size, evidence, confidence (certain/likely/uncertain), and removal risk (safe/reversible/needs-human-judgment).
6. **Report**: grouped findings table, reclaimable size total, top security risks, proposed removal batches ordered safest-first, and an explicit "needs human judgment" list.
7. **Authorized removal** (explicit owner authorization only):
   - Dedicated branch; never delete directly on a default branch.
   - Category-batched commits ("chore: remove OS junk", "chore: uncommit build artifacts") so reverts stay surgical.
   - Update .gitignore so junk does not return.
   - Never touch .git/, user data, secrets (report instead), or anything unproven.
8. **Verify**: run the project's tests, build, lint, or CI after removal; everything must pass. Report exact evidence; never claim success without a green run.

## Red lines

- Audit-only unless the owner explicitly authorizes deletion.
- No deletion that is not reversible via git.
- No junk removal mixed into functional-change commits.
- Uncertain items are proposed for judgment, never removed on a guess.
