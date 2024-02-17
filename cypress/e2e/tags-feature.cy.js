describe('Tag Features', () => {
    beforeEach(() => {
        cy.login(Cypress.env("username"), Cypress.env("password"));
    });
    it('Add a new tag', () => {
        cy.get("#profile-nav").click();
        cy.contains("h6", "test test", {timeout: 2000});
        cy.get('a[href="/settings"]').click();

        // Add a new tag
        const tagName = `Tag ${Date.now()}`;
        const tagMessageText = "Test tag messge text";
        cy.contains("button", "Add Tag").click();
        cy.get("[data-testid='tag-name']").should("be.visible").type(tagName);
        cy.get("[data-testid='message']").should("be.visible").type(tagMessageText);
        cy.contains("button", "Save").click();
        
        // Edit tag
        const tagMessageTextEdited = `${tagMessageText} edited`;
        cy.get(`button[data-testid='edit-tag-${tagName}']`).click();
        cy.get("[data-testid='message']").clear().type(tagMessageTextEdited);
        cy.contains("button", "Save").click();
    });
});