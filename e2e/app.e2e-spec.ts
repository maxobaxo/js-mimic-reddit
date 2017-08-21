import { MimicRedditPage } from './app.po';

describe('mimic-reddit App', () => {
  let page: MimicRedditPage;

  beforeEach(() => {
    page = new MimicRedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
