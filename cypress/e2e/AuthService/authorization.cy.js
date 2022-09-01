//TC-99: Ввести верные логин/email и пароль
describe( 'TC-99', () => {
    it ('tc-99', () => {
        var login = 'Marina1';
        var password = '8CI3Uo3Ymp_';
        
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type(login);
        cy.get('input[type="password"]').type(password);
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'https://dev.ltdo.xyz/time');
    });
});

//TC-284: Ввести верный логин/email и неверный пароль
describe('TC-284', () => {
    it ('tc-284', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type('Marina1');
        cy.get('input[type="password"]').type(password())

            function password() {
            var text = "";
            var possible = "Приветвсемкакделаделишки嗨你好你好嗎.;;$%^&*(:№";
                
            for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
                
            return text;
            }
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'https://dev.ltdo.xyz/auth/login');
    });
});

//TC-285: Ввести неверный логин/email и верный пароль
describe('TC-285', () => {
    it ('tc-285', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type(email())

            function email() {
            var text = "";
            var possible = "Привет嗨你好你好嗎.;;$%^&*(:№";
          
            for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          
            return text;
            }
        cy.get('input[type="password"]').type("8CI3Uo3Ymp_");
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'https://dev.ltdo.xyz/auth/login');
    });
});

//TC-286: Ввести неверные логин/email и неверный пароль
describe('TC-286', () => {
    it ('tc-286', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type(email())

        function email() {
            var text = "";
            var possible = "Привет嗨你好你好嗎.;;$%^&*(:№";
                
            for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
                
            return text;
            }
        cy.get('input[type="password"]').type(password())
            function password() {
            var text = "";
            var possible = "Привет嗨你好你好嗎.;;$%^&*(:№";
                
            for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
                
            return text;
            }
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'https://dev.ltdo.xyz/auth/login');
    });
});

//TC-287: Оставить поле логин/email пустым
describe('TC-287', () => {
    it ('tc-287', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="password"]').type("8CI3Uo3Ymp_");
        cy.get('button[type="submit"]').should('be.disabled').wait(2000);
    });
});

//TC-288: Оставить поле "пароль" пустым
describe('TC-288', () => {
    it ('tc-288', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type('Marina1');
        cy.get('button[type="submit"]').should('be.disabled').wait(2000);
    });
});

//TC-293: Ввести пробелы перед/между/после символов пароля
describe('TC-293', () => {
    it ('tc-293', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type('Marina1');
        cy.get('input[type="password"]').type(password())

            function password() {
            var str = "8CI3Uo3Ymp_";

            return str.replace(/[^a-zA-Z0-9 -]/, "   ");
            };
        cy.get('button[type="submit"]').should('be.visible').click();
        cy.url().should('eq', 'https://dev.ltdo.xyz/auth/login');
    });
});

//TC-296: Изменить регистр в логине/email
describe('TC-296', () => {
    it ('tc-296', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type(email())

            function email() {
            var str = "Marina1";

            return str.toUpperCase();
            };
        cy.get('input[type="password"]').type("8CI3Uo3Ymp_");
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'https://dev.ltdo.xyz/auth/login');
    });
});

//TC-297: Изменить регистр в пароле
describe('TC-297', () => {
    it ('tc-297', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="email"]').type("Marina1");
        cy.get('input[type="password"]').type(password())
        
            function password() {
            var str = "8CI3Uo3Ymp_";

            return str.toUpperCase();
            };
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'https://dev.ltdo.xyz/auth/login');
    });
});

//TC-306: В поле «Пароль» нажать на кнопку «показать/скрыть пароль» = глаз
describe('TC-306', () => {
    it ('tc-306', () => {
        cy.visit('https://dev.ltdo.xyz/auth/login');
        cy.get('input[type="password"]').type("8CI3Uo3Ymp_");
        cy.get('mat-icon[role="img"]').click();
    });
});
