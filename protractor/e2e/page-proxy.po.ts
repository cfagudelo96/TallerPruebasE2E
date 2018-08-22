import { browser, by, element } from 'protractor';

export class TourOfHeroesPage {
  navigateToDashboard() {
    return browser.get('/');
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  navigateToHeroDetails(id: number) {
    return browser.get(`/detail/${id}`);
  }
}
