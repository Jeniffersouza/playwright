import { Page } from '@playwright/test';
export declare class LoginPage {
    private page;
    constructor(page: Page);
    fillEmail(email: string): Promise<void>;
    fillPassword(password: string): Promise<void>;
    clickLoginButton(): Promise<void>;
    login(email: string, password: string): Promise<void>;
}
