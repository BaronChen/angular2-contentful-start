import { HapiHostPage } from './app.po';

describe('hapi-host App', () => {
  let page: HapiHostPage;

  beforeEach(() => {
    page = new HapiHostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
