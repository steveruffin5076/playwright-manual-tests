# Playwright Manual Test Automation

A hand-coded end-to-end test suite for [The Internet](https://the-internet.herokuapp.com/) — a public site built for practicing test automation — using Playwright and TypeScript.

## Tech Stack
- Playwright (test runner + browser automation)
- TypeScript
- Page Object Model (POM) design pattern
- GitHub Actions for CI/CD

## What's Tested
- Homepage title verification
- Checkbox interaction
- Login form validation (invalid credentials)
- Dropdown selection

## Project Structure
- `tests/` — test specs
- `pages/` — Page Object classes (e.g. `LoginPage.ts`)
- `.github/workflows/` — CI pipeline definition

## Running Locally
​```
npm install

npx playwright install

npx playwright test
​```

## CI/CD
Tests run automatically on every push to `main` via GitHub Actions, across Chromium, Firefox, and WebKit. Test reports are uploaded as artifacts for 30 days.
