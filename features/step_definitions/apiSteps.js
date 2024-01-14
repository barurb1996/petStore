const {Given, When, Then} = require('cucumber');
const axios = require('axios');
const chai = require('chai');
const {expect} = chai;
const vars = require('./petStoreVariables.js');

let response;
let createdPetId;

Given('I set the pet ID to {int}', function (newId) {
    vars.payload.id = newId;
});

Given('I set the pet ID to wrong ID {string}', function (newId) {
    vars.payload.id = newId;
});

Given('I set the pet category ID to {int}', function (newCategoryId) {
    vars.payload.category.id = newCategoryId;
});

Given('I set the pet category name to {string}', function (newCategoryName) {
    vars.payload.category.name = newCategoryName;
});

Given('I set the pet name to {string}', function (newName) {
    vars.payload.name = newName;
});

Given('I set the pet photoUrls to {string}', function (newPhotoUrls) {
    vars.payload.photoUrls = [newPhotoUrls];
});

When('I set the pet tag ID to {int}', function (newTagId) {
    vars.payload.tags[0].id = newTagId;
});

Given('I set the pet tag name to {string}', function (newTagName) {
    vars.payload.tags[0].name = newTagName;
});

Given('I set the pet status to {string}', function (newStatus) {
    vars.payload.status = newStatus;
});

When('I try to create a new pet', async () => {
    try {
        response = await axios.post(vars.url + vars.endpoint, vars.payload);
    } catch (error) {
        response = error.response;
    }
});

When('I try to update an existing pet', async () => {
    try {
        response = await axios.put(vars.url + vars.endpoint, vars.payload);
    } catch (error) {
        response = error.response;
    }
});

When('I try to delete an existing pet', async () => {
    try {
        response = await axios.delete(vars.url + vars.endpoint + "/" + createdPetId);
    } catch (error) {
        response = error.response;
    }
});

Then('Created pet data is correct', async () => {
    expect(response.data).to.deep.equal(vars.payload)
    createdPetId = response.data.id
});

Then('I try to retrieve an existing pet', async () => {
    try {
        response = await axios.get(vars.url + vars.endpoint + "/" + createdPetId)
    } catch (error) {
        response = error.response;
    }
});

Then('I should receive a {int} status code', (statusCode) => {
    expect(response.status).to.equal(statusCode);
});
