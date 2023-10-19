///<reference types="cypress"/>
import { faker } from "@faker-js/faker";

describe("Job Seeker Sign Up", () => {
  it("Sign up Succsessfully as jobseeker", () => {
    cy.visit("/auth/job-seeker-registration");
    /*cy.contains("Register",{ timeout: 10000 }).click()
        cy.get("#flexRadioDefault1").click()
        cy.contains("Next").click()*/
    cy.get("input[formcontrolname='fullName']").type("abdelghaffar");
    cy.get("select[formcontrolname='gender']").select("Male");
    cy.get("select[formcontrolname='nationalityId']").select("Egyptian");
    cy.get("select[formcontrolname='countryId']").select("Egypt");
    cy.get("img[class='dorpdown__icon']").click();
    cy.contains("+20").click();
    cy.get("#mobileNumber").type("1000203211");
    cy.get("input[formcontrolname='email']").type("tobykirk@fadsfg1d.shop");
    cy.get("input[formcontrolname='emailConfirm']").type(
      "tobykirk@fadsfg1d.shop"
    );
    cy.get("input[formcontrolname='password']").type("Soforx@123");
    cy.get("input[formcontrolname='passwordConfirm']").type("Soforx@123");
    cy.get("input[type='checkbox']").check();
    cy.get("div[class='btn btn-default btn-success btn-lg']").click();
  });
});
