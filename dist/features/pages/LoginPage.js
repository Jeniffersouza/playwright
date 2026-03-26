export class LoginPage {
    constructor(page) {
        this.page = page;
    }
    async fillEmail(email) {
        await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
        await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
    }
    async fillPassword(password) {
        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    }
    async clickLoginButton() {
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
    async login(email, password) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }
}
