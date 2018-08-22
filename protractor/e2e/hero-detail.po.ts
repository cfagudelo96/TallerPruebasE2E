import { by, element } from 'protractor';
import { TourOfHeroesPage } from './page-proxy.po';

export class HeroDetailPage extends TourOfHeroesPage {
  editHero(newName: string) {
    element(by.tagName('input')).clear().then(() => element(by.tagName('input')).sendKeys(newName));
    element(by.buttonText('Save')).click();
  }

  getHeroDetailsTitle() {
    return element(by.tagName('h2')).getText();
  }
}


