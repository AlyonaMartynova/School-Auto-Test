describe("TC_460", function(){
	it("TC_460", function(){
		let login = 'Alyona';
		let password = '5WZWqx#NPK';

		cy.visit("https://dev.ltdo.xyz/auth/login")
		cy.get('input[type="email"]').type (login)
		cy.get('input[type="password"]').type (password)
		cy.get('button[type="submit"]').click ()
		cy.visit("https://dev.ltdo.xyz/admin/dashboard")
		cy.get('.dashboard .section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('div[class="mat-form-field-ripple ng-tns-c153-64"]')
			.type ('Пермь')
		//cy.get('div[class="mat-form-field-flex ng-tns-c153-65"]')
		//	.type ('Счастливая улица, 777')
			// cy.get('button[type="submit"]').click ()
	})
})

