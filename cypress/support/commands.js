// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("generateFixture", () => {
  const faker = require("faker");

  cy.writeFile("cypress/fixtures/employer.json", {
    representativeName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    representativePosition: `${faker.name.jobTitle()}`,
    representativeEmail: `${faker.internet.email()}`,
    representativeMobileNumber: `${faker.phone.phoneNumberFormat()}`,
    password: "Soforx@123",
    employerName: `${faker.company.bsBuzz()}`,
    employerMobileNumber: `${faker.phone.phoneNumberFormat()}`,
    employerEmail: `${faker.internet.email()}`,
    commercialNo: `${faker.datatype.number()}`,
    date: `${new Date().toISOString().slice(0, 10)}`,
    descrpion: `${faker.lorem.words(20)}`,
  });
});
