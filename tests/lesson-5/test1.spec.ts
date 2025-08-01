import { expect, test } from "@playwright/test";

test("Test 01", async ({ page }) => {
    await test.step("Step 01: Navigate to URL & Click ", async () => {
        // navigate to link url
        await page.goto("https://material.playwrightvn.com/");
        // click vào element có xpath://a[contains(text(), "Bài học 1: Register Page")]
        await page.locator('xpath = //a[contains(text(), "Bài học 1: Register Page")]').click();
    });
    await test.step("Step 02: Click & Enter Usser Name", async () => {
        // Click vào element user name & điền usename
        await page.locator("xpath=//input[@id='username']").fill("Username01")
    });
    await test.step("Step 03: Click & Enter Email", async () => {
        // Click vào element user name & điền usename
        await page.locator("xpath=//input[@id='email']").fill("test@mail01")
    });
    await test.step("Step 04: Check and Select 1 option for radio button male or female", async () => {
        //Khai báo 2 biến male và female của radio button
        const maleRadio = page.locator('xpath=//input[@type="radio" and @value="male"]');
        const femaleRadio = page.locator('xpath=//input[@type="radio" and @value="female"]');

        //Khai báo 1 biến 
        const isMaleChecked = await maleRadio.isChecked();
        console.log("Male is checked:", isMaleChecked);

        // Male đã được chọn thì chọn Female & ngược lại
        if (isMaleChecked) {
            await femaleRadio.click();
            //Kiểm tra trạng thái
            const isFemaleNowChecked = await femaleRadio.isChecked();
            console.log("Switched to Female, Female is now checked:", isFemaleNowChecked);
        } else {
            await maleRadio.click();
            // Kiểm tra trạng thái
            const isMaleNowChecked = await maleRadio.isChecked();
            console.log("Selected Male, Male is now checked:", isMaleNowChecked);
        }
    });
    await test.step("Step 05: Select Hobbies", async () => {
        // User chọn Reading 
        await page.locator("xpath=//input[@id='reading']").click();

        // User chọn Traveling
        // await page.locator("xpath=//input[@id='travelling']").click();

        // User chọn Cooking 
        // await page.locator("xpath=//input[@id='reading']").click();
    });

    await test.step("Step 06: Select Interests", async () => {

        const interestsSelect = page.locator('xpath=//select[@id = "interests"]');

        // Click vào select dropdown 
        await interestsSelect.click();

        // Chọn Technology bằng cách click vào option
        await page.locator('xpath=//option[@value="technology"]').click();
        console.log('Selected Technology');

        // User chọn Science
        // await page.locator('xpath=//option[@value="science"]').click();

        // User chọn Art
        // await page.locator('xpath=//option[@value="art"]').click();

        // Verify
        const selectedValue = await interestsSelect.inputValue();
        console.log('Selected value:', selectedValue);
    });

    await test.step("Step 07: Select Country", async () => {
        // Tìm select dropdown cho Country
        const countrySelect = page.locator('xpath=//select[@id = "country"]');

        // Click vào select dropdown để mở options
        await countrySelect.click();

        // Select option Canada
        await countrySelect.selectOption({ label: 'Canada' });
        console.log('Selected Canada using selectOption');

        // Select option USA
        // await countrySelect.selectOption({ label: 'United States' });
        // console.log('Selected United States using selectOption');

        // Select option United Kingdom
        // await countrySelect.selectOption({ label: 'United Kingdom' });
        // console.log('Selected United Kingdom using selectOption');

        // Select option Australia
        // await countrySelect.selectOption({ label: 'Australia' });
        // console.log('Selected Australia using selectOption');


        // Verify selection
        const selectedValue = await countrySelect.inputValue();
        console.log('Selected country value:', selectedValue);
    });
    await test.step("Step 08: Select DOB & Enter DOB", async () => {

        const dobInput = page.locator("xpath=//input[@id='dob']");

        // Click vào input field để focus
        await dobInput.click();

        // Nhập ngày sinh
        await dobInput.clear();
        await dobInput.fill('1990-05-15');
        console.log('Entered Date of Birth: 1990-05-15');

        // Verify input
        const enteredValue = await dobInput.inputValue();
        console.log('Date of Birth value:', enteredValue);
    });

    await test.step("Step 09: Select Profile Picture & Upload", async () => {

        // Tìm input file cho Profile Picture
        const fileInput = page.locator("xpath=//input[@id='profile']");

        // Upload file
        await fileInput.setInputFiles('/Users/levi/PW-K16/pw-course/tests/profilepicture.txt');
        console.log('File uploaded using setInputFiles');

    });
    await test.step("Step 10: Handle Rating", async () => {

        // Click on Rate Us and enter value 8 
        await page.locator("xpath=//input[@id='rating']").fill("8");

    });
    // await test.step("Step 11: Handle Favorite Color", async () => {

    //     // Tìm input field cho Favorite Color với XPath cụ thể
    //     const colorInput = page.locator('xpath=//input[@id = "favcolor"]');

    //     // Click vào input field
    //     await colorInput.click();
    //     console.log('Clicked on Favorite Color input');

    //     // Nhập giá trị RGB 
    //     // await colorInput.fill('#FF0000'); // Red
    //     await page.keyboard.type('#FF111');
    //     console.log('Entered RGB values: R=255, G=0, B=0 (Red)');

    // });
    await test.step("Step 12: Handle Hover for Newletters", async () => {

        const newsletterElement = page.locator('text=Hover over me');
        await expect(newsletterElement).toBeVisible();

        await newsletterElement.hover();


    });
    // await test.step("Step 13: Handle Enable Feature", async () => {

    //     await page.locator("xpath=//input[@id='toggleOption']").click();

    // });

    await test.step("Step 14: Handle Start Rating", async () => {

        const rating = page.locator('xpath=//*[@id="starRating"]');

        await rating.click();

    });
    // await test.step("Step 15: Handle Custom Date", async () => {

    //     const custom = page.locator('xpath=//input[@id="customDate"]');

    //     await custom.click();

    //     await custom.clear();
    //     await custom.fill('08-08-1995');

    // });

    // Custom Date khong nhap value đuoc

    await test.step("Step 16: Click Register Button", async () => {
        const register = page.locator('xpath=//*[text()="Register"]');
        await register.click();
    });
    

});