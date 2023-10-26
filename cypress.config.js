const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "qq2xki",
  defaultCommandTimeout: 30000,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://pre-cveeez.azurewebsites.net",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
