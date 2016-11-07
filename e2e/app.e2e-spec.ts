import { PlaywithAngular2Page } from './app.po';

describe('playwithangular2 App', function() {
  let page: PlaywithAngular2Page;

  beforeEach(() => {
    page = new PlaywithAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
