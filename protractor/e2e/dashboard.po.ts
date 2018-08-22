import { by, element } from 'protractor';
import { TourOfHeroesPage } from './page-proxy.po';

export class DashboardPage extends TourOfHeroesPage {
  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  searchHero(name: string) {
    const searchBox = element(by.id('search-box'));
    searchBox.sendKeys(name);
    element.all(by.css('.search-result'));
    return element.all(by.css('.search-result')).getText();
  }

  navigateToHeroBySearch(name: string) {
    const searchBox = element(by.id('search-box'));
    searchBox.sendKeys(name);
    element.all(by.css('.search-result')).first().click();
  }

  navigateToTopHero() {
    element.all(by.css('.module.hero')).first().click();
  }
}
