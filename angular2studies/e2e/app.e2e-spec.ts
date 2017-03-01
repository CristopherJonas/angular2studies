import { Angular2studiesPage } from './app.po';

describe('angular2studies App', () => {
  let page: Angular2studiesPage;

  beforeEach(() => {
    page = new Angular2studiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
