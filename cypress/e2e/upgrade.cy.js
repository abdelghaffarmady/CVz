describe("Subscription", () => {
  const getStripeIFrameDocument = () => {
    return cy.switchToIframe(`iframe[name="stripe_checkout_app"]`);
  };

  it("Upgrade employer package", () => {
    cy.visit("/auth/login");
    cy.fixture("user").then((user) => {
      cy.get("input[type='email']").type(user.emplyerEmail);
      cy.get("input[type='password']").type(user.password);
    });
    cy.get("input[formcontrolname='remeberMe']").check();
    cy.get("button[type='submit']").click();
    cy.url()
      .should("contain", "/client/posted-opportunities")
      .then(() => {
        cy.visit("/client/edit-agent-profile");
      });
    cy.get(".button-upgrade").click();
    cy.contains("Monthly").click();
    cy.get("button[class='ng-star-inserted']").eq(2).click();
    //  cy.get("div[class='overlayView active']").should("be.visible")
    // cy.get("#email]").eq(0).click({force:true}).type("abdelghaffarmady@gmail.com")
    // cy.get("input[id='card_number']").type("4111 1111 1111 1111")
    // cy.get("input[id='cc-exp']").type("12 / 23")
    // cy.get("input[id='cc-csc']").type("123")
    // cy.get('button[id="submitButton"]').click()
    // cy.url().should("contain","/client/edit-job-seeker ")

    //Waite untill the iframe is load to be visiable.
    cy.wait(3000);

    cy.fixture("paymentCard").then((card) => {
      getStripeIFrameDocument().find('input[id="email"]').type(card.email);
      getStripeIFrameDocument()
        .find('input[id="card_number"]')
        .type(card.cardNumber);
      getStripeIFrameDocument()
        .find('input[id="cc-exp"]')
        .type(card.cardExpiry);
      getStripeIFrameDocument().find('input[id="cc-csc"]').type(card.cardCvc);
    });

    getStripeIFrameDocument()
      .find('button[id="submitButton"]')
      .click()
      .then(() => {
        cy.get('div[role="alert"]').should(
          "contain",
          "Package selected successfully"
        );
      });
  });
});
