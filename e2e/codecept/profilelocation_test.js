// Feature('profile-location');

// Before((I) => {
//     I.amOnPage('/');
//     I.click('Login');
//     I.fillField('Username', 'gpichmann0');
//     I.click('#sign-in-btn');
//     I.click('#usernav');
//     I.click('Profile');
//     I.click('Location');
// });

// Scenario('test for trying to update a form without changes', (I) => {
//     I.click('Save');
//     I.see('No Values Changed');
// });

// Scenario('check for component information display', (I) => {
//     I.see('Contact Information');
//     I.see('Location');
//     I.see('Membership');
//     I.see('Car Information');
//     I.see('Location:');
//     I.see('Address:');
//     I.see('City:');
//     I.see('State:');
//     I.see('Zipcode:')
// });

// Scenario('check for correct location information', (I) => {
//     I.seeInField('#address', '509 Shadow Oaks Dr');
//     I.seeInField('#city', 'Easley');
//     I.seeInField('#state', 'South Carolina');
//     I.seeInField('#zipcode', '29642');
// });

// Scenario('check for incorrect address input', (I) => {
//     I.clearField('Address');
//     I.fillField('Address', '3700 Yes Ave');
//     I.clearField('City');
//     I.fillField('City', 'Porter');
//     I.click('#state');
//     I.appendField('#state', 'Massachusetts');
//     I.clearField('Zipcode');
//     I.fillField('Zipcode', '32165');
//     I.click('Save');
//     I.see('Incorrect address, try again!');
// });

// Scenario('check for data persistence with a real address', (I) => {
//     I.clearField('Address');
//     I.fillField('Address', '1291 S Crossbow Pl');
//     I.clearField('City');
//     I.fillField('City', 'Chandler');
//     I.click('#state');
//     I.appendField('#state', 'Arizona');
//     I.clearField('Zipcode');
//     I.fillField('Zipcode', '85286');
//     I.click('Save');
//     I.see('Updated successfully!');
//     I.click('Contact Information');
//     I.click('Location');
//     I.seeInField('#address', '1291 S Crossbow Pl');
//     I.seeInField('#city', 'Chandler');
//     I.seeInField('#state', 'Arizona');
//     I.seeInField('#zipcode', '85286');
// });

// After ((I) => {
//     I.clearField('Address');
//     I.fillField('Address', '509 Shadow Oaks Dr');
//     I.clearField('City');
//     I.fillField('City', 'Easley');
//     I.click('#state');
//     I.appendField('#state', 'South Carolina');
//     I.clearField('Zipcode');
//     I.fillField('Zipcode', '29642');
//     I.click('Save');
// });