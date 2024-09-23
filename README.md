# reedsy-challenge-quality-assurance  Bookshelf App Automation Framework

This repository contains an end-to-end automation framework for testing the **Bookshelf App** using **Playwright** and **TypeScript**. The framework follows best practices such as the **Page Object Model (POM)** for maintainability and scalability. It includes tests for basic functionality, such as searching for books, sorting books, and viewing book details (title, author, and rating).

## About Me
I have worked on various commercial projects as a QA Engineer, including both web and mobile applications, for the flawless delivery of user experiences. I fully understand the importance of reaching time-to-market goals by ensuring no blockers exist and all features are working as expected. Various commercial projects that I have contributed to have covered a wide variety of domains including financial services, parking systems, re-marketing, fin-tech, and energy.

These projects were collaborations between developers, product managers, and designers. My main responsibilities included manual and automated testing. I created extensive test cases based on functional requirements and user stories, where the coverage of all key features was guaranteed.

I automate complete end-to-end tests using different automation frameworks, such as Selenium WebDriver, Playwright, TestCafe, or Appium, to improve overall efficiency. This helped in smoothing the process of regression testing and further reduced testing cycle times. I have also contributed actively to defect tracking and collaborated with development teams for defect fixes, ensuring speed and efficiency in getting things on track toward release.

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
```

## Instructions for running the tests

1. **Clone the repository**  
   Clone this repository to your local machine using Git.

2. **Navigate into the cloned repository directory**  
   Move into the project folder you just cloned.

3. **Install Dependencies**  
   Ensure you have **Node.js** installed. Then, install the project dependencies by running the following command:
   ```bash
   npm install
   ```
4. **Install Playwright Browsers**
    ```bash
   npx playwright install
   ```
5. **Run All Tests**
    ```bash
   npx playwright test
   ```
6. **Run Tests for High-Priority Bugs and a Passing Feature**
To run failing tests for two high-priority bugs, as well as a passing test for a working feature, use:
   ```bash
   npx playwright test tests/e2e/bookshelf.test.ts
   ```
Inside the bookshelf.test.ts file, you will find explanations for why these bugs are considered high priority.
7. **Run robust, maintainable tests**
You can run the robust and maintainable tests by executing:
   ```bash
   npx playwright test tests/e2e/bookshelf_maintainable.test.ts
   ```
Inside the bookshelf_maintainable.test.ts file, you will find an explanation of why the passing test is valuable.





