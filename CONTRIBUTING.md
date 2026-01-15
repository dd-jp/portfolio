# Contributing to Portfolio

Thank you for your interest in contributing to this portfolio project! This document provides guidelines for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## Getting Started

### Prerequisites

- Node.js >= 22.0.0 (see `.nvmrc` for exact version)
- Yarn 4.12.0+ (specified in `package.json`)

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   yarn install
   ```

4. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. Start the development server:
   ```bash
   yarn dev
   ```

## Development Workflow

### Running the Project

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

### Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── components/  # Astro components
│   ├── layouts/     # Page layouts
│   └── pages/       # Page routes
├── astro.config.mjs # Astro configuration
└── tailwind.config.mjs # Tailwind CSS configuration
```

## Coding Standards

### General Guidelines

- Write clear, readable, and maintainable code
- Follow the existing code style and structure
- Comment complex logic when necessary
- Keep components focused and single-purpose
- Ensure responsive design works on all screen sizes

### TypeScript

- Use TypeScript for type safety
- Avoid using `any` type when possible
- Define interfaces for component props

### Astro Components

- Use `.astro` extension for Astro components
- Keep component frontmatter clean and organized
- Use Tailwind CSS for styling
- Ensure dark mode compatibility

### CSS/Tailwind

- Prefer Tailwind utility classes over custom CSS
- Use dark mode variants: `dark:` prefix
- Maintain responsive design: `sm:`, `md:`, `lg:` breakpoints
- Keep styling consistent with existing design

## Commit Guidelines

We follow conventional commit messages for clarity:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without functionality changes
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates

### Examples

```bash
feat(header): add mobile navigation menu
fix(theme): resolve dark mode toggle issue
docs(readme): update installation instructions
style(components): format code with prettier
```

## Pull Request Process

1. **Update Documentation**: Ensure README and other docs reflect your changes

2. **Test Thoroughly**: 
   - Test in multiple browsers
   - Verify responsive design
   - Check dark mode functionality

3. **Keep PRs Focused**: One feature or fix per PR

4. **Write a Clear Description**:
   - What changes were made?
   - Why were they made?
   - How can they be tested?

5. **Link Related Issues**: Use "Fixes #123" or "Closes #123"

6. **Request Review**: Tag maintainers for review

7. **Address Feedback**: Respond to review comments promptly

### PR Title Format

Follow the same format as commit messages:

```
feat(component): add new feature
fix(header): resolve navigation bug
```

## Reporting Bugs

### Before Submitting

- Check if the bug has already been reported
- Verify the bug in the latest version
- Collect relevant information

### Bug Report Template

When creating a bug report, include:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**:
   - Step 1
   - Step 2
   - Step 3
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Screenshots**: If applicable
6. **Environment**:
   - Browser and version
   - OS
   - Screen size (for responsive issues)

## Suggesting Enhancements

We welcome enhancement suggestions! When suggesting an enhancement:

1. **Check Existing Issues**: Avoid duplicates
2. **Provide Context**: Why is this enhancement needed?
3. **Describe the Solution**: How should it work?
4. **Consider Alternatives**: What other approaches were considered?
5. **Additional Context**: Screenshots, mockups, examples

### Enhancement Template

```markdown
## Enhancement Description
[Clear description of the enhancement]

## Motivation
[Why is this enhancement valuable?]

## Proposed Solution
[How should it work?]

## Alternatives Considered
[What other approaches did you consider?]

## Additional Context
[Screenshots, mockups, links, etc.]
```

## Questions?

If you have questions that aren't covered in this guide, feel free to:
- Open a discussion on GitHub
- Reach out via the contact information in the README

## Recognition

Contributors will be recognized in the project. Thank you for helping improve this portfolio!

---

**Note**: This is a personal portfolio project. While contributions are welcome, the maintainer reserves the right to accept or decline contributions based on alignment with the project's vision and goals.
