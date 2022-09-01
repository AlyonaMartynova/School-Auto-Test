import { user, pass, login, setToken } from "../utils/auth"

it("Start", () => {
  login(user.olaf, pass.olaf)
});

describe("create user", () => {

  beforeEach(setToken)

  it("TC-7-14", () => {
    cy.get('a[ng-reflect-router-link="users"]')
      .click()
    cy.get('button[data-test="add-user-button"]')
      .click()
    cy.get('input[formcontrolname="firstName"]')
      .type("Вика")
    cy.get('input[formcontrolname="lastName"]')
      .type("Михайлова")
    cy.get('input[formcontrolname="middleName"]')
      .type("Александровна")
    cy.get('mat-select[formcontrolname="rate"]')
      .click()
    cy.get('div[role="listbox"]')
      .find('mat-option[ng-reflect-value="1"]')
      .click()
    cy.get('input[formcontrolname="startWorkingAt"]')
      .type("18.03.22")
    cy.get('mat-select[formcontrolname="contractId"]')
      .click()
    cy.get('div[role="listbox"] mat-option')
      .eq(1)
      .click()
    cy.get('input[formcontrolname="email"]')
      .type("bulbazavr@pokemon.com")
    cy.get('button[type="submit"]')
      .should('be.enabled')
    //.click();
  });

})
