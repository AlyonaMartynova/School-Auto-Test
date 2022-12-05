import { user, pass, login, setToken } from "../utils/auth"
import { makeText, makeRuName } from "../utils/func";

it("Start", () => {
    login(user.alex, pass.alex)
});

describe("addEditRemoveLeaveTime", () => {

    beforeEach(setToken)

    //in progress.. Waiting the new design!


    /*
    it("DOW-106", () => {
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/time')
        cy.get('div[role="tab"]')
            .contains('Отсутствия')
            .click()
        cy.get('mat-tab-body do-add-leave-hours')
            .should('be.visible')

        cy.get('input[formcontrolname="startTime"]')
            .type('11/11/2022')
            //закрыть оверлей
        cy.get('input[formcontrolname="endTime"]')
            .type('22/11/2022')
    });  

    it("DOW-65", () => {
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/time')
        cy.get('div[role="tab"]')
            .contains('Отсутствия')
            .click()
        cy.get('mat-tab-body do-add-leave-hours')
            .should('be.visible')

        cy.get('input[formcontrolname="startTime"]')
            .click()





        cy.get('input[formcontrolname="endTime"]')

    });
    */
});