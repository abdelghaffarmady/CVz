// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("generateEmployer", () => {
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
// JobSeeker Faker Generate
Cypress.Commands.add("generateJobSeeker", () => {
  const faker = require("faker");

  cy.writeFile("cypress/fixtures/jobSeeker.json", {
    jobSeekerName: `${faker.name.firstName()}`,
    jobSeekerEmail: `${faker.internet.email()}`,
    jobSeekerMobileNumber: `${faker.phone.phoneNumberFormat()}`,
    password: "Soforx@123",
  });
});

// Cypress.Commands.add("iframeLoaded", { prevSubject: "element" }, ($iframe) => {
//   const contentWindow = $iframe.prop("contentWindow");
//   return new Promise((resolve) => {
//     if (contentWindow && contentWindow.document.readyState === "complete") {
//       resolve(contentWindow);
//     } else {
//       $iframe.on("load", () => {
//         resolve(contentWindow);
//       });
//     }
//   });
// });

// Cypress.Commands.add(
//   "getInDocument",
//   { prevSubject: "document" },
//   (document, selector) => Cypress.$(selector, document)
// );

// Cypress.Commands.add("getWithinIframe", (targetElement) =>
//   cy.get("iframe").iframeLoaded().its("document").getInDocument(targetElement)
// );
