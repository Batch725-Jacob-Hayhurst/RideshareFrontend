Feature('drivers-list');
Before((I) => {
    I.amOnPage('/');
    I.click('Login');
    I.fillField('Username', 'gpichmann0');
    I.click('#sign-in-btn');
    I.amOnPage('/drivers');
    I.click('Grady Pichmann');
    I.click('Profile');
    I.click('#logo');
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

// Scenario('testing distance filter', (I) => {
//     I.appendField('Filter DISTANCE', '35mi 0ft');
//     I.see('Marilyn Edmunds');
//     I.see('Hilda Gledhill');
//     I.dontSee('Salvidor Migheli');
//     I.dontSee('Darren O Sullivan');
//     I.dontSee('Tobe Curd');
//     I.dontSee('Fabien Braunroth');
//     I.dontSee('Faythe Lancashire');
// });

// Scenario('testing name filter', (I) => {
//     I.appendField('Filter ALL', 'Edmunds');
//     I.see('Marilyn Edmunds');
//     I.dontSee('Hilda Gledhill');
//     I.dontSee('Salvidor Migheli');
//     I.dontSee('Darren O Sullivan');
//     I.dontSee('Tobe Curd');
//     I.dontSee('Fabien Braunroth');
//     I.dontSee('Faythe Lancashire');
// });

// Scenario('testing multiple names filter', (I) => {
//     I.appendField('Filter ALL', 'm');
//     I.see('Marilyn Edmunds');
//     I.see('Salvidor Migheli');
//     I.dontSee('Hilda Gledhill');
//     I.dontSee('Darren O Sullivan');
//     I.dontSee('Tobe Curd');
//     I.dontSee('Fabien Braunroth');
//     I.dontSee('Faythe Lancashire');
// });

// Scenario('testing phone filter', (I) => {
//     I.appendField('Filter ALL', '646-919-8954');
//     I.see('Tobe Curd');
//     I.dontSee('Marilyn Edmunds');
//     I.dontSee('Hilda Gledhill');
//     I.dontSee('Salvidor Migheli');
//     I.dontSee('Darren O Sullivan');
//     I.dontSee('Fabien Braunroth');
//     I.dontSee('Faythe Lancashire');
// });

// Scenario('testing view button', (I) => {
//     I.click('View');
//     I.see('Marilyn Edmunds');
//     I.see('Email: medmundsa@tiny.cc');
//     I.see('Phone: 213-600-8430');
// });

