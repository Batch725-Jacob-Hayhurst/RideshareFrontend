Feature('adminlogin');

Scenario('test for admins proper number', (I) => {
    I.amOnPage('/login/admin');
    I.appendField('#userName', 'admin1');
    I.click('Login As Admin');
    I.click('All Users');
    I.appendField('#searchbox', 'gp');
    I.click('search');
    I.see('Grady');
});
