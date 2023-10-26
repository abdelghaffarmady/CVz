describe("Create new job post", () => {
  const getStripeIFrameDocument = () => {
    return cy.switchToIframe(`iframe[name="stripe_checkout_app"]`);
  };

  it("Copmlete JobSeeker Profile", () => {
    cy.visit("/auth/login");
    let _ = require("lodash");

    /*    cy.request({
          url: "api/app/manage-account/current-user",
          failOnStatusCode: false,
          method:"Get",
          body:{
              email: "luigi1130@wremail.xyz",
              password: "Soforx@123" ,
          }
      }); */

    cy.get("input[formcontrolname='email']").type("jajsnsls@azaloptions.com");
    cy.get("input[formcontrolname='password']").type("Soforx@123");
    cy.get("button[id='kt_sign_in_submit']", { timeout: 10000 }).click();
    /*
      cy.get("label[id='continue-step2']",{timeout: 10000}).click()
  
      cy.get("input[formcontrolname='birthDate']").type("1995-02-27","{enter}")
  
      cy.get("input[id='attachementFileStorageName']").selectFile('cypress/fixtures/files/jobSeekerPhoto.png',{force:true})
  
      cy.get("input[formcontrolname='linkedIn']").type("https://www.linkedin.com/in/abd/")
  
      cy.get("input[id='cvAttachementFileStorageName']").selectFile("cypress/fixtures/files/jobSeekerCv.pdf",{force:true})
  
      cy.get("input[id='vedioAttachementFileStorageName']").selectFile("cypress/fixtures/files/jobSeekerVideo.mp4",{force:true})
      
      //
      cy.get('span[class="dropdown-btn"]').eq(0).click();
      cy.get(
          "ul.item2> :nth-child(" +
          _.sample([1, 2, 4, 5, 6, 7, 8, 9, 10]) + ")") .eq(0).click();
  
       cy.get('span[class="dropdown-btn"]').eq(1).click();
       cy.contains(_.sample(["Medicine", "Accounting", "Accounting"])).click(
              { force: true }
            );
  
            cy.get("select[id='inputState6']").select("Mid Career",{force:true})
            cy.get("select[id='inputState7']").select("2-5 years",{force:true})
  
            cy.get('span[class="dropdown-btn"]').eq(2).click();
            cy.contains(
              _.sample([
                "Diploma",
                "Bachelor's Degree",
                "Master's Degree",
                "Doctorate/Ph.D.",
              ])
            ).click({ force: true });
           
            cy.get('span[class="dropdown-btn"]').eq(3).click();
            cy.contains(
              _.sample([
                "Communication Skills",
                "Problem Solving",
                "Teamwork",
                "Customer Service",
              ])
            ).click();
  
            cy.get("textarea[formcontrolname='summary']",{timeout: 60000}).type("In publishing and graphic design Lorem ipsum is a placeholder text commonly used to demonstrate  a placeholder before final copy is available")
      cy.get("textarea[formcontrolname='summary']").type("In publishing and graphic design Lorem ipsum is a placeholder text commonly used to demonstrate  a placeholder before final copy is available")
      cy.contains("Save").click() 
      cy.url().should("contain","/auth/payment-package")
   */
    //Package Step
    cy.contains("3weeks").click();
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

    // getStripeIFrameDocument()
    //   .find('button[id="submitButton"]')
    //   .click()
    //   .then(() => {
    //     cy.get('div[role="alert"]').should(
    //       "contain",
    //       "Package selected successfully"
    //     );
    //   });
  });
});
