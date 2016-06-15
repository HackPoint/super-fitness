import { SuperFitnessPage } from './app.po';

describe('super-fitness App', function() {
  let page: SuperFitnessPage;

  beforeEach(() => {
    page = new SuperFitnessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('super-fitness works!');
  });
});
