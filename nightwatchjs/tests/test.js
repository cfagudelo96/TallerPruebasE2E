module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes login falied': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 4000)
      .pause(1000)
      .click('.botonIngresar')
      .pause(1000)
      .setValue('.cajaLogIn input[name="correo"]', 'wrongemail@example.com')
      .setValue('.cajaLogIn input[name="password"]', '1234')
      .click('.cajaLogIn .logInButton')
      .waitForElementVisible('.aviso.alert.alert-danger', 4000)
      .assert.containsText('.aviso.alert.alert-danger', 'El correo y la contraseña que ingresaste no figuran')
      .end();
  },
  'Los estudiantes search teacher': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.Select-control', 5000)
      .pause(1000)
      .click('.Select-control')
      .setValue('.Select-input input', 'Mario Linares Vasquez')
      .waitForElementVisible('.Select-menu-outer', 5000)
      .assert.visible('.Select-menu-outer')
      .end();
  },
  'Los estudiantes filter by subject': function(browser) {
    browser
      .url('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
      .waitForElementVisible('.statsProfesorDropdown', 5000)
      .click('.materias input[type="checkbox"]')
      .end();
  }
};
