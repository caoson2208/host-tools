// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.js
Cypress.Commands.add("login", (username, password) => {
  cy.visit("https://beta.hosttools.com/login");
  cy.wait(1000);
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("button[type='submit']").click();
});

Cypress.Commands.add("loginByForm", (username, password) => {
   cy.visit("https://beta.hosttools.com/login");
    cy.session([username, password], () => {
        Cypress.log({
            name: "loginByForm",
            message: `${username} | ${password}`
        });
        cy.request({
            method: "POST",
            url: "/login",
            body: {
                username,
                password
            }
        });
    });
});