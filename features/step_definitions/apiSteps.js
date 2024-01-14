const { Given, When, Then } = require('cucumber');
const axios = require('axios');
const chai = require('chai'); // Use CommonJS require
const { expect } = chai;
const vars = require('./petStoreVariables.js');

let response;

Given('I setup pet which will be created', () => {
    console.log("pet")
});

Then('I create new pet succesfuly', async () => {
    response = await axios.post(vars.url + vars.endpoint, vars.payload);
    expect(response.status).to.equal(axios.HttpStatusCode.Ok)
});

Then('I cannot create new pet succesfuly', async () => {
    response = await axios.post(vars.url + vars.endpoint, vars.payload);
    vars.payload = vars.payload.id = "ttt"
    expect(response.status).to.equal(axios.HttpStatusCode.BadRequest)
});

Then('the response should contain the following JSON:', (table) => {
  const expectedData = table.hashes()[0];
  for (const key in expectedData) {
    expect(response.data[key]).to.equal(expectedData[key]);
  }
});
