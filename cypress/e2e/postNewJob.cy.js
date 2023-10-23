describe("Create new job post", () => {
  it("As an employer, I want to create a new job post", () => {
    cy.visit("/auth/login");
    cy.fixture("user").then((user) => {
      cy.get("input[type='email']").type(user.emplyerEmail);
      cy.get("input[type='password']").type(user.password);
      cy.get("input[formcontrolname='remeberMe']").check();
      cy.get("button[type='submit']").click();
      cy.url()
        .should("contain", "/client/posted-opportunities")
        .then(() => {
          cy.visit("/client/add-opportunity/0");
          let _ = require("lodash");
          cy.get('span[class="dropdown-btn"]').eq(0).click();
          cy.get(
            "ul.item2> :nth-child(" +
              _.sample([1, 2, 4, 5, 6, 7, 8, 9, 10]) +
              ")"
          )
            .eq(0)
            .click();

          cy.get('span[class="dropdown-btn"]').eq(1).click();
          cy.contains(
            _.sample([
              "Student/Internship",
              "Fresh Graduate",
              "Entry Level",
              "Mid Career",
            ])
          ).click();
          cy.get("select[formcontrolname='jobTypeId']").select(
            _.sample([1, 2, 4, 5])
          );

          cy.get("select[formcontrolname='countryId']").select(
            _.sample([1, 2, 4, 5, 6, 7, 8, 9])
          );

          cy.get("input[formcontrolname='periodExpiration']").type(
            _.sample([2, 4, 6, 8, 10, 20, 30])
          );

          cy.get("select[formcontrolname='classificationId']").select(
            _.sample(["Consulting", "Project Management", "Freelance"])
          );

          cy.get('span[class="dropdown-btn"]').eq(2).click();
          cy.contains(_.sample(["Medicine", "Accounting", "Accounting"])).click(
            { force: true }
          );
          cy.contains(
            _.sample(["Art History", "Biology", "Business Administration"])
          ).click({ force: true });

          cy.get('span[class="dropdown-btn"]').eq(3).click();
          cy.contains(
            _.sample([
              "Diploma",
              "Bachelor's Degree",
              "Master's Degree",
              "Doctorate/Ph.D.",
            ])
          ).click({ force: true });

          cy.get("select[formcontrolname='ageRangeId']").select(
            _.sample([1, 2, 3, 4])
          );

          cy.get("select[formcontrolname='gender']").select(_.sample([2, 3]));

          cy.get("select[formcontrolname='yearsExperienceId']").select(
            _.sample([1, 2, 3, 4])
          );

          cy.get(
            "input[id='commercialRegistertionNoImageStorageFileName']"
          ).selectFile("cypress/fixtures/files/jobDetails.png", {
            force: true,
          });

          cy.contains("Send to the Admin")
            .click()
            .then(() => {
              cy.get('div[role="alert"]').should(
                "contain",
                "Job post sent to the admin successfully"
              );
            });
          cy.url().should("contain", "/client/posted-opportunities");
        });
    });
  });
});
