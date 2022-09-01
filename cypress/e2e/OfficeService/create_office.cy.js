import { login } from "../utils/Params";

describe("Create_office", function () {
	// TC_460 Заполнить обязательные поля
	it("TC_460", function () {
		login();
		let cityName = 'Пермь';
		let addres = 'Счастливая улица, 777';
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').type(cityName);
		cy.get('do-form-row[ng-reflect-label="Адрес"] .mat-form-field').type(addres);
		// cy.get('button[type="submit"]').click();
		// cy.log('Клик по кнопке "Добавить офис"');
	});

	// TC-461 Заполнить все поля. В обязательные поля ввести по 1 символу
	it("TC_461", function () {
		let cityName = 'П';
		let addres = 'С';
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').type(cityName);
		cy.get('do-form-row[ng-reflect-label="Адрес"] .mat-form-field').type(addres);
		// cy.get('button[type="submit"]').click();
		// cy.log('Клик по кнопке "Добавить офис"');		
	});

	// TC-462 Ввести в поле "Город" поочередно 178/199/200 символов
	it("TC-462", function () {
		function symbolInsert(length) {
			var text = "";
			var possible = "Крун Тхеп Маханакхон Амон Раттанакосин Махинтараю";

			for (var i = 0; i < length; i++)
				text += possible.charAt(Math.floor(Math.random() * possible.length));

			return text;
		}
		let addres = 'Счастливая улица, 777';
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').type(symbolInsert(178));
		cy.get('do-form-row[ng-reflect-label="Адрес"] .mat-form-field').type(addres);
		cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').type(symbolInsert(199));
		cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').type(symbolInsert(200));
		//cy.get('button[type="submit"]').click()
	});

	// TC-463 Ввести в поле "Город" 201 символ - Должен вернуть ошибку
	it("TC-463", function () {
		function symbolInsert(length) {
			var text = "";
			var possible = "Крун Тхеп Маханакхон Амон Раттанакосин Махинтараю";

			for (var i = 0; i < length; i++)
				text += possible.charAt(Math.floor(Math.random() * possible.length));

			return text;
		}
		let addres = 'Счастливая улица, 777';
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').type(symbolInsert(201));
		cy.get('do-form-row[ng-reflect-label="Адрес"] .mat-form-field').type(addres);
		cy.get('button[type="submit"]').click()
			.log('Клик по кнопке "Добавить офис"');
		cy.on('uncaught:exception', (err, runnable) => {
			return false
		})

	});

	// TC-464 Ввести в обязательные поля только "Пробелы"
	it("TC-464", function () {
		login();
		let notext = "     "
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').type(notext);
		cy.get('do-form-row[ng-reflect-label="Адрес"] .mat-form-field').type(notext);
		cy.get('button[type="submit"]').click({ force: true })
			.log('Клик по кнопке "Добавить офис"');

	});

	// TC-466-469 Заполнить все поля только цифрами/латинскими/специальными символами/заглавными буквами
	it("TC-466-469", function () {
		function symbolInsert() {
			var text = "";
			var possible = "12345678lifeisperfect$&+,:;=?@#|<>.^()%!ЖИЗНЬПРЕКРАСНА";

			for (var i = 0; i < 10; i++)
				text += possible.charAt(Math.floor(Math.random() * possible.length));

			return text;
		}
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').type(symbolInsert());
		cy.get('do-form-row[ng-reflect-label="Адрес"] .mat-form-field').type(symbolInsert());
		cy.get('do-form-row[ng-reflect-label="Название офиса"] .mat-form-field').type(symbolInsert());
		//cy.get('button[type="submit"]').click()
		//.log('Клик по кнопке "Добавить офис"');
	});

	// TC-470 Обязательное поле "Город" оставить пустым
	it("TC_470", function () {
		let addres = 'Счастливая улица, 777';
		let name = 'Котовий офис';
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').click();
		cy.get('do-form-row[ng-reflect-label="Адрес"] .mat-form-field').type(addres);
		cy.get('do-form-row[ng-reflect-label="Название офиса"] .mat-form-field').type(name);
		cy.get('button[type="submit"]').click({ force: true })
			.log('Клик по кнопке "Добавить офис"');

	});

	// TC-471 Обязательное поле "Адрес" оставить пустым
	it("TC_471", function () {
		let cityName = 'Пермь';
		let name = 'Котовий офис';
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').type(cityName);
		cy.get('do-form-row[ng-reflect-label="Адрес"] .mat-form-field').click();
		cy.get('do-form-row[ng-reflect-label="Название офиса"] .mat-form-field').type(name);
		// cy.get('button[type="submit"]').click()
		// .log('Клик по кнопке "Добавить офис"');		
	});

	// TC-472 Поле "Название" оставить пустым
	it("TC_472", function () {
		let cityName = 'Пермь';
		let addres = 'Счастливая улица, 777';
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').type(cityName);
		cy.get('do-form-row[ng-reflect-label="Адрес"] .mat-form-field').type(addres);
		cy.get('do-form-row[ng-reflect-label="Название офиса"] .mat-form-field').click();
		// cy.get('button[type="submit"]').click()
		//.log('Клик по кнопке "Добавить офис"');		
	});

	// TC-473 Создать дубликат уже имеющегося офиса
	// TC-836 Ввести в поле "Название" название уже существующего офиса.
	it("create 2 the same offices", function () {
		login();
		let cityName = 'Пермь';
		let addres = 'Счастливая улица, 777';
		let name = 'Котовье гнездо';
		for (var i = 0; i < 2; i++) {
			cy.visit("https://dev.ltdo.xyz/admin/dashboard");
			cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
			cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').type(cityName);
			cy.get('do-form-row[ng-reflect-label="Адрес"] .mat-form-field').type(addres);
			cy.get('do-form-row[ng-reflect-label="Название офиса"] .mat-form-field').type(name);
			//cy.get('button[type="submit"]').click ()
			//		.log('Клик по кнопке "Добавить офис"');
		}
	});

	// TC-474 Заполнить обязательные поля. Нажать на кнопку "Отмена"
	it("TC_474", function () {
		let cityName = 'Пермь';
		let addres = 'Счастливая улица, 777';
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').type(cityName);
		cy.get('do-form-row[ng-reflect-label="Адрес"] .mat-form-field').type(addres);
		cy.get('button[type="button"]').click()
			.log('Клик по кнопке "Отмена"');
	});

	// TC-475 Не заполнять обязательные поля. Нажать на кнопку "Отмена"
	it("TC_475", function () {
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').click();
		cy.get('do-form-row[ng-reflect-label="Адрес"] .mat-form-field').click();
		cy.get('button[type="button"]').click()
			.log('Клик по кнопке "Отмена"');
	});

	// TC-477 Все поля оставить незаполненными. Нажать на кнопку "Добавить офис"
	it("TC_477", function () {
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').click();
		cy.get('do-form-row[ng-reflect-label="Адрес"] .mat-form-field').click();
		cy.get('button[type="submit"]').click({ force: true })
			.log('Клик по кнопке "Добавить офис"');
	});

	// TC-482 Нажать кнопку "+Добавить офис" в окне со списком существующих офисов
	it("TC-482", function () {
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:last-of-type .section__button:nth-child(4)').click();
		cy.get('button[color="accent"]').click();
	});

	//TC-833 Заполнить только поле "Название". Нажать на кнопку "Добавить офис"
	it("TC-833", function () {
		let name = 'Котовий офис';
		login();
		cy.visit("https://dev.ltdo.xyz/admin/dashboard");
		cy.get('.section:nth-child(2) .section__button:nth-child(6)').click();
		cy.get('do-form-row[ng-reflect-label="Город"] .mat-form-field').click();
		cy.get('do-form-row[ng-reflect-label="Адрес"] .mat-form-field').click();
		cy.get('do-form-row[ng-reflect-label="Название офиса"] .mat-form-field').type(name);
		cy.get('button[type="submit"]').click({ force: true })
			.log('Клик по кнопке "Добавить офис"');

	})
})