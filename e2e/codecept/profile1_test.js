Feature('userlogin');

Scenario('test for admins proper number', (I) => {
    I.amOnPage('');
    I.click('Login');
    I.appendField('#formGroupExampleInput', 'hgledhill4');
    I.click('#sign-in-btn');
    I.click('Hilda Gledhill');
    I.click('Profile');
    I.click('Car Information');
    I.clearField('Make');
    I.appendField('Make','Toyota');
    I.click('Save');
    I.see('Updated');
    I.click('Membership');
    I.click('Car Information');
    I.seeInField('Make','Toyota');
});
