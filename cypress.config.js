const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
      "viewportWidth": 1366,
      "viewportHeight": 768,
      "defaultCommandTimeout": 3000,
      specPattern: "cypress/e2e/**/*.feature",
      baseUrl: 'http://localhost:3000',
  },
});
