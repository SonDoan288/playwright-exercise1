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
        }
        console.log('Add 100 Todo Items ');
    });
    await test.step("Step 03: Odd Item & Delete ", async () => {
        //3.1: Get all text of the specified locator into array A1
        const todoElements = await page.locator('xpath=//ul[@id="task-list"]//span').all();
        const arrayA1: string[] = [];

        for (const element of todoElements) {
            const text = await element.textContent();
            if (text) {
                arrayA1.push(text.trim());
            }
        }

        console.log('Array A1 (all todo texts):', arrayA1);

        //3.2 In A2 tu A1 loc theo so le
        const arrayA2 = arrayA1.filter(todo => parseInt(todo.split(': ')[1]) % 2 === 1);

        console.log('Array A2 (odd numbers to delete):', arrayA2);

        //3.3: Write a for loop for Array A2 and click the delete buttons

        for (let i = 0; i < arrayA2.length; i++) {
            const oddNumber = parseInt(arrayA2[i].split(': ')[1]);
            const deleteButton = page.locator(`#todo-${oddNumber}-delete`);
            await deleteButton.click();
            // page.on('dialog', async dialog => {
            //     console.log(`Dialog message: ${dialog.message()}`);
            //     await dialog.accept(); // This clicks OK
            // });
        }
    });




}); 