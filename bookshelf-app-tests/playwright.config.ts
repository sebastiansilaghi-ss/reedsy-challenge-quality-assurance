import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests', // Directory where your tests are located
  timeout: 30000, // Timeout for each test in milliseconds
  retries: 0, // Retry tests that fail
  use: {
    headless: false, // Run tests in headless mode
    viewport: { width: 1280, height: 720 }, // Default viewport size
    actionTimeout: 10000, // Timeout for each action like clicking
    ignoreHTTPSErrors: true, // Ignore HTTPS errors by default
    video: 'retain-on-failure', // Record video only when a test fails
    screenshot: 'only-on-failure', // Take a screenshot only on failure
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'WebKit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  outputDir: 'test-results/', // Directory to store test results like videos and screenshots
  reporter: [['list'], ['html', { open: 'never' }]], // Reporters (list and html)
};

export default config;
