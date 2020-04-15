Feature('membership');

Before((I) => {
    I.amOnPage('/');
    I.click('Login');
    I.fillField('Username', 'gpichmann0');
    I.click('#sign-in-btn');
    I.click('Grady Pichmann');
    I.click('Profile');
});

Scenario('check for membership display', (I) => {
    I.click('Membership');
    I.click('Driver');
});