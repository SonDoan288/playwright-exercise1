import { expect, test } from "@playwright/test";


test('Test3', async ({ page }) => {


    await test.step("Step 01: Navigate to URL & Click ", async () => {
        // navigate to link url
        await page.goto("https://material.playwrightvn.com/");
        // click vào Bài học 2: Product Page
        await page.click('text=Bài học 3: Todo page');
    });

    await test.step("Step 02: Add 100 Todo Items", async () => {

        //Add 100 Todo Item: Todo <i>
        const todo = page.locator('xpath=//*[@id="new-task"]');
        const addtask = page.locator('xpath=//*[@id="add-task"]');

        for (let i = 1; i <= 100; i++) {
            await todo.click();
            await todo.clear();
            await todo.fill(`Todo: ${i}`);
            await addtask.click();
            console.log('Add 100 Todo Items ');
        }
    });
    // await test.step("Step 03: Remove Odd Todo Items", async () => {

    //     //Remove Odd Items
    //     const list = page.locator('xpath=//*[@id="task-list"]');

 
    // });
    // CHưa có solution


}); 