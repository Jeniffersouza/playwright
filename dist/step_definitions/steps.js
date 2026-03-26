"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const playwright_1 = require("playwright");
const HomePage_1 = require("../pages/HomePage");
const LoginPage_1 = require("../pages/LoginPage");
(0, cucumber_1.setDefaultTimeout)(60000);
let browser;
let page;
let homePage;
let loginPage;
(0, cucumber_1.Before)(async function () {
    browser = await playwright_1.chromium.launch();
    page = await browser.newPage();
    homePage = new HomePage_1.HomePage(page);
    loginPage = new LoginPage_1.LoginPage(page);
});
(0, cucumber_1.After)(async function () {
    await browser.close();
});
(0, cucumber_1.Given)('que estou na página inicial do Automation Exercise', async function () {
    await homePage.navigate();
    await homePage.validateTitle();
});
(0, cucumber_1.When)('clico no link "Signup Login"', async function () {
    await homePage.clickSignupLoginLink();
});
(0, cucumber_1.When)('preencho o campo de email com {string}', async function (email) {
    await loginPage.fillEmail(email);
});
(0, cucumber_1.When)('preencho o campo de senha com {string}', async function (senha) {
    await loginPage.fillPassword(senha);
});
(0, cucumber_1.When)('clico no botão "Login"', async function () {
    await loginPage.clickLoginButton();
    await page.screenshot({ path: `screenshots/step-${Date.now()}.png` });
});
(0, cucumber_1.Then)('deve aparecer "Logged in as Jeniffer"', async function () {
    await loginPage.validateSuccessMessage();
});
(0, cucumber_1.Then)('deve aparecer "Your email or password is incorrect!"', async function () {
    await loginPage.validateInvalidCredentialsMessage();
});
