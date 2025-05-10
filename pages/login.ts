import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage : Locator;;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#user-name'); 
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage =  page.locator("h3[data-test='error']");
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }

  async getErrormsg()
  {
    const errMessage =await this.errorMessage.textContent();
    return errMessage;
 }
 
}
