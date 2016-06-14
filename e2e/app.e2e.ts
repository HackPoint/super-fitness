import { SuperFittnessPage } from './app.po';

describe('super-fittness App', function() {
  let page: SuperFittnessPage;

  beforeEach(() => {
    page = new SuperFittnessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('super-fittness works!');
  });
});
