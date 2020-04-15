Feature('profile');

Scenario('checks for data persistance', (I) => {
    I.amOnPage('/');
    I.click('Login');
    I.fillField('Username', 'gpichmann0');
    I.click('#sign-in-btn');
    I.click('Grady Pichmann');
    I.click('Profile');
    I.seeInField('#f_name', 'Grady');
    I.seeInField('#l_name', 'Pichmann');
    I.seeInField('#user_email', 'gpichmann0@artisteer.com');
    I.seeInField('#phone', '212-374-3466');
    I.clearField('First Name');
    I.fillField('First Name','Man');
    I.clearField('Last Name');
    I.fillField('Last Name', 'Police');
    I.clearField('Email');
    I.fillField('Email', 'PoliceMan@ManPolice.net')
    I.clearField('Phone');
    I.fillField('Phone', '666-666-6666');
    I.click('Save');
    I.seeInField('#f_name', 'Man');
    I.seeInField('#l_name', 'Police');
    I.seeInField('#email', 'PoliceMan@ManPolice');
    I.seeInField('#phone', '666-666-6666');
});