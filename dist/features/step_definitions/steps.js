import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { HomePage } from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';
setDefaultTimeout(60000);
let browser;
let page;
let homePage;
let loginPage;
Before(async function () {
    browser = await chromium.launch();
    page = await browser.newPage();
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
});
After(async function () {
    await browser.close();
});
Given('que estou na página inicial do Automation Exercise', async function () {
    await homePage.navigate();
    await homePage.validateTitle();
});
When('clico no link "Signup / Login"', async function () {
    await homePage.clickSignupLoginLink();
});
When('preencho o campo de email com {string}', async function (email) {
    await loginPage.fillEmail(email);
});
When('preencho o campo de senha com {string}', async function (senha) {
    await loginPage.fillPassword(senha);
});
When('clico no botão "Login"', async function () {
    await loginPage.clickLoginButton();
});
Then('devo ser redirecionado para a página logada', async function () {
    await page.waitForNavigation();
    // Adicionar uma verificação aqui, como verificar se um elemento específico está visível
});
When('clico no link "Website for automation"', async function () {
    await homePage.clickWebsiteForAutomationLink();
});
