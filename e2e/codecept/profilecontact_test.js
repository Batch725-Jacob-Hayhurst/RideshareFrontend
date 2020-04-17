Feature('profile-contact');

Before((I) => {
    I.amOnPage('/');
    I.click('Login');
    I.fillField('Username', 'gpichmann0');
    I.click('#sign-in-btn');
    I.click('#usernav');
    I.click('Profile');
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
    I.see('Contact Information:');
    I.see('First Name:');
    I.see('Last Name:');
    I.see('Email:');
    I.see('Phone:')
});

Scenario('test for filling initial form data', (I) => {
    I.seeInField('#f_name', 'Grady');
    I.seeInField('#l_name', 'Pichmann');
    I.seeInField('#user_email', 'gpichmann0@artisteer.com');
    I.seeInField('#phone', '212-374-3466');
});

Scenario('checks for form submission', (I) => {
    I.clearField('First Name');
    I.fillField('First Name','Man');
    I.clearField('Last Name');
    I.fillField('Last Name', 'Police');
    I.clearField('Email');
    I.fillField('Email', 'PoliceMan@ManPolice.net')
    I.clearField('Phone');
    I.fillField('Phone', '666-666-6666');
    I.click('Save');
    I.see('Updated Successfully!');
    I.seeInField('#f_name', 'Man');
    I.seeInField('#l_name', 'Police');
    I.seeInField('#user_email', 'PoliceMan@ManPolice.net');
    I.seeInField('#phone', '666-666-6666');
});

Scenario('check data persistence', (I) => {
    I.clearField('First Name');
    I.fillField('First Name','Man');
    I.clearField('Last Name');
    I.fillField('Last Name', 'Police');
    I.clearField('Email');
    I.fillField('Email', 'PoliceMan@ManPolice.net')
    I.clearField('Phone');
    I.fillField('Phone', '666-666-6666');
    I.click('Save');
    I.see('Updated Successfully!');
    I.click('Membership');
    I.click('Contact Information');
    I.seeInField('#f_name', 'Man');
    I.seeInField('#l_name', 'Police');
    I.seeInField('#user_email', 'PoliceMan@ManPolice.net');
    I.seeInField('#phone', '666-666-6666');
});

After((I) => {
    I.clearField('First Name');
    I.fillField('First Name','Grady');
    I.clearField('Last Name');
    I.fillField('Last Name', 'Pichmann');
    I.clearField('Email');
    I.fillField('Email', 'gpichmann0@artisteer.com')
    I.clearField('Phone');
    I.fillField('Phone', '212-374-3466');
    I.click('Save');
});