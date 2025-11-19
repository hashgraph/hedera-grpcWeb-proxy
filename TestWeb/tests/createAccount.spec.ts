import { test, expect } from '@playwright/test';
import { testSetup } from './testSetup';

test('createAccount', async ({ page }) => {
    await testSetup(page);
    await page.getByRole('button', { name: 'Create Account' }).click();
    await expect(page.locator('data-testid=status')).toHaveText("SUCCESS");
});
