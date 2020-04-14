import { browser, by, element } from 'protractor';

export class AdminLoginPage {
    navigateTo() {
      return browser.get(browser.baseUrl + 'login/admin') as Promise<any>;
    }

    navigateToLoginRedux() {
      return browser.get(browser.baseUrl + '/');
    }

    getLoginForm() {
      return element(by.id('login-form'));
    }

    getAdminId() {
      return this.getLoginForm().getAttribute('admins');
    }

    // getAdminIdForm() {
    //   return element(by.id('admins'));
    // }

    // getAdminId() {
    //   return this.getAdminIdForm().get(0).getText();
    // }
}
