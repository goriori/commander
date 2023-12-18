import puppeteer from "puppeteer";

export class Puppeteer {
    constructor() {
        this.pptr = puppeteer;

    }

    async init(headless) {
        const browser = await this.pptr.launch({headless: false})
        const page = await browser.newPage()

        function setSettings(settings = {width: 1080, height: 1024}) {
            page.setViewport({...settings})
        }

        async function openPage(url) {
            await page.goto(url)
        }

        function closeBrowser() {
            browser.close()
        }

        return {
            setSettings,
            openPage,
            closeBrowser
        }
    }


}

