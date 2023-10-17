const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vtjm9y',
  e2e: {
    baseUrl:"https://pre-cveeez.azurewebsites.net/auth/job-seeker-registration",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
