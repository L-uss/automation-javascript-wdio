
import { username, password } from './fixtures.js'
import LoginPage from './pages/loginPage.js';
import Prihlasky, { rows } from './pages/prihlasky.js';

describe('Czecitas login/logout', () => {

  beforeEach(() => {

    browser.reloadSession();
    LoginPage.open();

  });

  it('Test 1 - enabled', () => {

    //expect(LoginPage.isLoginFieldsEnable()).toEqual(true); //prečo tento zápis?
    expect(LoginPage.loginButton.getText()).toEqual('Přihlášit');
    expect(LoginPage.emailField).toBeEnabled();
    expect(LoginPage.passwordField).toBeEnabled();
  
  });

  it('Test 2 - Login verification', () => {

    LoginPage.logIn()
    expect(LoginPage.userName).toHaveText('Dana Kulakova');

  });

  it('Test 3 - Logout verification', () => {

    LoginPage.logIn()
    LoginPage.logout() //prečo nefunguje? this.logout.click is not a function
    expect(LoginPage.login).toHaveText('Přihlášit');

  });
});

  describe('Applications', () => {

    beforeEach(() => {
      browser.reloadSession();
      LoginPage.open();
    });

    it('Test 4 - zoznam prihlášok', () => {
      LoginPage.logIn();
      Prihlasky.clickApplications();

      expect(Prihlasky.headerApp).toHaveText('Přihlášky');
      expect(Prihlasky.rows.length).toBeGreaterThan(0); //funkcia, ktorá musí byť pred overením obsahu tabulky  ktorou overujeme, že má tabulka aspoň 1 riadok

      Prihlasky.tableRows.forEach(row => {
        expect(row.name).toMatch(/[a-zA-Z]{3,}/);
        expect(row.category).toMatch(/(PUB_TEAM_Testovaní_test|JavaScript|Python)/);
        expect(row.date).toMatch(/(\d{2}.\d{2}.\d{4}|\d{2}.\d{2}. -\d{2}.\d{2}.\d{4})/);
        expect(row.price).toMatch(/\d{1,3}(| \d{0,3}) Kč/);
      });
    });

    it('Sada testov 5 - vyhladanie v zozname prihlášok', () => {
      LoginPage.logIn();
      Prihlasky.clickApplications();

      const searchText = 'Filip';
      Prihlasky.search(searchText);
      
      Prihlasky.tableRows.forEach(row => {
        expect(row.name).toHaveTextContaining(searchText);

      });
    });
  });
  
