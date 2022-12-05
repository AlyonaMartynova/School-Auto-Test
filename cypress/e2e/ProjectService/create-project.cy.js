import { user, pass, login, setToken } from "../utils/auth"
import { makeText } from "../utils/func";

it("Start", () => {
    login(user.olaf, pass.olaf)
});

describe('create project', () => {

    beforeEach(setToken);

    it('TC-92-94', () => {
        cy.get("a[href*='/admin/dashboard']")
            .click()
        cy.get("img[src*='project-icon']")
            .click()
        cy.get('form')
            .should('have.class', 'project-info')
        cy.get("a[href='/projects']")
            .click()
        cy.get("button[ng-reflect-router-link='new']")
            .should('be.visible')
            .click()
        cy.get('form')
            .should('have.class', 'project-info')
    });

    it('TC-158', () => {
        cy.get("input[formcontrolname='name']")
            .should('have.class', 'ng-untouched')
            .click()
        cy.get("input[formcontrolname='shortDescription']")
            .click()
        cy.get("input[formcontrolname='name']")
            .should('have.class', 'ng-invalid')
        cy.get("button[type='submit']")
            .should('have.disabled')
    });

    it('TC-159', () => {
        cy.get("input[formcontrolname='name']")
            .type(makeText(10))
            .should('have.class', 'ng-valid')
        cy.get("button[type='submit']")
            .should('have.disabled')
    });

    it('TC-165', () => {
        cy.get("mat-select[formcontrolname='departmentId']")
            .should('have.class', 'ng-untouched')
            .click()
        cy.get('.cdk-overlay-backdrop')
            .click()
        cy.get("mat-select[formcontrolname='departmentId']")
            .should('have.class', 'ng-invalid')
        cy.get("button[type='submit']")
            .should('have.disabled')
    });

    it('TC-166-167', () => {
        cy.get("mat-select[formcontrolname='departmentId']")
            .click()
        cy.contains('Frontend')
            .scrollIntoView()
            .click()
        cy.get("mat-select[formcontrolname='departmentId']")
            .should('have.class', 'ng-valid')
        cy.get("button[type='submit']")
            .should('have.enabled')
    });

    it('TC-188-192', () => {
        cy.get("mat-select[formcontrolname='status']")
            .should('have.class', 'ng-valid')
            .should('contain', 'Активный')
            .click()
        cy.get("div[role='listbox']")
            .should('contain', 'Приостановлен')
            .should('contain', 'Завершен')
            .should('contain', 'Активный')
        cy.get("mat-option[ng-reflect-value='Active']")
            .click()
    });

    it('TC-194', () => {
        cy.get("input[formcontrolname='shortDescription']")
            .should('have.attr', 'maxlength')
            .and('equal', '100')
        cy.get("input[formcontrolname='shortDescription']")
            .type(makeText(100))
    });

    it('TC-200-205-209', () => {
        cy.get("textarea[formcontrolname='description']")
            .should('have.attr', 'maxlength')
            .and('equal', '300')
        cy.get("textarea[formcontrolname='description']")
            .type(makeText(300))
    });

    // team -------------------------------------------------

    it('TC-222', () => {
        cy.get("Button[color='accent']")
            .click()
        cy.get("div[class='mat-dialog-actions'] > button:last-child")
            .should('have.disabled')
        cy.get('.mat-dialog-content')
            .scrollTo(0, 500,)
        cy.get('.mat-dialog-content')
            .scrollTo(0, 500,)
        cy.contains('Admin New Admin')
            .scrollIntoView()
            .click()
        cy.get("div[class='mat-dialog-actions'] > button:last-child")
            .should('have.enabled')
            .click()
    });

    it('TC-xxx', () => {
        cy.get("Button[color='accent']")
            .click()
        cy.get("input[type='search']")
            .click()
            .type('Неадмин')
            .type('{enter}')
        cy.get("div[class='mat-dialog-actions'] > button:last-child")
            .should('have.disabled')
        cy.get('.mat-dialog-content')
            .should('contain.text', 'Неадмин')
            .click()
        cy.get("div[class='mat-dialog-actions'] > button:last-child")
            .should('have.enabled')
            .click()

        cy.get("button[type='submit']")
            .should('have.enabled')
            .click()
    });
});