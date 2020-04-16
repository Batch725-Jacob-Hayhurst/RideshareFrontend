Feature('logo-routing');

Before((I) => {
    I.amOnPage('/');
    I.click('Login');
    I.fillField('Username', 'smigheli1');
    I.click('#sign-in-btn');
});

Scenario('test revature routing button in drivers page', (I) => {
    I.amOnPage('/drivers');
    I.seeElement('#logo');
    I.click('#logo');
    I.amOnPage('/drivers');
});

Scenario('test revature routing button in profile-contact page', (I) => {
    I.click('#usernav');
    I.click('Profile');
    I.click('Contact Information');
    I.seeElement('#logo');
    I.click('#logo');
    I.amOnPage('/drivers');
});

Scenario('test revature routing button in profile-location page', (I) => {
    I.click('#usernav');
    I.click('Profile');
    I.click('Location');
    I.seeElement('#logo');
    I.click('#logo');
    I.amOnPage('/drivers');
});

Scenario('test revature routing button in profile-membership page', (I) => {
    I.click('#usernav');
    I.click('Profile');
    I.click('Membership');
    I.seeElement('#logo');
    I.click('#logo');
    I.amOnPage('/drivers');
});

Scenario('test revature routing button in profile-car page', (I) => {
    I.click('#usernav');
    I.click('Profile');
    I.click('Car Information');
    I.seeElement('#logo');
    I.click('#logo');
    I.amOnPage('/drivers');
});

