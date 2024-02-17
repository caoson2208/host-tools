describe('sendMessage', () => {
   beforeEach(() => {
     cy.login(Cypress.env("username"), Cypress.env("password"));
  });
    it('message should be exits after sending', () => {
        const messageText = `this is the message from cypress at  ${ Date.now()}`;
        cy.contains("Inbox").click();
        cy.get("[data-testid='azChatList']", {timeout: 10000}).should("be.visible");
        cy.contains("span", "Test 3123").click();
        cy.get("#input-message").type(messageText);
        cy.get("#btn-send").click();
    });
});


