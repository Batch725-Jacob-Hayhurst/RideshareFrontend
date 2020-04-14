import { browser, by, element } from 'protractor';

export class ProfilePage {
    navigateTo() {
      return browser.get(browser.baseUrl) as Promise<any>;
    }
}
