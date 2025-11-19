import { test, expect } from '@playwright/test';
import { testSetup } from './testSetup';

test('getBalance', async ({ page }) => {
    await testSetup(page);
    await page.getByRole('button', { name: 'Get Balance' }).click();
    await expect(page.locator('data-testid=status')).not.toBeEmpty();
});
