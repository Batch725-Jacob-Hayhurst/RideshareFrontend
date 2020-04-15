Feature('adminhome');

Before((I) => {
    I.amOnPage('/login/admin');
    I.seeElement('#admins');
    I.selectOption('Admin Account', '1');
    I.appendField('#userName', 'admin1');
    I.click('Login As Admin');
});

Scenario('test for table headers', (I) => {
    I.seeElement('#allusers');
    I.click('All Users');
    I.see('Admin Portal');
    I.see('All Users');
    I.see('Log Out');
    I.see('ID');
    I.see('UserName');
    I.see('First Name');
    I.see('Last Name');
    I.see('Email');
    I.see('Phone Number');
    I.see('Batch Number');
    I.see('is Active');
    I.see('Ban');
});

Scenario('test for banning and unbanning users', (I) => {
    I.seeElement('#allusers');
    I.click('All Users');
    I.appendField('#search-username','smigheli1');
    I.click('search');
    I.see('1');
    I.see('Salvidor');
    I.see('Migheli');
    I.see('smigheli1@indiatimes.com');
    I.see('614-513-2776');
    I.click('Ban');
    I.see('false');
    I.click('UnBan');
    I.see('true');
});

Scenario('test for searching valid and invalid users', (I) => {
    I.seeElement('#allusers');
    I.click('All Users');
    I.appendField('#search-username','sm');
    I.click('search');
    I.see('Salvidor');
    I.clearField('#search-username');
    I.appendField('#search-username','sma');
    I.click('search');
    I.see('');
});

Scenario('test for all users showing up', (I) => {
    I.seeElement('#allusers');
    I.click('All Users');
    I.see('Grady');
    I.see('Salvidor');
    I.see('Fabien');
    I.see('Aldon');
    I.see('Hilda');
    I.see('Simonne');
    I.see('Darren');
    I.see('Donnell');
    I.see('Brynne');
    I.see('Tobe');
    I.see('Marilyn');
    I.see('Wynne');
    I.see('Jozef');
    I.see('Faythe');
    I.see('Lorita');
    I.see('Marcellina');
    I.see('Jaine');
    I.see('Wain');
    I.see('Geneva');
    I.see('Cissy');
    I.see('Lynn');
    I.click('search');
    I.see('Grady');
    I.see('Salvidor');
    I.see('Fabien');
    I.see('Aldon');
    I.see('Hilda');
    I.see('Simonne');
    I.see('Darren');
    I.see('Donnell');
    I.see('Brynne');
    I.see('Tobe');
    I.see('Marilyn');
    I.see('Wynne');
    I.see('Jozef');
    I.see('Faythe');
    I.see('Lorita');
    I.see('Marcellina');
    I.see('Jaine');
    I.see('Wain');
    I.see('Geneva');
    I.see('Cissy');
    I.see('Lynn');
});

Scenario('test for logging out of admin', (I) => {
    I.seeElement('#allusers');
    I.click('All Users');
    I.seeElement('#logout');
    I.click('Log Out');
    I.amOnPage('');
});