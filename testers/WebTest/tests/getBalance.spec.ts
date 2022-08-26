import { test, expect } from '@playwright/test';
import { testSetup } from './testSetup';

test('getBalance', async ({ page }) => {
    await testSetup(page);
    await page.locator('data-testid=getBalance').click();
    await expect(page.locator('data-testid=status')).not.toBeEmpty();
});
