const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "vtjm9y",
  defaultCommandTimeout: 30000,

  e2e: {
    baseUrl: "https://pre-cveeez.azurewebsites.net",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
