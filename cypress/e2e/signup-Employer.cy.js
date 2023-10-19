describe("Employer Registration", () => {
  beforeEach(() => {
    cy.generateEmployer();
  });
  it("As an employer, I want to create a new account", () => {
    cy.fixture("employer").then((employer) => {
      let _ = require("lodash");
      cy.visit("/auth/agent-registration");
      // //step 1
      cy.get("input[formcontrolname='agentRepresentativeName']").type(
        employer.representativeName
      );
      cy.get("input[formcontrolname='agentRepresentativePosition']").type(
        employer.representativePosition
      );
      cy.get("input[formcontrolname='agentRepresentativeEmail']").type(
        employer.representativeEmail
      );
      cy.get("input[formcontrolname='agentRepresentativeConfirmEmail']").type(
        employer.representativeEmail
      );
      cy.get("img[class='dorpdown__icon']").eq(0).click();
      //Select random conurty code
      // cy.contains(_.sample(["+20", "+962", "+966"])).click();
      cy.contains("+966").click();
      cy.get("#agentMobileNumber").type("565333333");
      // cy.get("#agentMobileNumber").type(employer.representativeMobileNumber);

      //get random number  from 1 to 10
      cy.get("select[formcontrolname='countryId']").select(
        _.sample([1, 2, 4, 5, 6, 7, 8, 9, 10])
      );
      cy.get("input[formcontrolname='password']").type(employer.password);
      cy.get("input[formcontrolname='passwordConfirm']").type(
        employer.password
      );
      cy.contains("Next").click();

      // //step 2
      cy.get('input[formcontrolname="name"]').type(employer.employerName);
      cy.get("img[class='dorpdown__icon']").eq(1).click();
      cy.contains("+966").click();
      cy.get("#mobileNumber").type("565333333");
      cy.get('input[formcontrolname="email"]').type(employer.employerEmail);
      cy.get('input[formcontrolname="emailConfirm"]').type(
        employer.employerEmail
      );
      cy.get('input[formcontrolname="commercialRegistrationNo"]').type(
        employer.commercialNo
      );
      cy.get("input[type='date']").type(employer.date);
      cy.get("textarea").type(employer.descrpion);
      cy.get("#flexCheckChecked").check();
      cy.get("#flexCheckDefault2").check();
      cy.contains("Save")
        .click()
        .then((x) => {
          cy.wait(3000);
          cy.get(".modal-body").should(
            "contain",
            "Your Account Registered Successfully"
          );
        });
    });
  });
});
