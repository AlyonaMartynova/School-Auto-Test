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
    //cy.get('tr[ng-reflect-router-link="93b58aa7-0542-4ee6-beee-71c2ca"]').click();
   //cy.get('mat-select[aria-label="Items per page:"]').click();
   //cy.contains('50').click();
    cy.get('tbody tr:nth-child(1) td:first-child').click();
    cy.contains('+ Добавить сотрудников').click();
    cy.get('tbody tr:nth-child(3) td:nth-child(3)').click();
    cy.contains('Сохранить').click();
  });
});
//})
 