import { browser, by, element } from 'protractor';

export class AdminLoginPage {
    navigateTo() {
      return browser.get(browser.baseUrl) as Promise<any>;
    }
}