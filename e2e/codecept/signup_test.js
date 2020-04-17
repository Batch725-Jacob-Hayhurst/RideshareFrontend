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
    I.fillField('Last Name *', '');
    // I.wait(20);
    // I.click('Last Name *');
    // I.appendField('Last Name *', '');
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
