import { expect } from '@playwright/test';
export class HomePage {
    constructor(page) {
        this.page = page;
    }
    async navigate() {
        await this.page.goto('https://automationexercise.com/');
    }
    async validateTitle() {
        await expect(this.page).toHaveTitle('Automation Exercise');
    }
    async clickSignupLoginLink() {
        await this.page.getByRole('link', { name: ' Signup / Login' }).click();
    }
    async clickWebsiteForAutomationLink() {
        await this.page.getByRole('link', { name: 'Website for automation' }).click();
    }
}
