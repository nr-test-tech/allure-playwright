Install allure-playwright

npm install -D allure-playwright

Add allure-playwright as the reporter in the Playwright configuration file:

import { defineConfig } from '@playwright/test';
export default defineConfig({
  reporter: "allure-playwright",
});

Run command to execute sceipt along with allure report

npx playwright test --reporter=line,allure-playwright

To generate Generate Allure Report after the tests are executed:

allure generate ./allure-results -o ./allure-report

When the test run completes, the result files will be generated in the ./allure-results directory.
