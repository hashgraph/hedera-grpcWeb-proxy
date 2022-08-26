import { test, expect } from '@playwright/test';
import { testSetup } from './testSetup';

test('createAccount', async ({ page }) => {
    await testSetup(page);
    await page.locator('data-testid=createAccount').click();
    await expect(page.locator('data-testid=status')).toHaveText("SUCCESS");
});
