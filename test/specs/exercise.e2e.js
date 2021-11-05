import { username, password } from './fixtures.js'

describe('Czechitas Login Page', () => {

  it('should open login page', () => {

    browser.reloadSession(); //obnoví session

    browser.url('/prihlaseni'); //otvorí adresu v prehliadači na prihlásenie

    //browser.pause(5000); //počká 5 sekúnd

    const emailField = $('#email'); // ten # nahrádza id, môžeme to napísať aj ako ('[id="email"]')
    console.log('Pole email je enabled: ' + emailField.isEnabled());
    console.log("Pole pre email je viditeľné: " + emailField.isDisplayed());

    const passwordField = $('#password');
    console.log('Pole pre heslo je enabled: ' + passwordField.isEnabled());
    console.log('Pole pro heslo je viditelné: ' + passwordField.isDisplayed());

    const buttonLogin = $('button[type="submit"]');
    console.log("Text tlačítka: " + buttonLogin.getText());

    const forgetButton = $('.btn-link');
    console.log('Odkaz: ' + forgetButton.getAttribute("href"));

    emailField.setValue('danakulakova@gmail.com');
    passwordField.setValue('Dana123');
    buttonLogin.click();

    $('=Přihlášky').click();
    browser.pause(5000);
    //potadiaľto všetko OK

    const riadky = $('tbody').$$('tr');
    console.log("Toto je text v tabuľke:" + riadky.lenght);

    riadky.forEach(riadky => {
      console.log(riadky.getText());
    })

    });

  });