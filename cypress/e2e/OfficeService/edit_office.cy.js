	// TC-483 Нажать на пиктограмму “Карандаш”
	import { login } from "../QA/Params";
	describe("edit_office", function(){
		it("TC-483", function(){
			login();
			cy.visit("https://dev.ltdo.xyz/admin/dashboard");
			cy.get('.section:last-of-type .section__button:nth-child(4)').click();
			cy.get('mat-icon[ng-reflect-svg-icon="edit"]').eq(0).click();
	
		});
	
	//TC-532 Нажать кнопку “Отменить”
		it("TC-532", function(){
			login();
			cy.visit("https://dev.ltdo.xyz/admin/dashboard");
			cy.get('.section:last-of-type .section__button:nth-child(4)').click();
			cy.get('mat-icon[ng-reflect-svg-icon="edit"]').eq(0).click();
			cy.get('button[ng-reflect-type="button"]').click();
	
		});

	// TC-533 Не вносить изменений. Нажать кнопку “Редактировать офис”
			it("TC-533", function(){
			login();
			cy.visit("https://dev.ltdo.xyz/admin/dashboard");
			cy.get('.section:last-of-type .section__button:nth-child(4)').click();
			cy.get('mat-icon[ng-reflect-svg-icon="edit"]').eq(0).click();
			// cy.get('button[type="submit"]').click();
	
		});
	
	// TC-534 Удалить данные во всех полях
   		it("TC-534", function(){
			login();
			cy.visit("https://dev.ltdo.xyz/admin/dashboard");
			cy.get('.section:last-of-type .section__button:nth-child(4)').click();
			cy.get('mat-icon[ng-reflect-svg-icon="edit"]').eq(0).click();
			cy.get('input[ng-reflect-name="/City"]').clear();
			cy.get('input[ng-reflect-name="/Address"]').clear();
			cy.get('input[ng-reflect-name="/Name"]').clear();
			// cy.get('button[type="submit"]').click();

		});

	//TC-535 Изменить данные в любом из полей. Нажать кнопку “Отменить”
			it("TC-535", function(){
			login();
			cy.visit("https://dev.ltdo.xyz/admin/dashboard");
			cy.get('.section:last-of-type .section__button:nth-child(4)').click();
			cy.get('mat-icon[ng-reflect-svg-icon="edit"]').eq(3).click();
			cy.get('input[ng-reflect-name="/City"]').click();
			cy.get('input[ng-reflect-name="/Address"]').clear()
				.type('не скажу адрес');
			cy.get('input[ng-reflect-name="/Name"]').click();
			// cy.get('button[ng-reflect-type="button"]').click();

		});

		//TC-536 Удалить данные в обязательных полях
				it("TC-536", function(){
				login();
				cy.visit("https://dev.ltdo.xyz/admin/dashboard");
				cy.get('.section:last-of-type .section__button:nth-child(4)').click();
				cy.get('mat-icon[ng-reflect-svg-icon="edit"]').eq(3).click();
				cy.get('input[ng-reflect-name="/City"]').clear();
				cy.get('input[ng-reflect-name="/Address"]').clear();
				cy.get('input[ng-reflect-name="/Name"]').click();
				// cy.get('button[type="submit"]').click();
	
			});

		//TC-537 Удалить данные в поле “Название офиса”.
				it("TC-537", function(){
				login();
				cy.visit("https://dev.ltdo.xyz/admin/dashboard");
				cy.get('.section:last-of-type .section__button:nth-child(4)').click();
				cy.get('mat-icon[ng-reflect-svg-icon="edit"]').eq(4).click();
				cy.get('input[ng-reflect-name="/City"]').click();
				cy.get('input[ng-reflect-name="/Address"]').click();
				cy.get('input[ng-reflect-name="/Name"]').clear();
				// cy.get('button[type="submit"]').click();
	
			});
		
		//TC-538 Внести изменения в обязательных полях. Нажать кнопку “Редактировать офис”.
				it("TC-538", function(){
				login();
				cy.visit("https://dev.ltdo.xyz/admin/dashboard");
				cy.get('.section:last-of-type .section__button:nth-child(4)').click();
				cy.get('mat-icon[ng-reflect-svg-icon="edit"]').eq(6).click();
				cy.get('input[ng-reflect-name="/City"]').clear()
					.type(123);
				cy.get('input[ng-reflect-name="/Address"]').clear()
					.type(123);
				cy.get('input[ng-reflect-name="/Name"]').click();
				// cy.get('button[type="submit"]').click();
	
			});

		// TC-539 Ввести во все поля по 1 символу. Нажать кнопку “Редактировать офис”.
				it("TC-539", function(){
				let cityName = 'П'; 
				let addres = 'П';
				let name = 'С';
				login();
				cy.visit("https://dev.ltdo.xyz/admin/dashboard");
				cy.get('.section:last-of-type .section__button:nth-child(4)').click();
				cy.get('mat-icon[ng-reflect-svg-icon="edit"]').eq(0).click();
				cy.get('input[ng-reflect-name="/City"]').clear()
					.type(cityName);
				cy.get('input[ng-reflect-name="/Address"]').clear()
					.type(addres);
				cy.get('input[ng-reflect-name="/Name"]').clear()
					.type(name);
				// cy.get('button[type="submit"]').click()
	
			}); 

		// TC-543-546 Ввести во все поля цифрами/латинскими/специальными символами/заглавными буквами. Нажать кнопку “Редактировать офис”.
				it("TC-543-546", function(){
				function symbolInsert() {
					var text = "";
					var possible = "12345678lifeisperfect$&+,:;=?@#|<>.^()%!ЖИЗНЬПРЕКРАСНА";
						
					for (var i = 0; i < 10; i++)
					text += possible.charAt(Math.floor(Math.random() * possible.length));
						
					return text;
					}
				login();
				cy.visit("https://dev.ltdo.xyz/admin/dashboard");
				cy.get('.section:last-of-type .section__button:nth-child(4)').click();
				cy.get('mat-icon[ng-reflect-svg-icon="edit"]').eq(0).click();
				cy.get('input[ng-reflect-name="/City"]').type(symbolInsert());
				cy.get('input[ng-reflect-name="/Address"]').type(symbolInsert());
				cy.get('input[ng-reflect-name="/Name"]').type(symbolInsert());
				// cy.get('button[type="submit"]').click()
	
			}); 

		// TC-548 Ввести в поле "Город" 178/199/200 символов. Нажать кнопку “Редактировать офис”.
				it("TC-548", function(){
				function symbolInsert(length) {
					var text = "";
					var possible = "Крун Тхеп Маханакхон Амон Раттанакосин Махинтараю";
						
					for (var i = 0; i < length; i++)
					text += possible.charAt(Math.floor(Math.random() * possible.length));
						
					return text;
					}
				login();
				cy.visit("https://dev.ltdo.xyz/admin/dashboard");
				cy.get('.section:last-of-type .section__button:nth-child(4)').click();
				cy.get('mat-icon[ng-reflect-svg-icon="edit"]').eq(0).click();
				cy.get('input[ng-reflect-name="/City"]').type(symbolInsert(178));
				cy.get('input[ng-reflect-name="/City"]').clear()
					.type(symbolInsert(199));
				cy.get('input[ng-reflect-name="/City"]').clear()
					.type(symbolInsert(200));
				// cy.get('button[type="submit"]').click()
	
			}); 

		// TC-549 Ввести во все поля только символ/ы "Пробел". Нажать кнопку “Редактировать офис”.
				it("TC-549", function(){
				login();
				let notext = "     "
				cy.visit("https://dev.ltdo.xyz/admin/dashboard");
				cy.get('.section:last-of-type .section__button:nth-child(4)').click();
				cy.get('mat-icon[ng-reflect-svg-icon="edit"]').eq(0).click();
				cy.get('input[ng-reflect-name="/City"]').clear()
					.type(notext);
				cy.get('input[ng-reflect-name="/Address"]').clear()
					.type(notext);
				cy.get('input[ng-reflect-name="/Name"]').clear()
					.type(notext);
				// cy.get('button[type="submit"]').click()
	
			})
		}) 
			