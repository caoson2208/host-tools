describe("Message", () => {
  beforeEach(() => {
      cy.login(Cypress.env("username"), Cypress.env("password"));
  });
  it("should log in successfully", () => {

      cy.contains("Messaging").click();
      cy.contains("All Listings").click();
      cy.contains("h2", "All Listings");
      cy.contains("Add Rule").click();

      // Create
      const date = Date.now();
      const ruleName = `A rule name ${date}`;
      const ruleMessage = `A message ${date}`;
      cy.get("#title").type(ruleName);
      cy.get("#message").type(ruleMessage);
      cy.contains("button", "Save").click();

      // Edit
      cy.contains("Actions").click();
      cy.contains("Edit").click();
      const ruleNameEdited = `A edited rule ${date}`;
      const ruleMessageEdited = `A edited rule ${date}`;
      cy.get("#title").clear().type(ruleNameEdited);
      cy.get("#message").clear().type(ruleMessageEdited);
      cy.contains("button", "Save").click();

      cy.contains(ruleName).should("exist");

      // Pause
      cy.contains("Actions").click();
      cy.contains("Pause").click().should("exist");
      cy.wait(2000);
      cy.contains("Pause").click();
      cy.contains("Enable").click();

      // Delete
      cy.contains("Actions").click();
      cy.contains("Delete").click();
      cy.get(".modal-content").within(() => {
      cy.contains("button", "Delete").click();
    });
  });
});
