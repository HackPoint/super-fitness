export class SuperFitnessPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('super-fitness-app h1')).getText();
  }
}
