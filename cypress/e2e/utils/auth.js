let token

let user = {
    olaf: "olaf6642",
    nik: "nikki6",
    alex: "aleSSShka",
    // you can add more users
};
let pass = {
    olaf: "msYr*sI@ams2",
    nik: "r_VaBiq5FGTGIM1",
    alex: "6N$e$5ych6"
    // and their passwords
};


function login(email, password) {
    cy.visit("https://dev.digital-office.dso.lanit-tercom.com/auth/login");
    cy.get('input[type="email"]')
        .type(email);
    cy.get('input[type="password"]')
        .type(password);
    cy.get('button[type="submit"]')
        .click();
    cy.intercept('GET', '/assets/icons/bug.svg')   // waiting the last response
        .as('loggedIn');
    cy.wait('@loggedIn')
        .then(() => {
            token = localStorage.getItem('access_token')  // catch the token from storage
        });
}

function setToken() {
    localStorage.setItem('access_token', token)       // and using it in next tests
}

export { user, pass, login, setToken };