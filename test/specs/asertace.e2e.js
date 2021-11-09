
import {username, password} from './fixtures.js'

describe('Login And Applications Page', () => {

    it('should login and list applications - excercise 2', () => {

        browser.reloadSession();
        
        browser.url('/prihlaseni');

        const emailField = $('#email');
        console.log('Email field s displayed: ' + emailField.isDisplayed());
        
        const passwordField = $('#password');
        console.log('Password field s displayed: ' + passwordField.isDisplayed());

        const loginButton = $('.btn-primary');
        console.log('Login button text: ' + loginButton.getText());



        //expect(loginButton).toHaveText('Přihlásit');

        /*const odkaz = $('form').$('a').getAttribute('href');
        expect(odkaz).toEqual('/zapomenuteheslo');*/

        emailField.setValue('danakulakova@gmail.com');
        passwordField.setValue('Dana123');
        loginButton.click();

        $('=Přihlášky').click();

        const riadky = $('tbody').$$('tr'); 
        //expect(riadky).toBeElementsArrayOfSize(6);

        riadky.forEach(riadky => {
        const cols = riadky.$$('td') 
        expect(cols[0].getText()).toMatch(/[a-zA-Zý]{3,}/);
        expect(cols[1].getText()).toMatch(/(PUB_TEAM_Testovaní_test|JavaScript|Python)/);
        expect(cols[2].getText()).toMatch(/(\d{2}.\d{2}.\d{4}|\d{2}.\d{2}. -\d{2}.\d{2}.\d{4})/);
        expect(cols[3].getText()).toMatch(/\d{1,3}(| \d{0,3}) Kč/);
      });

      });

    });