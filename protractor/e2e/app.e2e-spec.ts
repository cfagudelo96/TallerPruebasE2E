import { DashboardPage } from './dashboard.po';
import { HeroesPage } from './heroes.po';
import { HeroDetailPage } from './hero-detail.po';
import { browser } from 'protractor';

describe('Tour of heroes Dashboard', () => {
  let dashboardPage: DashboardPage;
  let heroesPage: HeroesPage;
  let detailsPage: HeroDetailPage;

  beforeEach(() => {
    dashboardPage = new DashboardPage();
    heroesPage = new HeroesPage();
    detailsPage = new HeroDetailPage();
  });

  it('should display top 4 heroes', () => {
    dashboardPage.navigateToDashboard();
    expect(dashboardPage.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    dashboardPage.navigateToHeroes();
    expect(heroesPage.getAllHeroes().count()).toBe(11);
  });

  it('should search heroes', () => {
    dashboardPage.navigateToDashboard();
    expect(dashboardPage.searchHero('Na')).toEqual(['Narco', 'Dynama', 'Tornado']);
  });

  it('should navigate to a hero from the dashboard', () => {
    dashboardPage.navigateToDashboard();
    dashboardPage.navigateToTopHero();
    expect(detailsPage.getHeroDetailsTitle()).toContain('details!');
  });

  it('should navigate to a hero from the search', () => {
    dashboardPage.navigateToDashboard();
    const searchTerm = 'Na';
    dashboardPage.navigateToHeroBySearch(searchTerm);
    expect(detailsPage.getHeroDetailsTitle()).toContain(searchTerm);
  });
});

describe('Tour of heroes, heroes page', () => {
  let heroesPage: HeroesPage;
  let detailsPage: HeroDetailPage;

  beforeEach(() => {
    heroesPage = new HeroesPage();
    detailsPage = new HeroDetailPage();
    heroesPage.navigateToDashboard();
    heroesPage.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = heroesPage.getAllHeroes().count();
    heroesPage.enterNewHeroInInput('My new Hero');
    expect(heroesPage.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

  it('should delete a hero', () => {
    const currentHeroes = heroesPage.getAllHeroes().count();
    heroesPage.deleteFirstHero();
    expect(heroesPage.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });

  it('should navigate to a hero from the list of heroes', () => {
    const heroName = 'Tornado';
    heroesPage.navigateToHeroByName(heroName);
    expect(detailsPage.getHeroDetailsTitle()).toContain(heroName);
  });
});

describe('Tour of heroes, heroes detail', () => {
  let heroesPage: HeroesPage;
  let detailsPage: HeroDetailPage;

  beforeEach(() => {
    heroesPage = new HeroesPage();
    detailsPage = new HeroDetailPage();
    heroesPage.navigateToDashboard();
    heroesPage.navigateToHeroes();
    heroesPage.navigateToHeroByName('Zero');
  });

  it('should edit the hero', () => {
    const newName = 'One';
    detailsPage.editHero(newName);
    heroesPage.navigateToHeroes();
    expect(heroesPage.getAllHeroesNames()).toContain(newName);
  });
});
