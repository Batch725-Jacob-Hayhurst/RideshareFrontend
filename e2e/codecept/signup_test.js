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

// Scenario('testing valid address', (I) => {
//     I.amOnPage('/');
//     I.click('#signupid');
//     // I.click('Home Address');
//     // I.wait(10);
//     I.appendField('Home Address', '698 something pl');
//     I.appendField('City *', 'city');
//     I.click('State');
//     const leState = await I.grabTextFrom('#state');
//     const aState = leState[31];
//     console.log(leState);
//     console.log(aState);
//     // I.selectOption('State', aState);
//     // I.appendField('State', aState);
//     I.click(aState);
//     I.appendField('Zip Code *', '29642');
//     I.click('Work Location');
//     I.click('#city');
//     I.see('That address does not exist!');
//     I.clearField('Home Address');
//     I.clearField('City *');
//     I.clearField('Zip Code *');
//     I.appendField('Home Address', '600 Dexter Aven');
//     I.appendField('City *', 'Montgomery');
//     I.click('State');
//     I.click('#state');
//     I.appendField('Zip Code *', '36130');
//     I.click('Work Location');
//     I.click('#city');
//     I.see('That address does not exist!');
//     I.clearField('Home Address');
//     I.clearField('City *');
//     I.clearField('Zip Code *');
//     I.appendField('Home Address', '600 Dexter Ave');
//     I.appendField('City *', 'Montgom');
//     I.click('State');
//     I.click('#state');
//     I.appendField('Zip Code *', '36130');
//     I.click('Work Location');
//     I.click('#city');
//     I.see('That address does not exist!');
//     I.clearField('Home Address');
//     I.clearField('City *');
//     I.clearField('Zip Code *');
//     I.appendField('Home Address', '600 Dexter Ave');
//     I.appendField('City *', 'Montgomery');
//     I.click('State');
//     I.click('#state');
//     I.appendField('Zip Code *', '3613');
//     I.click('Work Location');
//     I.click('#city');
//     I.see('That address does not exist!');
//     I.clearField('Home Address');
//     I.clearField('City *');
//     I.clearField('Zip Code *');
//     I.appendField('Home Address', '600 Dexter Ave');
//     I.appendField('City *', 'Montgomery');
//     I.click('State');
//     I.click('#state');
//     I.appendField('Zip Code *', '36130');
//     I.click('Work Location');
//     I.click('#city');
//     I.dontSee('That address does not exist!');
// });

// DOESN'T WORK YET
// should work but need username validation to work first
Scenario('testing valid username', (I) => {
    I.amOnPage('/');
    I.click('#signupid');
    I.appendField('#username', 'gpichmann0');
    I.appendField('Last Name *', 'Mitchell');
    I.dontSee('*Required length of at least 3');
    I.see('That username is already taken!');
    I.clearField('#username');
    I.appendField('#username', 'mi');
    I.clearField('Last Name *');
    I.appendField('Last Name *', 'Mitchell');
    I.dontSee('That username is already taken!');
    I.see('*Required length of at least 3');
    I.clearField('#username');
    I.appendField('#username', 'mitchelltim');
    I.clearField('Last Name *');
    I.appendField('Last Name *', 'Mitchell');
    I.dontSee('That username is already taken!');
    I.dontSee('*Required length of at least 3');
});

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

// THIS IS A TAD HARDCODED, YOU WILL NEED TO CHANGE USERNAME 
// OR REBOOT BACKEND EVERYTIME IN ORDER FOR THIS TEST TO WORK
// Scenario('testing correct sign up', (I) => {
//     I.amOnPage('/');
//     I.click('#signupid');
//     I.appendField('First Name *', 'Timothy');
//     I.appendField('Last Name *', 'Mitchell');
//     I.appendField('Email *', 'mitchelltim29@gmail.com');
//     I.appendField('Phone Number *', '7025952564');
//     I.appendField('Home Address', '600 Dexter Ave');
//     I.appendField('City *', 'Montgomery');
//     I.click('State');
//     I.click('#state');
//     I.appendField('Zip Code *', '36130');
//     I.appendField('#username', 'mitchelltim2');
//     I.appendField('Password *', 'password');
//     I.appendField('Confirm Password *', 'password');
//     I.click('Work Location');
//     I.click('#city');
//     I.click('Register');
//     I.click('#signup-btn');
//     I.click('Login');
//     I.fillField('Username', 'mitchelltim2');
//     I.fillField('Password', 'password');
//     I.click('#sign-in-btn');
//     I.dontSee('User not found!');
// });
