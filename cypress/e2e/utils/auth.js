let token

let user = {
    olaf: "olaf6642",
    boy: "JustaBoy",
    // you can add more users
};
let pass = {
    olaf: "5SBbbg*m*",
    boy: "U1iVMjyk*x",
    // and their passwords
};


function login(email, password) {
    cy.visit("https://dev.ltdo.xyz/auth/login");
    cy.get('input[type="email"]')
        .type(email);
    cy.get('input[type="password"]')
        .type(password);
    cy.get('button[type="submit"]')
        .click();
    cy.intercept('GET', '/assets/icons/delete.svg')   // waiting the last response
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