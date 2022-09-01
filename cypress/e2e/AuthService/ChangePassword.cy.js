//TC-333: Ввести верные старый пароль, новый пароль и подтверждение нового пароля
describe("TC-333", ()  => {
    it("tc-333", () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.log('Переход на страницу авторизации');
        cy.log('Корпоративный e-mail или логин');
        cy.get('input[type="email"]').type("Marina1");
        cy.log('Пароль');
        cy.get('input[type="password"]').type("8CI3Uo3Ymp_");
        cy.log('Клик по кнопке "Войти"');
        cy.get('button[type="submit"]').click();
        cy.get('div[class="mat-menu-trigger avatar ng-star-inserted"]').click();
        // cy.get('[class="mat-menu-content ng-tns-c257-1"][class="mat-focus-indicator mat-menu-item ng-tns-c257-1"]:nth-child(2)').click();
        // cy.get('div[class="mat-menu-content ng-tns-c257-1"]button[class="mat-focus-indicator mat-menu-item ng-tns-c257-1"]:nth-child(2)').click();
        cy.contains('Сменить пароль').click();
        cy.log('Старый пароль');
        cy.get('input[formcontrolname="old_password"]').type("8CI3Uo3Ymp_");
        cy.get('input[formcontrolname="new_password"]').type("8CI3Uo3Ymp_");
        cy.get('input[formcontrolname="confirm_password"]').type("8CI3Uo3Ymp_");
        cy.log('Сменить пароль');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'https://dev.ltdo.xyz/time');

//TC-335: Ввести неверные старый пароль, новый пароль, подтверждение пароля
    cy.get('div[class="mat-menu-trigger avatar ng-star-inserted"]').click();
    cy.contains('Сменить пароль').click();
    cy.get('input[formcontrolname="old_password"]').type("привет");
    cy.get('input[formcontrolname="new_password"]').type("привет");
    cy.get('input[formcontrolname="confirm_password"]').type("привет");
    cy.get('button[type="submit"]').should('be.disabled').wait(2000);

//TC-336: Ввести новый пароль для КЭ 8-14 ( длиной 10, 8,14,9,13 символов)
    cy.get('input[formcontrolname="new_password"]').type(password());
    function password() {
        var text = "";
        var possible = "AaBbCc.!;@2367";
                
        for (var i = 8; i <=14; i++)
        //for (var i = 8; i <=14; arr[i] = i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
                
         return text;
        }

//TC-339: Ввести новый пароль, содержащий буквы русского алфавита/буквы других языков
   cy.get('input[formcontrolname="new_password"]').type(password());
    function password() {
        var text = "";
        var possible = "Аленапривет阿萊娜你好";
            
        for (var i = 8; i <=14; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
            
        return text;
        }

//TC-340: Оставить поле нового пароля пустым
    cy.get('input[formcontrolname="new_password"]').clear();

        });
});