import { Builder } from "selenium-webdriver";
import { By } from "selenium-webdriver/lib/by";

async function test() {
    const driver = await new Builder().forBrowser('chrome').build();



    await driver.manage().setTimeouts({ script: 10000, implicit: 20000, pageLoad: 30000 })


    await driver.get('https://www.flipkart.com');

    await (await driver.findElement(By.xpath(`//input[@title="Search for Products, Brands and More"]`))).sendKeys("iphone 15")

    await (await driver.findElement(By.xpath(`//button[@type="submit"]`))).click()

    await (await driver.findElement(By.xpath(`//div[text()='Apple iPhone 15 (Pink, 128 GB)']`))).click()

    let windows = await driver.getAllWindowHandles();

    await driver.switchTo().window(windows[1])

    await (await driver.findElement(By.xpath(`//button[text()='Buy Now']`))).click()

    console.log(await driver.getCurrentUrl())
    console.log('Passed')
}