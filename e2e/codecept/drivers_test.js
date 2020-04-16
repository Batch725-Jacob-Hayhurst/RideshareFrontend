Feature('drivers-list');

Before((I) => {
    I.amOnPage('/');
    I.click('Login');
    I.fillField('Username', 'gpichmann0');
    I.click('#sign-in-btn');
    I.amOnPage('/drivers');
});

Scenario('test that map shows up', (I) => {
    I.seeElement('#gmap');
});

Scenario('check for component information display', (I) => {
    I.see("Driver's List");
    I.see('Directions:');
    I.see('Filter ALL');
    I.see('Filter DISTANCE');
    I.see('Name');
    I.see('Distance');
    I.see('Time');
    I.see('Available Seats');
    I.see('View Info');
    I.see('View');
    I.see('Marilyn Edmunds');
    I.see('1 ft');
    I.see('1 min');
    I.see('2');
    I.see('Hilda Gledhill');
    I.see('Salvidor Migheli');
    I.see('204mi 4330ft');
    I.see('3 hours 15 mins');
    I.see('Darren O Sullivan');
    I.see('5');
    I.see('Tobe Curd');
    I.see('383mi 1523ft');
    I.see('6 hours 31 mins');
    I.seeElement('#paginator');
});

Scenario('testing Name filter', (I) => {
    I.click('Name');
    I.see('Darren O Sullivan');
    I.see('Fabien Braunroth');
    I.see('Faythe Lancashire');
    I.see('Hilda Gledhill');
    I.see('Marilyn Edmunds');
    I.dontSee('Salvidor Migheli');
    I.dontSee('Tobe Curd');
    I.click('Name');
    I.see('Tobe Curd');
    I.see('Salvidor Migheli');
    I.see('Marilyn Edmunds');
    I.see('Hilda Gledhill');
    I.see('Faythe Lancashire');
    I.dontSee('Fabien Braunroth');
    I.dontSee('Darren O Sullivan');
});

Scenario('testing Distance filter', (I) => {
    I.click('Distance');
    I.see('Darren O Sullivan');
    I.see('Fabien Braunroth');
    I.see('Faythe Lancashire');
    I.see('Tobe Curd');
    I.see('Salvidor Migheli');
    I.dontSee('Hilda Gledhill');
    I.dontSee('Marilyn Edmunds');
    I.see('1477mi 3051ft');
    I.see('980mi 4032ft');
    I.see('383mi 1523ft');
    I.see('204mi 4330ft');
    I.dontSee('1 ft');
    I.click('Distance');
    I.see('Tobe Curd');
    I.see('Salvidor Migheli');
    I.see('Marilyn Edmunds');
    I.see('Hilda Gledhill');
    I.see('Darren O Sullivan');
    I.dontSee('Faythe Lancashire');
    I.dontSee('Fabien Braunroth');
    I.see('383mi 1523ft');
    I.see('204mi 4330ft');
    I.see('1 ft');
    I.dontSee('1477mi 3051ft');
    I.dontSee('980mi 4032ft');
});

Scenario('testing Available Seats filter', (I) => {
    I.click('Available Seats');
    I.see('Tobe Curd');
    I.see('Salvidor Migheli');
    I.see('Marilyn Edmunds');
    I.see('Hilda Gledhill');
    I.see('Fabien Braunroth');
    I.dontSee('Darren O Sullivan');
    I.dontSee('Faythe Lancashire');
    I.click('Available Seats');
    I.see('Salvidor Migheli');
    I.see('Marilyn Edmunds');
    I.see('Hilda Gledhill');
    I.see('Darren O Sullivan');
    I.see('Faythe Lancashire');
    I.dontSee('Fabien Braunroth');
    I.dontSee('Tobe Curd');
});

Scenario('testing distance filter', (I) => {
    I.appendField('Filter DISTANCE', '1mi 0ft');
    I.see('Marilyn Edmunds');
    I.see('Hilda Gledhill');
    I.dontSee('Salvidor Migheli');
    I.dontSee('Darren O Sullivan');
    I.dontSee('Tobe Curd');
    I.dontSee('Fabien Braunroth');
    I.dontSee('Faythe Lancashire');
    I.appendField('Filter DISTANCE', '5mi 0ft');
    I.see('Marilyn Edmunds');
    I.see('Hilda Gledhill');
    I.dontSee('Salvidor Migheli');
    I.dontSee('Darren O Sullivan');
    I.dontSee('Tobe Curd');
    I.dontSee('Fabien Braunroth');
    I.dontSee('Faythe Lancashire');
    I.appendField('Filter DISTANCE', '10mi 0ft');
    I.see('Marilyn Edmunds');
    I.see('Hilda Gledhill');
    I.dontSee('Salvidor Migheli');
    I.dontSee('Darren O Sullivan');
    I.dontSee('Tobe Curd');
    I.dontSee('Fabien Braunroth');
    I.dontSee('Faythe Lancashire');
    I.appendField('Filter DISTANCE', '25mi 0ft');
    I.see('Marilyn Edmunds');
    I.see('Hilda Gledhill');
    I.dontSee('Salvidor Migheli');
    I.dontSee('Darren O Sullivan');
    I.dontSee('Tobe Curd');
    I.dontSee('Fabien Braunroth');
    I.dontSee('Faythe Lancashire');
    // should work once 35mi+ works
    // I.appendField('Filter DISTANCE', '35mi 0ft');
    // I.dontSee('Marilyn Edmunds');
    // I.dontSee('Hilda Gledhill');
    // I.see('Salvidor Migheli');
    // I.see('Darren O Sullivan');
    // I.see('Tobe Curd');
    // I.see('Fabien Braunroth');
    // I.see('Faythe Lancashire');
});

Scenario('testing name text filter', (I) => {
    I.appendField('Filter ALL', 'Edmunds');
    I.see('Marilyn Edmunds');
    I.dontSee('Hilda Gledhill');
    I.dontSee('Salvidor Migheli');
    I.dontSee('Darren O Sullivan');
    I.dontSee('Tobe Curd');
    I.dontSee('Fabien Braunroth');
    I.dontSee('Faythe Lancashire');
});

Scenario('testing multiple names text filter', (I) => {
    I.appendField('Filter ALL', 'm');
    I.see('Marilyn Edmunds');
    I.see('Salvidor Migheli');
    I.dontSee('Hilda Gledhill');
    I.dontSee('Darren O Sullivan');
    I.dontSee('Tobe Curd');
    I.dontSee('Fabien Braunroth');
    I.dontSee('Faythe Lancashire');
});

Scenario('testing phone text filter', (I) => {
    I.appendField('Filter ALL', '646-919-8954');
    I.see('Tobe Curd');
    I.dontSee('Marilyn Edmunds');
    I.dontSee('Hilda Gledhill');
    I.dontSee('Salvidor Migheli');
    I.dontSee('Darren O Sullivan');
    I.dontSee('Fabien Braunroth');
    I.dontSee('Faythe Lancashire');
});

Scenario('testing view button', (I) => {
    I.click('View');
    I.see('Marilyn Edmunds');
    I.see('Email: medmundsa@tiny.cc');
    I.see('Phone: 213-600-8430');
});