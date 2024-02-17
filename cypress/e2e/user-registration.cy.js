describe('User-registration', () => {

    const registrationTestUserName = "registration_test@hosttools.com"
    const registrationTestPassword = "Test@123";
    const firstName = "Son";
    const lastName = "Cao";

    it('user can register', () => {
        cy.visit("/");
        cy.wait(2000);
        // Click on Sign up for a free trial link
        cy.get("a[href$='/register']").click();

        // Fill out the email address and submit
        // Invalid email address field
        cy.get("#username").type("%&#@gmail,com");
        cy.contains("button", "Start your 14-day trial").click();
        cy.contains("Please enter a valid email.").should("be.visible");
        
        // Valid email address field
        cy.get("#username").clear().type(registrationTestUserName);
        cy.contains("button", "Start your 14-day trial").click();

        // Fill firstName, lastName, password and submit
        cy.get("#firstName").clear().type(firstName);
        cy.get("#lastName").clear().type(lastName);
        cy.get("#password").clear().type(registrationTestPassword);
        cy.contains("button", "Next").click();

        cy.get("[data-testid='Houfy-button-connect']").click();
    });
});