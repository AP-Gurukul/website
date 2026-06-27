# Contributing to Sadhana APPSC

Thank you for your interest in contributing to the **Sadhana APPSC** web application! To maintain the quality and security of the codebase, we ask that all developers follow the guidelines outlined in this document.

## 🤝 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. We expect all contributors to maintain a professional, respectful, and inclusive environment.

## 🛠️ Development Workflow

We use a standard Feature Branch Workflow. Please do not commit directly to the `main` branch.

### 1. Branch Naming Conventions
Create a new branch for every feature or bug fix. Use the following prefixes to categorize your branch:
- `feat/` for new features (e.g., `feat/add-user-dashboard`)
- `fix/` for bug fixes (e.g., `fix/header-alignment`)
- `chore/` for maintenance tasks (e.g., `chore/update-dependencies`)
- `docs/` for documentation updates

### 2. Making Changes
- Write clean, readable, and well-documented TypeScript code.
- Ensure your changes are responsive and tested on both mobile and desktop screen sizes.
- Keep components modular. If a component grows larger than 250 lines, consider breaking it down into smaller sub-components.
- Adhere to the existing Vanilla CSS Module patterns for styling. Avoid inline styles unless absolutely necessary for dynamic calculations.

### 3. Commit Message Guidelines
We use semantic commit messages. A good commit message helps track down bugs and automatically generates changelogs.

**Format:**
```
<type>(<scope>): <subject>
```
**Examples:**
- `feat(navbar): add responsive hamburger menu`
- `fix(pricing): correct the waitlist button link`
- `chore(deps): update vite to v5.0.0`

### 4. Pull Request (PR) Process
1. Push your branch to the remote repository.
2. Open a Pull Request against the `main` branch.
3. Ensure your PR description clearly states **what** changes were made and **why**.
4. Attach screenshots or screen recordings if your PR involves UI/UX changes.
5. Wait for a code review. Do not merge your own PRs.

## 🧪 Testing and Quality Assurance
Before opening a PR, ensure that:
1. The application builds without any TypeScript errors: `npm run build`
2. There are no missing React imports or unused variables.
3. The UI looks correct and there are no console errors in the browser.

## 📬 Contact
For any major architectural proposals or access requests, please contact the repository administrator.
