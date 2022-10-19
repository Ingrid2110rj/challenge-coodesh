const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'v8hrc9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://beta.coodesh.com/'
  },
 

});
