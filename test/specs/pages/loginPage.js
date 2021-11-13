class LoginPage {

  get emailField() {return $('#email')};
  get passwordField() {return $('#password')};
  get loginButton() {return $('.btn-primary')};
  get userName() {return $('.navbar-right .dropdown-toggle')};
  get logoutButton() {return $('#logout-link')};
  get login() {return $('#login')};

  open() {
      return browser.url('/prihlaseni');
    };

  isLoginFieldsEnable() {
    return this.emailField.isEnabled() && this.passwordField.isEnabled();
  };

  logIn() {
    this.emailField.setValue("danakulakova@gmail.com");
    this.passwordField.setValue("Dana123");
    this.loginButton.click();
  };

  logout() {
    this.userName.click();
    this.logoutButton.click();

  };

};

module.exports = new LoginPage();