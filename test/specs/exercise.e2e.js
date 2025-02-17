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

    //Zabudnuté heslo
    const odkaz = $('form').$('a').getAttribute('href');
    console.log('Odkaz na zabudnuté heslo: ' + odkaz);

    emailField.setValue('danakulakova@gmail.com');
    passwordField.setValue('Dana123');
    buttonLogin.click();


  //dostať sa na stránku s prihláškami
    $('=Přihlášky').click(); //hľadanie podľa mien je to ('=meno') keĎ dám *= tak 
    browser.pause(5000);

    const riadky = $('tbody').$$('tr'); //v tomto prípade to funguje,, lebo máme len jednu tabulku, ale ak je na stránke viac riadkov, tak radšej treba zadať ešte väčší balík, do ktorého spadá element riadok a to je dataTable
    console.log("Toto je text v tabuľke:");

    riadky.forEach(riadky => {
      console.log(riadky.getText());
    })

  

    });

  });
  