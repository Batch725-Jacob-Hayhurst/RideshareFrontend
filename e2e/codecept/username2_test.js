Feature('adminlogin');

Scenario('test for admins proper number', (I) => {
    I.amOnPage('/login/admin');
    I.appendField('#userName', 'admin1');
    I.click('Login As Admin');
    I.click('All Users');
    I.appendField('#searchbox', 'sadfwef');
    I.click('search');
    I.dontSee('Grady');
});
