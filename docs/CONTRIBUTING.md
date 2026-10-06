# Contributing

Thanks for considering a contribution to Campfire. Suggestions, bug reports, and focused pull requests are welcome.

## Before you start

- Search existing issues and pull requests to avoid duplicating work.
- For a substantial feature, open an issue first to discuss the scope.
- Keep changes focused and explain the user problem they solve.
- Do not commit credentials, `.env` files, database dumps, or personal data.

## Local setup

Follow the setup steps in the [README](../README.md). The app needs Node.js and a reachable MongoDB instance. Create `server/.env` from the example and use a local-only JWT secret.

## Working on a change

1. Create a branch for your change.
2. Make the smallest clear change that addresses the issue.
3. Keep frontend and API behavior consistent; update `docs/API.md` when an endpoint or payload changes.
4. Before opening a pull request, run `npm run build` and manually exercise the affected flow with the API and MongoDB running.
5. Review the diff and confirm no `.env` file or secret is included.

## Pull requests

Include:

- A short summary and the reason for the change
- The related issue, if one exists
- How you checked the change
- Screenshots for visible UI changes, where useful
- Any follow-up work or known limitation

Be respectful and constructive in code review. By contributing, you agree that your work may be distributed under the license eventually chosen for this repository; until a license is added, please ask the maintainer before reusing or redistributing contributions.
