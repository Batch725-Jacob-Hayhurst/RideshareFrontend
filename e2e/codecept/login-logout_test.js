// Feature('login-logout')

// Scenario('testing login feature', (I) => {
//     I.amOnPage('/');
//     I.click('Login');
//     I.fillField('Username', 'gpichmann0');
//     I.click('#sign-in-btn');
//     I.amOnPage('/drivers');
//     I.seeElement('#logo');
//     I.click('#logo');
//     I.amOnPage('/drivers');
//     I.click('Grady Pichmann');
//     I.click('Log Out');
// });

// Scenario('testing logout feature', (I) => {
//     I.amOnPage('/');
//     I.click('Login');
//     I.fillField('Username', 'gpichmann0');
//     I.click('#sign-in-btn');
//     I.click('Grady Pichmann');
//     I.click('Log Out');
//     I.seeElement('#logo');
//     I.click('#logo');
//     I.amOnPage('/');
// });

// Scenario('testing bad login', (I) => {
//     I.amOnPage('/');
//     I.click('Login');
//     I.fillField('Username', 'manpolice');
//     I.click('#sign-in-btn');
//     I.see('User not found!');
//     I.click('#logo');
//     I.amOnPage('/');
// });