import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async fillEmail(email: string) {
    await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
  }

  async fillPassword(password: string) {
    await this.page.getByRole('textbox', { name: 'Password' }).click();
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  }

  async clickLoginButton() {
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async login(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }
  async validateSuccessMessage() {
  
  await expect(this.page.getByText('Logged in as Jeniffer')).toBeVisible();
}

async validateInvalidCredentialsMessage() {
  
  await expect(this.page.getByText('Your email or password is incorrect!')).toBeVisible();
}
}
