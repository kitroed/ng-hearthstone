import { AppPage } from './app.po';

describe('ng-hearthstone App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title in toolbar', () => {
    page.navigateTo();
    expect(page.getToolbarText()).toEqual('NgHearthstone');
  });
});
