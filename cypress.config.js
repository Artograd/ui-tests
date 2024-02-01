const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
	baseUrl: 'https://dev.d3ho3rmpn6vi16.amplifyapp.com/',  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
