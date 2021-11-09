import { username, password } from './fixtures.js'

describe('Czecitas login/logout', () => {

  beforeEach(() => {
    browser.reloadSession();
    browser.url('/prihlaseni');
  })

  it('Test 1 - enabled', () => {
    const emailField = $('#email');
    const passwordField = $('#password');
    const loginButton = $('.btn-primary');

    expect(emailField).toBeEnabled();
    expect(passwordField).toBeEnabled();
    expect(loginButton).toBeEnabled();

  });

  it('Test 2 - overenie prihlasenia', () => {
    const emailField = $('#email');
    const passwordField = $('#password');
    const loginButton = $('.btn-primary');

    emailField.setValue('danakulakova@gmail.com');
    passwordField.setValue('Dana123');
    loginButton.click();

    const name = $('.navbar-right .dropdown-toggle');
    expect(name).toHaveText('Dana Kulakova');
  })

  it('Test 3 - overenie odhlasenia', () => {
    const emailField = $('#email');
    const passwordField = $('#password');
    const loginButton = $('.btn-primary');

    emailField.setValue('danakulakova@gmail.com');
    passwordField.setValue('Dana123');
    loginButton.click();
    const name = $('.navbar-right .dropdown-toggle');
    expect(name).toHaveText('Dana Kulakova');

    const logout = $('#logout-link');
    const login = $('#login');

    name.click();
    logout.click();
    expect(login).toHaveText('Přihlášit');

  })

  describe('Prihlasky na kurz', () => {

    beforeEach(() => {
      browser.reloadSession();
      browser.url('/prihlaseni');
    })

    it('Test 4 - zoznam prihlášok', () => {
      const emailField = $('#email');
      const passwordField = $('#password');
      const loginButton = $('.btn-primary');

      emailField.setValue('danakulakova@gmail.com');
      passwordField.setValue('Dana123');
      loginButton.click();

      $('=Přihlášky').click();

      const nadpis = $('.header_img');
      expect(nadpis).toHaveText('Přihlášky');

      const riadky = $('tbody').$$('tr');
      expect(riadky.length).toBeGreaterThan(0); //funkcia, ktorá musí byť pred overením obsahu tabulky  ktorou overujeme, že má tabulka aspoň 1 riadok

      riadky.forEach(riadok => {
        const cols = riadok.$$('td')
        expect(cols[0].getText()).toMatch(/[a-zA-Z]{3,}/);
        expect(cols[1].getText()).toMatch(/(PUB_TEAM_Testovaní_test|JavaScript|Python)/);
        expect(cols[2].getText()).toMatch(/(\d{2}.\d{2}.\d{4}|\d{2}.\d{2}. -\d{2}.\d{2}.\d{4})/);
        expect(cols[3].getText()).toMatch(/\d{1,3}(| \d{0,3}) Kč/);

      });

      it('Sada testov 5 - vyhladanie v zozname prihlášok', () => {
        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');

        emailField.setValue('danakulakova@gmail.com');
        passwordField.setValue('Dana123');
        loginButton.click();
        $('=Přihlášky').click();

        const searchText = 'Filip';
        $('input[type="search"]').setValue(searchText);
        const filteredRows = $('tbody').$$('tr');
        console.log('Tu je ' + filteredRows.length + 'hľadaná prihláška.');
        filteredRows.forEach(row => {
          const cols = row.$$('td');
          expect(cols[0]).toHaveTextContaining(searchText);

          /*const searchField = $('=input[type="search"]');
          const searchName = 'Filip';
          searchField.setValue(searchName);
  
          const filteredRows = $('.tbody').$$('.tr');
          filteredRows.forEach(riadok => {
            const cols = riadok.$$('.td');
            expect(cols[0]).toHaveText(searchName);*/

        })
      })
    })

  })
});