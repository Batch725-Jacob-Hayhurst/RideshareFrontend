Feature('drivers-list');

Before((I) => {
    I.amOnPage('/');
    I.click('Login');
    I.fillField('Username', 'smigheli1');
    I.click('#sign-in-btn');
    I.amOnPage('/drivers');
});

// Scenario('test that map shows up', (I) => {
//     I.seeElement('#gmap');
// });

// Scenario('check for component information display', (I) => {
//     I.see("Driver's List");
//     I.see('Directions:');
//     I.see('Filter ALL');
//     I.see('Filter DISTANCE');
//     I.see('Name');
//     I.see('Distance');
//     I.see('Time');
//     I.see('Available Seats');
//     I.see('View Info');
//     I.see('View');
//     I.see('Marilyn Edmunds');
//     I.see('1 ft');
//     I.see('1 min');
//     I.see('2');
//     I.see('Hilda Gledhill');
//     I.see('Salvidor Migheli');
//     I.see('204mi 4330ft');
//     I.see('3 hours 15 mins');
//     I.see('Darren O Sullivan');
//     I.see('5');
//     I.see('Tobe Curd');
//     I.see('383mi 1523ft');
//     I.see('6 hours 31 mins');
//     I.seeElement('#paginator');
// });