///<reference types="cypress"/>

describe("Job Seeker Sign Up", () => {
  beforeEach(() => {
    cy.generateJobSeeker();
  });
  it("Sign up Succsessfully as jobseeker", () => {
    cy.fixture("JobSeeker").then((jobSeeker) => {
      cy.visit("/auth/job-seeker-registration");
      /*cy.contains("Register",{ timeout: 10000 }).click()
        cy.get("#flexRadioDefault1").click()
        cy.contains("Next").click()*/
      cy.get("input[formcontrolname='fullName']").type(jobSeeker.jobSeekerName);

      cy.get("select[formcontrolname='gender']").select("Male");
      cy.get("select[formcontrolname='nationalityId']").select("Egyptian");
      cy.get("select[formcontrolname='countryId']").select("Egypt");
      cy.get("img[class='dorpdown__icon']").click();
      cy.contains("+20").click();

      cy.get("#mobileNumber").type("1000203235");
      //cy.get("#mobileNumber").type(jobSeeker.jobSeekerMobileNumber);


      cy.get("input[formcontrolname='email']").type(jobSeeker.jobSeekerEmail);

      cy.get("input[formcontrolname='emailConfirm']").type(
        jobSeeker.jobSeekerEmail
      );

      cy.get("input[formcontrolname='password']").type(jobSeeker.password);

      cy.get("input[formcontrolname='passwordConfirm']").type(
        jobSeeker.password
      );

      cy.get("input[type='checkbox']").check();
      cy.get("div[class='btn btn-default btn-success btn-lg']")
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
