import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  login() {
    browser.sleep(5000);
    element(by.id('btnLogin')).click();
    browser.sleep(200000);
  }
}
