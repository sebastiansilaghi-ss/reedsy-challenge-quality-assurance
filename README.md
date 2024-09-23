# reedsy-challenge-quality-assurance  Bookshelf App Automation Framework

This repository contains an end-to-end automation framework for testing the **Bookshelf App** using **Playwright** and **TypeScript**. The framework follows best practices such as the **Page Object Model (POM)** for maintainability and scalability. It includes tests for basic functionality, such as searching for books, sorting books, and viewing book details (title, author, and rating).

## Features
- **End-to-End Tests**: Tests cover the key features of the Bookshelf App.
- **Playwright**: Automated browser testing using Playwright for Chromium, Firefox, and WebKit.
- **Page Object Model**: The tests are structured to use POM for reusability and easier maintenance.
- **Cross-Browser Testing**: The tests can be run across different browsers.

## Project Structure
```bash
bookShelf-app-tests/
├── page-objects/           # Page Object Models (POM)
│   └── bookShelfPage.ts    # BookShelf page interactions
├── tests/
│   └── e2e/                # End-to-End Tests
│       └── bookshelf.test.ts              # Basic tests
│       └── bookshelf_maintainable.test.ts # Tests using POM
├── config.ts               # Configuration file with environment URLs
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── playwright.config.ts    # Playwright configuration
