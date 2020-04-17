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

// doesn't work yet
Scenario('testing valid last name', (I) => {
    I.amOnPage('/');
    I.click('#signupid');
    I.appendField('First Name *', 'Timoth');
    I.appendField('Last Name *', 'MitchMan');
    // I.wait(10);
    I.clearField('First Name *');
    I.fillField('First Name *', '');
    I.clearField('Last Name *');
    I.click('#logo');
    I.see('*Required Field');
    // I.appendField('First Name *', 'y');
    I.fillField('Last Name *', 'Mitchell');
    // I.click('#logo');
    I.dontSee('*Required Field');
});

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

// doesn't work yet
// Scenario('testing valid address', async (I) => {
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
//     I.click('Register');
//     I.see('That address does not exist!');
//     I.clearField('Home Address');
//     I.clearField('City *');
//     I.clearField('Zip Code *');
//     I.appendField('Home Address', '509 Shadow Oaks Dri');
//     I.appendField('City *', 'Easley');
//     I.click('State');
//     // I.appendField('State', 'South Carolina');
//     I.selectOption('State', 'SC')
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
//     // I.selectOption('State', 'SC')
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
//     // I.click('SC');
//     // I.selectOption('State', 'SC');
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
//     I.selectOption('State', 'SC');
//     I.appendField('Zip Code *', '29642');
//     I.appendField('Last Name *', 'Mitchell');
//     I.dontSee('That address does not exist!');
// });

// should work but need username validation to work first
// Scenario('testing valid username', (I) => {
//     I.amOnPage('/');
//     I.click('#signupid');
//     I.click('Username');
//     I.appendField('Username', 'gpichmann0');
//     I.appendField('Last Name *', 'Mitchell');
//     I.see(''); //invalid username prompt
//     I.clearField('Username');
//     I.appendField('Username', 'mitchelltim29');
//     I.clearField('Last Name *');
//     I.appendField('Last Name *', 'Mitchell');
//     I.dontSee(''); //invalid username prompt
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

// not done, need sign up to work first
// Scenario('testing correct sign up', (I) => {
//     I.amOnPage('/');
//     I.click('#signupid');
// });
