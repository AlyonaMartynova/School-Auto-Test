describe("log in", ()  => {
    it("sing in", () => {
      cy.visit('https://dev.ltdo.xyz/auth/login');
      cy.log('Переход на страницу авторизации');
      cy.log('Клик по "О нет!Я забыл пароль!"');
      cy.get('a[class="forgot-password form__link"]').click();
      cy.log('Логин или e-mail');
      cy.get('input[type="email"]').type("Marina1");
      cy.log('Клик по "Сменить пароль"');
      cy.get('button[color="primary"]').click();
    });
});
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe("log in", ()  => {
    it("sing in", () => {
      cy.visit('https://mail.yandex.ru/');
      cy.log('Переход на страницу почты');
      cy.log('Клик по кнопке "Войти"');
      cy.get('a[class="control button2 button2_view_classic button2_size_mail-big button2_theme_mail-white button2_type_link HeadBanner-Button HeadBanner-Button-Enter with-shadow"]').click();
      cy.get('input[data-t="field:input-login"]').type("marinabarselona");
      cy.get('button[data-test-id="next-button"]').click();
      cy.log('Клик по полю "Пароль"');
      cy.get('input[name="password"]').type("2502494m");

    });
});

/*describe("log in", ()  => {
  it("sing in", () => {
    cy.visit('https://mail.ru/');
    cy.log('Переход на страницу почты');
    cy.log('Клик по кнопке "Войти"');
    cy.get('button[data-testid="enter-mail-primary"]').click();
    cy.wait(13000);
   // cy.log('Клик по полю "Имя аккаунта"');
    //cy.get('input.input-0-2-71').type("timofeeva.m@inbox.ru");autocomplete="username"
    cy.get('input[autocomplete="username"]').type("timofeeva.m@inbox.ru");
    cy.get('button[data-test-id="next-button"]').click();
    cy.log('Клик по полю "Пароль"');
    cy.get('input[name="password"]').type("ПАРОЛЬ");

  });
});*/
