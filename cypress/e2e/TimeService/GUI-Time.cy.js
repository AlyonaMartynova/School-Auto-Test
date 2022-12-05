import { user, pass, login, setToken } from "../utils/auth"

it("Start", () => {
    login(user.olaf, pass.olaf)
});

describe("GUI-Time", () => {

    beforeEach(setToken)

    it("DOW-63", () => {
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/time')
        cy.get('div[role="tab"]')
            .contains('Отсутствия')
            .click()
        cy.get('mat-tab-body do-add-leave-hours')
            .should('be.visible')
    });

    it("DOW-64", () => {
        cy.url()
            .should('eq', 'https://dev.digital-office.dso.lanit-tercom.com/time')
        cy.get('div[role="tab"]')
            .contains('Проект')
            .click()
        cy.get('mat-tab-body do-add-work-time-hours')
            .should('be.visible')
    });

});

//in progres...


/* 
rate = вытащить из респонса или карточки
hours = 8 обычные рабочие часы
whours = rate * hours

month = (вытащить из респонса)
wdays = как-нибудь посчитать (мб и не надо)

normHours = wdays*whours (вытащить из респонса)

------

userHours
*/