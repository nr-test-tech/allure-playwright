import type {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
    
    //testMatch: ["test/"],
    use: {
        baseURL: "https://www.saucedemo.com/",
        headless: false,
        screenshot: "on",
        video: "on",
        launchOptions: {
            // slowMo: 1000
        },
    },
    
    timeout: 60 * 1000 * 5,
    retries: 0,
    reporter: [["dot"], ["allure-playwright"], 
        ["html", {
            open: "never"
        }]]
};

export default config;