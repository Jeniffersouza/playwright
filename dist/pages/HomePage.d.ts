import { Page } from '@playwright/test';
export declare class HomePage {
    private page;
    constructor(page: Page);
    navigate(): Promise<void>;
    validateTitle(): Promise<void>;
    clickSignupLoginLink(): Promise<void>;
}
