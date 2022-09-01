import { login } from "../utils/Params";

// TC-484-485 Нажать на пиктограмму “Корзина” справа от названия офиса. Нажать кнопку “Отменить”
describe("Delete_office", function () {
	it("TC-484-485", function () {
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:last-of-type .section__button:nth-child(4)').click();
		cy.get('mat-icon[ng-reflect-svg-icon="delete"]').eq(1).click();
		cy.get('button[ng-reflect-dialog-result="false"]').click;

	});

	// TC-527 Нажать на пиктограмму “Корзина” справа от названия офиса. Нажать кнопку “Да, удалить”
	it("TC-527", function () {
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:last-of-type .section__button:nth-child(4)').click();
		cy.get('mat-icon[ng-reflect-svg-icon="delete"]').eq(1).click();
		// cy.get('button[ng-reflect-dialog-result="true"]').click;

	})
})