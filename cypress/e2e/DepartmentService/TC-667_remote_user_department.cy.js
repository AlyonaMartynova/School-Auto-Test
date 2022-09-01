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
    cy.get('.dashboard .section:nth-child(3) .section__button:nth-child(3)').click();
    cy.get('tbody tr:nth-child(1) td:first-child').click();
    cy.get('tbody tr:nth-child(1) td:first-child label:first-child' ).click();
    cy.contains('Действия').click();
    cy.contains('Удалить сотрудников').click();
    cy.contains('Да, удалить').click();
  });
});
//})
 