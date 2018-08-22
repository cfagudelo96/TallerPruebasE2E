import { by, element } from 'protractor';
import { TourOfHeroesPage } from './page-proxy.po';

export class HeroesPage extends TourOfHeroesPage {
  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  getAllHeroesNames() {
    return element(by.tagName('my-heroes')).all(by.tagName('li')).all(by.tagName('span')).get(1).getText();
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  deleteFirstHero() {
    element(by.tagName('my-heroes')).all(by.css('.delete')).first().click();
  }

  getListElementByHeroName(name: string) {
    return element(by.tagName('my-heroes')).element(by.xpath(`//li/span[./text()="${name}"]`)).element(by.xpath('..'));
  }

  navigateToHeroByName(name: string) {
    this.getListElementByHeroName(name).click();
    element(by.buttonText('View Details')).click();
  }
}
