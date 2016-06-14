export class SuperFittnessPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('super-fittness-app h1')).getText();
  }
}
