// First, let's load the required modules
import { user, pass, login, setToken } from "../utils/auth"
import { makeRuName } from "../utils/func";

// Separately! logging in for the user WE NEED, to then use the "setToken" function without errors
it("Start", () => {
  login(user.boy, pass.boy)
});

describe("edit user", () => {

  //localstorage is cleared before each test, so we use..
  beforeEach(setToken)

  it("TC-?", () => {
    cy.get('div[class*="trigger avatar"]')
      .click()
    cy.get('div[class*="mat-menu"]')
      .find('button[ng-reflect-router-link*="users"]')
      .click()
  });

  it("TC-??", () => {
    cy.get('div[class*="edit"]')
      .click()
    cy.get('do-edit-personal-info')
      .find('button[class*="do-button"]')
      .click()
    cy.get('input[ng-reflect-name="/LastName"]')
      .clear()
      .should('have.class', 'ng-invalid')
      .type(makeRuName(8))
      .should('have.class', 'ng-valid')
    cy.get('input[ng-reflect-name="/FirstName"]')
      .clear()
      .should('have.class', 'ng-invalid')
      .type(makeRuName(10))
      .should('have.class', 'ng-valid')
    cy.get('input[ng-reflect-name="/MiddleName"]')
      .clear()
      .type(makeRuName(12))
      .should('have.class', 'ng-valid')
    cy.get('div[class*="info__buttons"] button')
      .eq(0)                                        // choosing FIRST element from ARRAY
      .click()

    cy.get('mat-dialog-container')
      .type('{esc}')

  });

  it("TC-???", () => {
    cy.get('label[class*="button"]')
      .invoke('show')                   // show hidden CSS element
      .click()
    cy.get('mat-dialog-container')
      .should('be.visible')
    cy.get('div[class="dropzone"] input')
      .should('have.attr', 'accept')
      .and('equal', 'image/png, image/jpeg, image/gif, image/bmp, image/tiff')

  });

});
