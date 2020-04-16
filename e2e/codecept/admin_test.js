Feature('admin-login');

Scenario('test for admins proper number', (I) => {
    I.amOnPage('/login/admin');
    I.seeElement('#admins');
    I.selectOption('Admin Account', '1');
    I.appendField('#userName', 'jimmy');
    I.click('Login As Admin');
    I.see('Login Failed!');
    I.appendField('#userName', 'admin1');
    I.click('Login As Admin');
    I.amOnPage('');
});


