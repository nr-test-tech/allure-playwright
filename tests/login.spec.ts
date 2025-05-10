import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import * as users from '../data/test-data.json';


test.describe('Login', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page, baseURL }) => {
        loginPage = new LoginPage(page);
        await page.goto(`${baseURL}`);
    })

    test('verify login with valid credentials', async ({ page }) => {
        await loginPage.login(users.admin.username, users.admin.password);
        // Assert that the URL changed to the inventory page (example of a successful login)
        await expect(page).toHaveURL(`/inventory.html`);
        // Assert that the inventory list is visible (indicating a successful login)
        const inventoryList = await page.locator('.inventory_list');
        await expect(inventoryList).toBeVisible();
        // Optionally, check for a welcome message or other indicator
        const welcomeMessage = await page.locator('.title'); // Adjust selector as needed
        await expect(welcomeMessage).toBeVisible();
        await expect(welcomeMessage).toHaveText('Products')
    });


    // Test: Verify login with invalid credentials
    test('Verify login with invalid credentials', async ({ page }) => {
        await loginPage.login(users.invalid_user.username, users.invalid_user.password);
        // Assert that the error message is visible
        const errorMessage = await loginPage.getErrormsg();
        await expect(errorMessage).toBe('Epic sadface: Sorry, this user has been locked out.');
    });


    test("Negative: User tries to login without credentials.", async ({ page }) => {
        await loginPage.login("", "");
        // Assert that the error message is visible
        const errorMessage = await loginPage.getErrormsg();
        await expect(errorMessage).toBe('Epic sadface: Username is required');

    });

});


