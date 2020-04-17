// Feature('profile-membership');

// Before((I) => {
//     I.amOnPage('/');
//     I.click('Login');
//     I.fillField('Username', 'gpichmann0');
//     I.click('#sign-in-btn');
//     I.click('#usernav');
//     I.click('Profile');
//     I.click('Membership');
// });

// Scenario('test for trying to update a form without changes', (I) => {
//     I.click('Save');
//     I.see('No Values Changed');
// });

Scenario('check for component information display', (I) => {
    I.see('Contact Information');
    I.see('Location');
    I.see('Membership');
    I.see('Car Information');
    I.see('Membership:');
    I.see('Batch:');
    I.see('1 - Morgantown, WV 26506');
    I.see('Status:');
});

// Scenario('test for filling initial form data', (I) => {
//     I.seeInField('#rider','Rider');
//     I.seeInField('#active','Disabled');
// });

// Scenario('check for form submission', (I) => {
//     I.click('#rider');
//     I.appendField('#rider', 'Driver');
//     I.click('#active');
//     I.appendField('#active','Active');
//     I.click('Save');
//     I.see('Updated Successfully!');
//     I.click('Car Information');
//     I.click('Membership');
//     I.seeInField('#rider','Driver');
//     I.seeInField('#active','Active');
// });

// After((I) => {
//     I.click('#rider');
//     I.appendField('#rider', 'Rider');
//     I.click('#active');
//     I.appendField('#active','Disabled');
//     I.click('Save');
// });