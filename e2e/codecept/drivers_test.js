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
    I.see('0mi 4222ft');
    I.see('5 mins');
    I.see('Hilda Gledhill');
    I.see('2mi 2084ft');
    I.see('10 mins');
    I.see('Darren O Sullivan');
    I.see('2mi 3374ft');
    I.see('11 mins');
    I.see('Tobe Curd');
    I.see('2mi 5113ft');
    I.see('Faythe Lancashire');
    I.see('3mi 512ft');
    I.see('13 mins');
    I.dontSee('Salvidor Migheli');
    I.dontSee('200mi 1100ft');
    I.dontSee('3 hours 28 mins');
    I.dontSee('Fabien Braunroth');
    I.dontSee('201mi 4078ft');
    I.dontSee('3 hours 26 mins');
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
    I.see('Faythe Lancashire');
    I.see('Tobe Curd');
    I.dontSee('Hilda Gledhill');
    I.dontSee('Marilyn Edmunds');
    I.see('Salvidor Migheli');
    I.see('Fabien Braunroth');
    I.see('201mi 4078ft');
    I.see('200mi 1100ft');
    I.see('3mi 512ft');
    I.see('2mi 5113ft');
    I.see('2mi 3374ft');
    I.dontSee('2mi 2084ft');
    I.dontSee('0mi 4222ft');
    I.click('Distance');
    I.see('Tobe Curd');
    I.see('Marilyn Edmunds');
    I.see('Hilda Gledhill');
    I.see('Darren O Sullivan');
    I.see('Faythe Lancashire');
    I.dontSee('Fabien Braunroth');
    I.dontSee('Salvidor Migheli');
    I.dontSee('201mi 4078ft');
    I.dontSee('200mi 1100ft');
    I.see('3mi 512ft');
    I.see('2mi 5113ft');
    I.see('2mi 3374ft');
    I.see('2mi 2084ft');
    I.see('0mi 4222ft');
});

Scenario('testing Available Seats filter', (I) => {
    I.click('Available Seats');
    I.see('Tobe Curd');
    I.see('Salvidor Migheli');
    I.see('Marilyn Edmunds');
    I.see('Hilda Gledhill');
    I.see('Faythe Lancashire');
    I.dontSee('Fabien Braunroth');
    I.dontSee('Darren O Sullivan');
    I.click('Available Seats');
    I.see('Salvidor Migheli');
    I.see('Hilda Gledhill');
    I.see('Darren O Sullivan');
    I.see('Fabien Braunroth');
    I.see('Tobe Curd');
    I.dontSee('Faythe Lancashire');
    I.dontSee('Marilyn Edmunds');
});

Scenario('testing distance dropdown filter', (I) => {
    I.appendField('Filter DISTANCE', '1mi 0ft');
    I.see('Marilyn Edmunds');
    I.dontSee('Hilda Gledhill');
    I.dontSee('Salvidor Migheli');
    I.dontSee('Darren O Sullivan');
    I.dontSee('Tobe Curd');
    I.dontSee('Fabien Braunroth');
    I.dontSee('Faythe Lancashire');
    I.appendField('Filter DISTANCE', '5mi 0ft');
    I.see('Marilyn Edmunds');
    I.see('Hilda Gledhill');
    I.see('Darren O Sullivan');
    I.see('Tobe Curd');
    I.see('Faythe Lancashire');
    I.dontSee('Fabien Braunroth');
    I.dontSee('Salvidor Migheli');
    I.appendField('Filter DISTANCE', '10mi 0ft');
    I.see('Marilyn Edmunds');
    I.see('Hilda Gledhill');
    I.see('Darren O Sullivan');
    I.see('Tobe Curd');
    I.see('Faythe Lancashire');
    I.dontSee('Fabien Braunroth');
    I.dontSee('Salvidor Migheli');
    I.appendField('Filter DISTANCE', '25mi 0ft');
    I.see('Marilyn Edmunds');
    I.see('Hilda Gledhill');
    I.see('Darren O Sullivan');
    I.see('Tobe Curd');
    I.see('Faythe Lancashire');
    I.dontSee('Fabien Braunroth');
    I.dontSee('Salvidor Migheli');
    // should work once 35mi+ works
    // I.appendField('Filter DISTANCE', '35mi 0ft');
    // I.dontSee('Marilyn Edmunds');
    // I.dontSee('Hilda Gledhill');
    // I.dontSee('Darren O Sullivan');
    // I.dontSee('Tobe Curd');
    // I.dontSee('Faythe Lancashire');
    // I.see('Fabien Braunroth');
    // I.see('Salvidor Migheli');
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