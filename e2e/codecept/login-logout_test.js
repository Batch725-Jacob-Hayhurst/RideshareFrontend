Scenario('testing login feature', (I) => {
    I.amOnPage('/');
    I.click('Login');
    I.fillField('Username', 'gpichmann0');
    I.click('#sign-in-btn');
    I.amOnPage('/drivers');
    I.seeElement('#logo');
    I.click('#logo');
    I.amOnPage('/drivers');
    I.see('Grady Pichmann');
});

Scenario('testing logout feature', (I) => {
    I.amOnPage('/');
    I.click('Login');
    I.fillField('Username', 'gpichmann0');
    I.click('#sign-in-btn');
    I.click('Grady Pichmann');
    I.click('Logout');
    I.seeElement('#logo');
    I.click('#logo');
    I.amOnPage('/');
});