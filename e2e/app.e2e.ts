import { EcPage } from './app.po';

describe('ec App', function() {
  let page: EcPage;

  beforeEach(() => {
    page = new EcPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ec Works!');
  });
});
