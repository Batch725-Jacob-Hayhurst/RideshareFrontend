Feature('profile-location');

Before((I) => {
    I.amOnPage('/');
    I.click('Login');
    I.fillField('Username', 'gpichmann0');
    I.click('#sign-in-btn');
    I.click('Grady Pichmann');
    I.click('Profile');
    I.click('Location');
});

Scenario('check for correct location information', (I) => {
    I.seeInField('#address', '5 Carpenter Plaza');
    I.seeInField('#address2', '#348');
    I.seeInField('#city', 'New York City');
    I.seeInField('#state', 'New York');
    I.seeInField('#zipcode', '10275');
});

Scenario('check for data persistence with a real address', (I) => {
    I.clearField('Address');
    I.fillField('Address', '1291 S Crossbow Pl');
    I.clearField('Address 2');
    I.fillField('City', 'Chandler');
    I.click('#state');
    I.appendField('#state', 'Arizona');
    I.clearField('Zipcode');
    I.fillField('Zipcode', '85286');
    I.click('Save');
    I.see('Updated Sucessfully!');
    I.click('Contact Information');
    I.click('Location');
    I.seeInField('#address', '1291 S Crossbow Pl');
    I.seeInField('#address2', '');
    I.seeInField('#city', 'Chandler');
    I.seeInField('#state', 'Arizona');
    I.seeInField('#zipcode', '85286');
});

After ((I) => {
    I.clearField('Address');
    I.fillField('Address', '5 Carpenter Plaza');
    I.clearField('Address 2');
    I.fillField('Address 2', '#348');
    I.clearField('City');
    I.fillField('City', 'New York City');
    I.click('#state');
    I.appendField('#state', 'New York');
    I.clearField('Zipcode');
    I.fillField('Zipcode', '10275');
    I.click('Save');
});