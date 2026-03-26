import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

setDefaultTimeout(60000);

let browser: Browser;
let page: Page;
let homePage: HomePage;
let loginPage: LoginPage;

Before(async function() {
  browser = await chromium.launch();
  page = await browser.newPage();
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
});

After(async function() {
  await browser.close();
});

Given('que estou na página inicial do Automation Exercise', async function() {
  await homePage.navigate();
  await homePage.validateTitle();
});

When('clico no link "Signup Login"', async function() {
  await homePage.clickSignupLoginLink();
});

When('preencho o campo de email com {string}', async function(email: string) {
  await loginPage.fillEmail(email);
});

When('preencho o campo de senha com {string}', async function(senha: string) {
  await loginPage.fillPassword(senha);
});

When('clico no botão "Login"', async function() {
  await loginPage.clickLoginButton();
  await page.screenshot({ path: `screenshots/step-${Date.now()}.png` });
});


Then('deve aparecer "Logged in as Jeniffer"', async function() {
  await loginPage.validateSuccessMessage();
});

Then('deve aparecer "Your email or password is incorrect!"', async function() {
  await loginPage.validateInvalidCredentialsMessage();

});
