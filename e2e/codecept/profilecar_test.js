Feature('profilecar');

Before((I) => {
    I.amOnPage('/');
    I.click('Login');
    I.fillField('Username', 'hgledhill4');
    I.click('#sign-in-btn');
    I.click('Hilda Gledhill');
    I.click('Profile');
    I.click('Car Information');
});

Scenario('test for trying to update a form without changes', (I) => {
    I.click('Save');
    I.see('No Values Changed');
});

Scenario('check for component information display', (I) => {
    I.see('Contact Information');
    I.see('Location');
    I.see('Membership');
    I.see('Car Information');
    I.see('Car Information:');
    I.see('Make:');
    I.see('Model:');
    I.see('Number of seats:');
    I.see('Available seats:');
});

Scenario('test for filling initial form data', (I) => {
    I.seeInField('#make', 'GMC');
    I.seeInField('#model', 'Sierra 2500');
    I.seeInField('#Nseats', '2');
    I.seeInField('#Avseats', '2');
});

Scenario('test for updating car information', (I) => {
    I.clearField('Make');
    I.appendField('Make','Toyota');
    I.clearField('Model');
    I.appendField('Model', 'Camry');
    I.click('#Nseats');
    I.appendField('#Nseats', '5');
    I.click('#Avseats');
    I.appendField('#Avseats', '3');
    I.click('Save');
    I.see('Updated Successfully!');
    I.click('Membership');
    I.click('Car Information');
    I.seeInField('Make','Toyota');
    I.seeInField('Model','Camry');
    I.seeInField('Number of seats','5');
    I.seeInField('Available seats','3');
});

After((I) => {
    I.clearField('Make');
    I.appendField('Make','GMC');
    I.clearField('Model');
    I.appendField('Model', 'Sierra 2500');
    I.click('#Nseats');
    I.appendField('#Nseats', '2');
    I.click('#Avseats');
    I.appendField('#Avseats', '2');
    I.click('Save');
});
