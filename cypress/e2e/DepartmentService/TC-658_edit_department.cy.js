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
    cy.get('[src*="assets/svg/edit.svg"]').click();
    cy.get('input[ng-reflect-name="/name"]').clear();
    cy.get('input[ng-reflect-name="/name"]').type(userID_Alpha_Numeric())
    
    function userID_Alpha_Numeric() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 10; i++)
       text += possible.charAt(Math.floor(Math.random() * possible.length));
     return text;
    }
    cy.get('.new-department__input-container mat-form-field:nth-child(2)').click();
    cy.get('.mat-select-panel-wrap .mat-option:nth-child(2)').click();
    cy.get('.new-department__input-container mat-form-field:nth-child(3)').clear().type("департамент научной литературы 1 2 3 4");
    cy.contains('Редактировать департамент ').click();
  });
});
//})
 