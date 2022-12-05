import { user, pass, login } from "../utils/auth"
import { makeText, makeEngName } from "../utils/func";

describe("addEditWorkTime", () => {

    beforeEach(() => {                                                  //cleaning before each test to eliminate errors
        cy.window().then(win => win.sessionStorage.clear());
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it("DOW-245", () => {
        cy.intercept('GET', 'GraphicalUserInterface/get*')              //interceptions are used to validate responces
            .as('GUI-get')
        cy.visit('https://dev.digital-office.dso.lanit-tercom.com')
        cy.get('h1')
            .should('be.visible')                                       //simple check of design visibility
        cy.get('do-form-field[class="auth-input"] div')
            .contains('Введите логин или корпоративный e-mail')
            .should('be.visible')
        cy.get('do-form-field[class="auth-input"] div')
            .contains('Введите пароль')
            .should('be.visible')
        cy.wait('@GUI-get')
            .its('response.statusCode').should('eq', 200)               //server response check
    });

    it("DOW-246", () => {
        cy.url()                                                        //in each test we check the desired page
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
        cy.get('input[type="email"]')
            .should('be.visible')
            .type(user.olaf)
        cy.get('div[class="password"]')
            .find('mat-icon')
            .invoke('prop', 'textContent')
            .should('eq', 'visibility_off')                             //check default password display
        cy.get('input[type="password"]')
            .should('be.visible')
            .type(pass.olaf)
        cy.get('button[type="submit"]')
            .should('be.visible', 'be.active')
            .click()
    });

    it("DOW-247", () => {
        cy.visit('https://dev.digital-office.dso.lanit-tercom.com')
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
        cy.get('input[type="email"]')
            .should('be.visible')
            .type('granade6642@gmail.com')                              //validation for a specific email
        cy.get('div[class="password"]')
            .find('mat-icon')
            .invoke('prop', 'textContent')
            .should('eq', 'visibility_off')
        cy.get('input[type="password"]')
            .should('be.visible')
            .type(pass.olaf)
        cy.get('button[type="submit"]')
            .should('be.visible', 'be.active')
            .click()
    });

    it("DOW-248", () => {
        cy.visit('https://dev.digital-office.dso.lanit-tercom.com')
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
        cy.get('div[class="password"]')
            .find('mat-icon')
            .invoke('prop', 'textContent')
            .should('eq', 'visibility_off')
        cy.get('input[type="password"]')
            .should('be.visible')
            .type(pass.olaf)
        cy.get('div[class="password"]')
            .find('mat-icon')
            .click()
            .invoke('prop', 'textContent')
            .should('eq', 'visibility')                                 //check switched password display
        cy.get('div[class="password"] input')
            .invoke('val')
            .should('eq', pass.olaf)                                    //and its value
    });

    it("DOW-249", () => {                                               //checking the visibility and content
        cy.visit('https://dev.digital-office.dso.lanit-tercom.com')
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
        cy.get('a[class="do-button"]')
            .invoke('prop', 'innerText')
            .should('eq', 'О нет! Я забыл пароль!')
        cy.get('a[class="do-button"]')
            .click()
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/forgot')
        cy.get('div[class="text-disabled"]')
            .invoke('prop', 'innerText')
            .should('eq', 'Введите свой логин или e-mail, и в течение 10 минут мы вышлем вам на почту ссылку для смены пароля.')
        cy.get('input[type="email"]')
            .should('be.visible')
    });

    it("DOW-250", () => {
        cy.visit('https://dev.digital-office.dso.lanit-tercom.com')
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
        cy.get('a[class="do-button"]')
            .click()
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/forgot')
        cy.intercept('GET', '/password/forgot*')
            .as('fgt-req')
        cy.get('button[type="submit"]')
            .should('be.disabled')
        cy.get('input[type="email"]')
            .type(user.olaf)
        cy.get('button[type="submit"]')
            .should('be.enabled')
            .click()
        cy.wait('@fgt-req')
            .its('response.statusCode').should('eq', 200)
        cy.get('div[class="text-disabled"]')
            .invoke('prop', 'outerText')
            .should('eq', 'Ссылка для сброса пароля была отправлена на почту granade6642@gmail.com') //specific email
    });

    it("DOW-251", () => {
        cy.visit('https://dev.digital-office.dso.lanit-tercom.com')
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
        cy.get('a[class="do-button"]')
            .click()
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/forgot')
        cy.intercept('GET', '/password/forgot*')
            .as('fgt-req')
        cy.get('button[type="submit"]')
            .should('be.disabled')
        cy.get('input[type="email"]')
            .type('granade6642@gmail.com')                                       //also, validation for specific email
        cy.get('button[type="submit"]')
            .should('be.enabled')
            .click()
        cy.wait('@fgt-req')
            .its('response.statusCode').should('eq', 200)
        cy.get('div[class="text-disabled"]')
            .invoke('prop', 'outerText')
            .should('eq', 'Ссылка для сброса пароля была отправлена на почту granade6642@gmail.com') //specific email
    });

    it("DOW-254", () => {
        cy.visit('https://dev.digital-office.dso.lanit-tercom.com')
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
        cy.intercept('POST', '/auth/login*')
            .as('err-log')
        cy.get('input[type="email"]')
            .should('be.visible')
            .type(makeText(10))                                 //random value
        cy.get('input[type="password"]')
            .should('be.visible')
            .type(pass.olaf)
        cy.get('button[type="submit"]')
            .should('be.visible', 'be.active')
            .click()
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
        cy.get('input[type="email"]')
            .should('have.attr', 'aria-invalid')
            .and('eq', 'true')
        cy.get('form span')
            .contains('Неверный логин или пароль :(')           //checking the error message
            .should('be.visible')
        cy.wait('@err-log')
            .its('response.statusCode').should('eq', 404)       //checking the server error response
    });

    it("DOW-255", () => {
        cy.visit('https://dev.digital-office.dso.lanit-tercom.com')
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
        cy.intercept('POST', '/auth/login*')
            .as('err-log')
        cy.get('input[type="email"]')
            .should('be.visible')
            .type(user.olaf)
        cy.get('input[type="password"]')
            .should('be.visible')
            .type(makeText(10))
        cy.get('button[type="submit"]')
            .should('be.visible', 'be.active')
            .click()
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
        cy.get('input[type="email"]')
            .should('have.attr', 'aria-invalid')
            .and('eq', 'true')
        cy.get('form span')
            .contains('Неверный логин или пароль :(')
            .should('be.visible')
        cy.wait('@err-log')
            .its('response.statusCode').should('eq', 403)
    });

    it("DOW-256", () => {
        cy.visit('https://dev.digital-office.dso.lanit-tercom.com')
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
        cy.get('input[type="email"]')
            .clear()
        cy.get('input[type="password"]')
            .clear()
        cy.get('button[type="submit"]')                                 //empty form validation
            .should('be.visible', 'be.disabled')                        //disabled button can't be clicked
    });

    it("DOW-257", () => {
        cy.visit('https://dev.digital-office.dso.lanit-tercom.com')
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
        cy.intercept('POST', '/auth/login*')
            .as('err-log')
        cy.get('input[type="email"]')
            .should('be.visible')
            .type(user.olaf)
        cy.get('input[type="password"]')
            .should('be.visible')
            .type(pass.alex)
        cy.get('button[type="submit"]')
            .should('be.visible', 'be.active')
            .click()
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
        cy.get('input[type="email"]')
            .should('have.attr', 'aria-invalid')
            .and('eq', 'true')
        cy.get('form span')
            .contains('Неверный логин или пароль :(')
            .should('be.visible')
        cy.wait('@err-log')
            .its('response.statusCode').should('eq', 403)
    });

    it("DOW-258", () => {
        cy.visit('https://dev.digital-office.dso.lanit-tercom.com')
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
        cy.get('a[class="do-button"]')
            .click()
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/forgot')
        cy.get('input[type="email"]')
            .clear()
        cy.get('button[type="submit"]')
            .should('be.disabled')
    });

    it("DOW-259", () => {
        cy.visit('https://dev.digital-office.dso.lanit-tercom.com')
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
        cy.intercept('GET', '/password/forgot*')
            .as('err-psw')
        cy.get('a[class="do-button"]')
            .click()
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/forgot')
        cy.get('input[type="email"]')
            .type(makeText(15))
        cy.get('button[type="submit"]')
            .should('be.enabled')
            .click()
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/forgot')
        cy.wait('@err-psw')
            .its('response.statusCode').should('eq', 404)
        cy.get('snack-bar-container')
            .invoke('prop', 'innerText')
            .should('eq', 'Запрашиваемая информация не найдена')
    });

    it("DOW-269", () => {
        login(user.olaf, pass.olaf)
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/time')
        cy.get('div[aria-haspopup="menu"] > span')
            .click()
        cy.get('div[role="menu"]')
            .contains('Выход')
            .click()
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login') //checking page after logout
            .then(() => {
                expect(localStorage.getItem('---current---')).to.be.null     //checking token deletion after logout
            })
    });

    it("DOW-264", () => {
        login(user.olaf, pass.olaf)
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/time')
        cy.get('div[aria-haspopup="menu"] > span')
            .click()
        cy.get('div[role="menu"]')
            .contains('Сменить пароль')
            .click()
        cy.get('div[class="dialog-content"]')
            .should('be.visible')
        cy.get('div[class="dialog-content"] button[type="submit"]')
            .should('be.disabled')
    });
    /*
        it("DOW-263", () => {                   // this case changes the user password so USE CAREFULLY!
            login(user.nik, pass.nik)
            let newpass = makeText(15)
            cy.log(newpass)
            cy.url()
                .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/time')
            cy.intercept('POST', '/password/change*')
                .as('chg-pass')
            cy.intercept('POST', '/auth/login*')
                .as('new-log')
            cy.get('div[aria-haspopup="menu"] > span')
                .click()
            cy.get('div[role="menu"]')
                .contains('Сменить пароль')
                .click()
            cy.get('div[class="dialog-content"]')
                .should('be.visible')
            cy.get('div[class="dialog-content"] button[type="submit"]')
                .should('be.disabled')
            cy.get('do-password[formcontrolname="oldPassword"] input')
                .type(pass.nik)
            cy.get('do-password[formcontrolname="newPassword"] input')
                .type(newpass)
            cy.get('do-password[formcontrolname="confirmPassword"] input')
                .type(newpass)
            cy.get('div[class="dialog-content"] button[type="submit"]')
                .should('be.enabled')
                .click()
            cy.wait('@chg-pass')
                .its('response.statusCode').should('eq', 200)
            cy.get('div[aria-haspopup="menu"] > span')
                .click()
            cy.get('div[role="menu"]')
                .contains('Выход')
                .click()
            cy.url()
                .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/auth/login')
                .then(() => {
                    expect(localStorage.getItem('---current---')).to.be.null
                })
            login(user.nik, newpass)   
            cy.wait('@new-log')             //verification of authorization with a new password
                .its('response.statusCode').should('eq', 200)
        });*/

    it("DOW-265", () => {
        login(user.olaf, pass.olaf)
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/time')
        cy.intercept('POST', '/password/change*')
            .as('chg-pass')
        cy.get('div[aria-haspopup="menu"] > span')
            .click()
        cy.get('div[role="menu"]')
            .contains('Сменить пароль')
            .click()
        cy.get('div[class="dialog-content"]')
            .should('be.visible')
        cy.get('div[class="dialog-content"] button[type="submit"]')
            .should('be.disabled')
        cy.get('do-password[formcontrolname="oldPassword"] input')
            .type(makeText(30))                         //random value instead of the correct password
        cy.get('do-password[formcontrolname="newPassword"] input')
            .type('acjfz2S%*&@09wF%hd')                 //guaranteed valid password 
        cy.get('do-password[formcontrolname="confirmPassword"] input')
            .type('acjfz2S%*&@09wF%hd')                 //and its repetition
        cy.get('div[class="dialog-content"] button[type="submit"]')
            .should('be.enabled')
            .click()
        cy.wait('@chg-pass')
            .its('response.statusCode').should('eq', 400)
        cy.get('snack-bar-container')
            .invoke('prop', 'outerText')
            .and('eq', 'Неверный старый пароль')
    });

    it("DOW-266", () => {
        login(user.olaf, pass.olaf)
        let newpass2 = makeEngName(20)  //random not valid value
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/time')
        cy.intercept('POST', '/password/change*')
            .as('chg-pass')
        cy.get('div[aria-haspopup="menu"] > span')
            .click()
        cy.get('div[role="menu"]')
            .contains('Сменить пароль')
            .click()
        cy.get('div[class="dialog-content"]')
            .should('be.visible')
        cy.get('div[class="dialog-content"] button[type="submit"]')
            .should('be.disabled')
        cy.get('do-password[formcontrolname="oldPassword"] input')
            .type(pass.olaf)
        cy.get('do-password[formcontrolname="newPassword"] input')
            .type(newpass2)
        cy.get('do-password[formcontrolname="newPassword"]')
            .should('have.class', 'ng-invalid')
        cy.get('do-password[formcontrolname="confirmPassword"] input')
            .type(newpass2)
        cy.get('do-password[formcontrolname="confirmPassword"]')
            .should('have.class', 'ng-invalid')
        cy.get('div[class="dialog-content"] button[type="submit"]')
            .should('be.disabled')
    });

    it("DOW-267", () => {
        login(user.olaf, pass.olaf)
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/time')
        cy.intercept('POST', '/password/change*')
            .as('chg-pass')
        cy.get('div[aria-haspopup="menu"] > span')
            .click()
        cy.get('div[role="menu"]')
            .contains('Сменить пароль')
            .click()
        cy.get('div[class="dialog-content"]')
            .should('be.visible')
        cy.get('div[class="dialog-content"] button[type="submit"]')
            .should('be.disabled')
        cy.get('do-password[formcontrolname="oldPassword"] input')
            .type(pass.olaf)
        cy.get('do-password[formcontrolname="newPassword"] input')
            .type('acjfz2S%*&@09wF%hd')                 //guaranteed valid password 
        cy.get('do-password[formcontrolname="newPassword"]')
            .should('have.class', 'ng-valid')
        cy.get('do-password[formcontrolname="confirmPassword"] input')
            .type('acjfz2S%*&@09wF*HD')                 //misspelled password repetition
        cy.get('do-password[formcontrolname="confirmPassword"]')
            .should('have.class', 'ng-valid')
        cy.get('div[class="dialog-content"] button[type="submit"]')
            .should('be.disabled')
        cy.get('do-change-password form > span')
            .invoke('prop', 'textContent')
            .and('eq', 'Пароли не совпадают :(')
    });

});
