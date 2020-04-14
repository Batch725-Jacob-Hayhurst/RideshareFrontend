import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class LoginReduxPage {

    navigateToHome():promise.Promise<any> {
        return browser.get('/');
    }

    navigateToLogin():promise.Promise<any>  {
        return browser.get('/login');
    }

    navigateToSignUpModal():promise.Promise<any> {
        return browser.get('/signup')
    }
}
