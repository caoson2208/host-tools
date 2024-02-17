describe("Login", () => {
    
  it("User can log in", () => {
    cy.visit("/");

    cy.get("#username", { timeout: 7000 }).type(Cypress.env("username"));
    cy.get("#password").type(Cypress.env("password"));
    cy.contains("button", "Login").click();
    
    // Log out
    cy.get("#profile-nav").click();
    cy.contains("h6", "test test", {timeout: 2000});
    cy.get('a[href="/logout"]').click();
  });
});
