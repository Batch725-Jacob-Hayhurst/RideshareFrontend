Feature('sign-up');

// Scenario('testing valid first name', (I) => {
//     I.amOnPage('/');
//     I.click('#signupid');
//     I.fillField('First Name *', 'T');
//     I.fillField('Last Name *', '');
//     I.see('*Required Field');
//     I.clearField('First Name *');
//     I.fillField('First Name *', 'Timothy');
//     I.fillField('Last Name *', '');
//     I.dontSee('*Required Field');
// });

// DOESN'T WORK YET
// Scenario('testing valid last name', (I) => {
//     I.amOnPage('/');
//     I.click('#signupid');
//     I.appendField('First Name *', 'Timoth');
//     I.appendField('Last Name *', 'M');
//     I.clearField('Last Name *');
//     I.appendField('First Name *', 'y');
//     I.see('*Required Field');
//     I.fillField('Last Name *', 'Mitchell');
//     I.dontSee('*Required Field');
// });

// Scenario('testing valid email', (I) => {
//     I.amOnPage('/');
//     I.click('#signupid');
//     I.appendField('Email *', 'dslkfjsdf');
//     I.appendField('Last Name *', 'Mitchell');
//     I.see('*Required. Email Not Valid.');
//     I.clearField('Email *');
//     I.appendField('Email *', 'mitchelltim29@gmail');
//     I.clearField('Last Name *');
//     I.appendField('Last Name *', 'Mitchell');
//     I.see('*Required. Email Not Valid.');
//     I.clearField('Email *');
//     I.appendField('Email *', 'mitchelltim29.gmail');
//     I.clearField('Last Name *');
//     I.appendField('Last Name *', 'Mitchell');
//     I.see('*Required. Email Not Valid.');
//     I.clearField('Email *');
//     I.appendField('Email *', 'mitchelltim29@gmail.com');
//     I.clearField('Last Name *');
//     I.appendField('Last Name *', 'Mitchell');
//     I.dontSee('*Required. Email Not Valid.');
// });

// Scenario('testing valid phone number', (I) => {
//     I.amOnPage('/');
//     I.click('#signupid');
//     I.appendField('Phone Number *', 'fdsf');
//     I.appendField('Last Name *', 'Mitchell');
//     I.see('*10 Digit Phone-numbers only');
//     I.clearField('Phone Number *');
//     I.appendField('Phone Number *', '702595256');
//     I.clearField('Last Name *');
//     I.appendField('Last Name *', 'Mitchell');
//     I.see('*10 Digit Phone-numbers only');
//     I.clearField('Phone Number *');
//     I.appendField('Phone Number *', '7025952564');
//     I.clearField('Last Name *');
//     I.appendField('Last Name *', 'Mitchell');
//     I.dontSee('*10 Digit Phone-numbers only');
// });

// DOESN'T WORK YET
// Scenario('testing valid address', (I) => {
//     I.amOnPage('/');
//     I.click('#signupid');
//     I.appendField('Home Address', '698 something pl');
//     I.appendField('City *', 'city');
//     I.click('State');
//     I.click('#state');
//     I.appendField('Zip Code *', '29642');
//     I.click('Work Location');
//     I.click('#city');
//     I.click('Register');
//     I.see('That address does not exist!');
//     I.clearField('Home Address');
//     I.clearField('City *');
//     I.clearField('Zip Code *');
//     I.appendField('Home Address', '509 Shadow Oaks Dri');
//     I.appendField('City *', 'Easley');
//     I.click('State');
//     I.appendField('State', 'SC');
//     I.click('SC');
//     I.appendField('Zip Code *', '29642');
//     I.appendField('Last Name *', 'Mitchell');
//     I.see('That address does not exist!');
//     I.clearField('Home Address');
//     I.clearField('City *');
//     I.clearField('Zip Code *');
//     I.appendField('Home Address', '509 Shadow Oaks Dr');
//     I.appendField('City *', 'Easle');
//     I.click('State');
//     I.appendField('State', 'SC');
//     I.click('SC');
//     I.appendField('Zip Code *', '29642');
//     I.appendField('Last Name *', 'Mitchell');
//     I.see('That address does not exist!');
//     I.clearField('Home Address');
//     I.clearField('City *');
//     I.clearField('Zip Code *');
//     I.appendField('Home Address', '509 Shadow Oaks Dr');
//     I.appendField('City *', 'Easley');
//     I.click('State');
//     I.appendField('State', 'SC');
//     I.click('SC');
//     I.appendField('Zip Code *', 'fsdf');
//     I.appendField('Last Name *', 'Mitchell');
//     I.see('*Required. Zip Code Not Valid.');
//     I.see('That address does not exist!');
//     I.clearField('Home Address');
//     I.clearField('City *');
//     I.clearField('Zip Code *');
//     I.appendField('Home Address', '509 Shadow Oaks Dr');
//     I.appendField('City *', 'Easley');
//     I.click('State');
//     I.appendField('State', 'SC');
//     I.click('SC');
//     I.appendField('Zip Code *', '29642');
//     I.appendField('Last Name *', 'Mitchell');
//     I.dontSee('That address does not exist!');
// });

// DOESN'T WORK YET
// should work but need username validation to work first
// Scenario('testing valid username', (I) => {
//     I.amOnPage('/');
//     I.click('#signupid');
//     I.click('Username');
//     I.appendField('Username', 'gpichmann0');
//     I.appendField('Last Name *', 'Mitchell');
//     I.see('Username is unavailable!');
//     I.clearField('Username');
//     I.appendField('Username', 'mitchelltim29');
//     I.clearField('Last Name *');
//     I.appendField('Last Name *', 'Mitchell');
//     I.dontSee('Username is unavailable!');
// });

// Scenario('testing valid and matching passwords', (I) => {
//     I.amOnPage('/');
//     I.click('#signupid');
//     I.appendField('Password *', 'hello');
//     I.appendField('Last Name *', 'Mitchell');
//     I.see('*Required length of at least 6');
//     I.appendField('Password *', 'world');
//     I.dontSee('*Required length of at least 6');
//     I.appendField('Confirm Password *', 'hello');
//     I.see('Must match password field.');
//     I.appendField('Confirm Password *', 'world');
//     I.dontSee('Must match password field.');
// });

// DOESN'T WORK YET
// should work but need register form to work first
// Scenario('testing correct sign up', (I) => {
//     I.amOnPage('/');
//     I.click('#signupid');
//     I.appendField('First Name *', 'Timothy');
//     I.appendField('Last Name *', 'Mitchell');
//     I.appendField('Email *', 'mitchelltim29@gmail.com');
//     I.appendField('Phone Number *', '7025952564');
//     I.appendField('Home Address', '509 Shadow Oaks Dr');
//     I.appendField('City *', 'Easley');
//     // figure out how to do state
//     I.appendField('Zip Code *', '29642');
//     I.appendField('#username', 'mitchelltim29');
//     I.appendField('Password *', 'password');
//     I.appendField('Confirm Password *', 'password');
//     I.click('Work Location');
//     I.click('#city');
//     I.click('Register');
//     I.click('#signup-btn');
//     I.click('Login');
//     I.fillField('Username', 'mitchelltim29');
//     I.fillField('Password', 'password');
//     I.click('#sign-in-btn');
//     I.dontSee('Login');
//     I.dontSee('User not found!');
//     I.dontSee('Username');
//     I.dontSee('Password');
// });