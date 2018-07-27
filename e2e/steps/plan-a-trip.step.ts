import { defineSupportCode } from 'cucumber';

defineSupportCode(({ Given, When, Then, Before }) => {

  Given('there are some destinations to choose from', () => {
    // there is no endpoint for destinations yet. There will be one destination, which will be hardcoded as "The Shetland Isles"
  });

  When('then select a destination for their trip', (callback) => {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  When('they select the day they\'d like to plan their trip', (callback) => {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Then('they should be able to choose the waters they\'d like to fish on that one day', (callback) => {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
});
