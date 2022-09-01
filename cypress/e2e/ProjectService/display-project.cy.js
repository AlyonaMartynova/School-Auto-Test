import { setToken } from "./utils/auth"

describe('display', () => {

    beforeEach(setToken);

    it('TC-75', () => {
        cy.get("a[href='/projects']")
            .click()
        cy.get("tbody > tr:nth-child(3)")
            .click()
        cy.get('do-project-page')
            .should('be.visible')
            .should('contain', 'Детали проекта')
    });

    it('TC-92', () => {
        cy.get("a[href*='/admin/dashboard']")
            .click()
        cy.get("img[src*='project-icon']")
            .click()
        cy.get('form')
            .should('have.class', 'project-info')
    });

    it('TC-94', () => {
        cy.get("a[href='/projects']")
            .click()
        cy.get("button[ng-reflect-router-link='new']")
            .should('be.visible')
            .click()
        cy.get('form')
            .should('have.class', 'project-info')
    });

});