"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const test_1 = require("@playwright/test");
class HomePage {
    constructor(page) {
        this.page = page;
    }
    async navigate() {
        await this.page.goto('https://automationexercise.com/');
    }
    async validateTitle() {
        await (0, test_1.expect)(this.page).toHaveTitle('Automation Exercise');
    }
    async clickSignupLoginLink() {
        // Usa regex para encontrar texto que contém "Signup" e "Login"
        await this.page.getByRole('link').filter({ hasText: /Signup.*Login/i }).click();
    }
}
exports.HomePage = HomePage;
