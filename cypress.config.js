const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      username : "testtest@hosttools.com",
      password : "testtest",
      subUser: "testsubuser@gmail.com",
    },
    baseUrl: "https://beta.hosttools.com"
  },
});
