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
    cy.get('.dashboard .section:nth-child(2) .section__button:nth-child(3)').click()
    cy.get('input[ng-reflect-type="text"]').type(userID_Alpha_Numeric())
    function userID_Alpha_Numeric() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
      }
    cy.get('.mat-select-value[ng-reflect-ng-switch="true"]').click();
    cy.get('.mat-option:nth-child(20)').click();
    cy.get('.mat-input-element[data-placeholder="Напишите немного о новом департаменте"]').type("Автотест");
    cy.get('button[type="submit"]').click();
  
    });
  });
//})