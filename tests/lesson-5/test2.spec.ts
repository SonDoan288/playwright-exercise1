import { expect, test } from "@playwright/test";

test('Test2', async ({ page }) => {


    await test.step("Step 01: Navigate to URL & Click ", async () => {
        // navigate to link url
        await page.goto("https://material.playwrightvn.com/");
        // click vào Bài học 2: Product Page
        await page.click('text=Bài học 2: Product page');
    });

    await test.step("Step 02: Add Product1 to card", async () => {

        //Add Product1: 2 Products
        const product1 = page.locator('xpath=//*[text()="Add to Cart" and @data-product-id = "1"]');

        for (let i = 1; i <= 2; i++) {
            await product1.click();
            console.log('Add 2 Product1 to cart');
        }
    });
    await test.step("Step 03: Add Product2 to card", async () => {

        //Add Product2: 3 Products
        const product1 = page.locator('xpath=//*[text()="Add to Cart" and @data-product-id = "2"]');

        for (let i = 1; i <= 3; i++) {
            await product1.click();
            console.log('Add 3 Product2 to cart');
        }
    });
    await test.step("Step 04: Add Product3 to card", async () => {

        //Add Product3: 1 Product
        const product1 = page.locator('xpath=//*[text()="Add to Cart" and @data-product-id = "3"]');

        await product1.click();
        console.log('Add 3 Product2 to cart');

    });

}); 