import { expect, test } from "@playwright/test";

test('Test4', async ({ page }) => {
    let articles: Array<{ title: string; content: string }> = [];

    await test.step("Step 01: Navigate to URL & Click ", async () => {
        // navigate to link url
        await page.goto("https://material.playwrightvn.com/");
        // click vào Bài học 4: Personal Note
        await page.click('text=Bài học 4: Personal notes');
    });

    await test.step("Step 02: Navigate VN Express ", async () => {
        const vnexpressPage = await page.context().newPage();
        await vnexpressPage.goto('https://vnexpress.net/khoa-hoc');
    });

    await test.step("Step 03: Get article content from VN Express", async () => {
        const articleTitles = [
            "Khoa học công nghệ mới nhất",
            "Nghiên cứu về trí tuệ nhân tạo", 
            "Phát hiện mới trong y học",
            "Công nghệ blockchain ứng dụng",
            "Nghiên cứu về biến đổi khí hậu",
            "Công nghệ năng lượng tái tạo",
            "Phát triển bền vững",
            "Công nghệ thực tế ảo",
            "Nghiên cứu về vũ trụ",
            "Công nghệ robot hiện đại"
        ];
        const articleContent = [
            "Conten1",
            "Conten2",
            "Conten3",
            "Conten4",
            "Conten5",
            "Conten6",
            "Conten7",
            "Conten8",
            "Conten9",
            "Conten10",
        ];
        
        // Convert to the expected format - combine title and content
        for (let i = 0; i < articleTitles.length; i++) {
            articles.push({ 
                title: articleTitles[i], 
                content: articleContent[i] 
            });
        }
    });

    await test.step("Step 04: Add 10 articles to Note Title and Content", async () => {
        for (let i = 0; i < 10; i++) {
            // Find the Note Title input field
            const noteTitleInput = page.locator('xpath=//input[@id="note-title"]');
            const noteContentInput = page.locator('xpath=//input[@id="note-content"]');
            
            // Clear and fill the title
            await noteTitleInput.clear();
            await noteTitleInput.fill(articles[i].title);
            
            // Clear and fill the content
            await noteContentInput.clear();
            await noteContentInput.fill(articles[i].content);

            // Find and click the add button
            const addButton = page.locator('button:has-text("Add"), button:has-text("Add Note"), button:has-text("Submit"), button[type="submit"], button:has-text("Save")').first();
            await addButton.waitFor({ state: 'visible' });
            await addButton.click();
            
            // Wait a moment for the note to be added
            await page.waitForTimeout(500);
        }
    });
}); 