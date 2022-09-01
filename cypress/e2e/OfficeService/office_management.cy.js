import { login } from "../QA/Params";

// TC-478-479 Выбрать значения из счётчика "Items per page" 10/25/50
	describe("TC-478-479", function(){
		it("TC-478-479", function(){
			login();
			cy.visit("https://dev.ltdo.xyz/admin/dashboard");
			cy.get('.section:last-of-type .section__button:nth-child(4)').click();
			cy.get('div[id="mat-select-value-3"]').click();
			cy.get('mat-option[id="mat-option-2"]').click();
			cy.get('div[id="mat-select-value-3"]').click();
			cy.get('mat-option[id="mat-option-3"]').click();
			cy.get('div[id="mat-select-value-3"]').click();
			cy.get('mat-option[id="mat-option-4"]').click();
			
		})
	})

// TC-480-481 нажать на стрелку "Previous page" и "Next page" 
describe("TC-480-481", function(){
	it("TC-480-481", function(){
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:last-of-type .section__button:nth-child(4)').click();
		cy.get('.mat-paginator-range-actions button[ng-reflect-disabled=false]').click();
		cy.get('.mat-paginator-range-actions button[ng-reflect-message="Previous page"]').click();

	})
})

// TC-550-552 Под заголовком “Офисы” нажать на фильтр "Статус"/Активные/Все
describe("TC-550-552", function(){
	it("TC-550-552", function(){
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:last-of-type .section__button:nth-child(4)').click();
		cy.get('mat-select[id="mat-select-0"]').click();
		cy.get('div[role="listbox"]:nth-child(1)').click();
		cy.get('mat-select[id="mat-select-0"]').click();
		cy.get('mat-option[role="option"]:nth-child(1)').click(); 
		
	})
})