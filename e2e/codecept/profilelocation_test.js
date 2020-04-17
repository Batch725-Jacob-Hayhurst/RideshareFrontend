Feature('profile-location');

Before((I) => {
    I.amOnPage('/');
    I.click('Login');
    I.fillField('Username', 'gpichmann0');
    I.click('#sign-in-btn');
    I.click('#usernav');
    I.click('Profile');
    I.click('Location');
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
    I.see('Location:');
    I.see('Address:');
    I.see('City:');
    I.see('State:');
    I.see('Zipcode:')
});

Scenario('check for correct location information', (I) => {
    I.seeInField('#address', '609 Legacy Pride Dr');
    I.seeInField('#city', 'Herndon');
    I.seeInField('#state', 'Virginia');
    I.seeInField('#zipcode', '20170');
});

Scenario('check for incorrect address input', (I) => {
    I.clearField('Address');
    I.fillField('Address', '3700 Yes Ave');
    I.clearField('City');
    I.fillField('City', 'Porter');
    I.click('#state');
    I.appendField('#state', 'Massachusetts');
    I.clearField('Zipcode');
    I.fillField('Zipcode', '32165');
    I.click('Save');
    I.see('Incorrect Address, Try Again!');
});

Scenario('check for data persistence with a real address', (I) => {
    I.clearField('Address');
    I.fillField('Address', '1291 S Crossbow Pl');
    I.clearField('City');
    I.fillField('City', 'Chandler');
    I.click('#state');
    I.appendField('#state', 'Arizona');
    I.clearField('Zipcode');
    I.fillField('Zipcode', '85286');
    I.click('Save');
    I.see('Updated Successfully!');
    I.click('Contact Information');
    I.click('Location');
    I.seeInField('#address', '1291 S Crossbow Pl');
    I.seeInField('#city', 'Chandler');
    I.seeInField('#state', 'Arizona');
    I.seeInField('#zipcode', '85286');
});

After ((I) => {
    I.clearField('Address');
    I.fillField('Address', '609 Legacy Pride Dr');
    I.clearField('City');
    I.fillField('City', 'Herndon');
    I.click('#state');
    I.appendField('#state', 'Virginia');
    I.clearField('Zipcode');
    I.fillField('Zipcode', '20170');
    I.click('Save');
    I.click('Contact Information');
    I.click('Location');
});