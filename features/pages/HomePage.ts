import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://automationexercise.com/');
  }

  async validateTitle() {
    await expect(this.page).toHaveTitle('Automation Exercise');
  }

  async clickSignupLoginLink() {
    // Usa regex para encontrar texto que contém "Signup" e "Login"
    await this.page.getByRole('link').filter({ hasText: /Signup.*Login/i }).click();
  }

}
