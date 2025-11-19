import { Page } from 'playwright-core';

export async function testSetup(page: Page) {
    await page.goto(process.env.WEBAPP_URL || "");

    await page.locator('data-testid=proxyUrl').fill(process.env.PROXY_URL || "");
    await page.locator('data-testid=privateKey').fill(process.env.PRIVATE_KEY || "");
    await page.locator('data-testid=accountId').fill(process.env.OPERATOR_ID || "");
    await page.locator('data-testid=nodeAccountId').fill(process.env.NODE_ACCOUNT_ID || "");

}

