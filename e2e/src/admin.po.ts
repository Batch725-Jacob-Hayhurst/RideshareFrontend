import { browser, by, element } from 'protractor';

export class AdminPage {
    navigateTo() {
      return browser.get(browser.baseUrl) as Promise<any>;
    }
}
