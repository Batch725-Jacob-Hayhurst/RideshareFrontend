import { browser, by, element } from 'protractor';

export class DriversPage {
    navigateTo() {
      return browser.get(browser.seleniumAddress) as Promise<any>;
    }
}