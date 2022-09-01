describe("log in", ()  => {
  it("sing in", () => {
    cy.visit('https://dev.ltdo.xyz/auth/login');
    cy.log('Переход на страницу авторизации');
    cy.log('Корпоративный e-mail или логин');
    cy.get('input[type="email"]').type("admin");
    cy.log('Пароль');
    cy.get('input[type="password"]').type("ltstudents");
    cy.log('Клик по кнопке "Войти"');
    cy.get('button[type="submit"]').click(); 
    cy.get('a[href*="/admin"]').click();
    cy.get('.dashboard .section:nth-child(2) .section__button:nth-child(6)').click();
    cy.get('input[ng-reflect-name="/City"]').type("Автотест+1");
    cy.get('input[ng-reflect-name="/Address"]').type("Автотест+1");
    cy.get('input[ng-reflect-name="/Name"]').type("Автотест+1");
    cy.get('button[type="submit"]').click();
    });
  });
//})