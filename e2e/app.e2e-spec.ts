import { AppPage } from './app.po';

describe('user-management App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Welcome to app!');
  // });

  it('should display welcome message', () => {
    page.navigateTo();
    page.login();
    //expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
