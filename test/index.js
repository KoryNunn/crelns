var test = require('grape'),
    crelns = require('../');

test('create g', function(t) {
    t.plan(1);

    var testElement = crelns('http://www.w3.org/2000/svg', 'g', {'class':'thing'});

    t.equal(
        testElement.tagName,
        'g'
    );

    t.end();
});

test('create g with a class', function(t) {
    t.plan(2);

    var testElement = crelns('http://www.w3.org/2000/svg', 'g', {'class':'thing'});

    t.equal(testElement.className.animVal, 'thing');
    t.equal(testElement.className.baseVal, 'thing');

    t.end();
});

test('create g with a child', function(t) {
    t.plan(2);

    var testElement = crelns('http://www.w3.org/2000/svg', 'g',
            crelns('http://www.w3.org/2000/svg', 'path')
        );

    t.equal(
        testElement.childNodes.length,
        1
    );

    t.deepEqual(
        testElement.childNodes[0].tagName,
        'path'
    );

    t.end();
});

test('create circle with attributes', function(t) {
    t.plan(4);

    var testElement = crelns('http://www.w3.org/2000/svg', 'circle', {'class':'mycircle',cx:50,cy:50,r:25});

    t.equal(testElement.className.animVal, 'mycircle');
    t.equal(testElement.className.baseVal, 'mycircle');

    t.equal(testElement.cx.baseVal.value, 50);
    t.equal(testElement.cx.baseVal.valueInSpecifiedUnits, 50);

    t.end();
});

test('modify existing circle attributes', function(t) {
    t.plan(4);

    var testElement = crelns('http://www.w3.org/2000/svg', 'circle', {'class':'mycircle',cx:50,cy:50,r:25});

    t.equal(testElement.r.baseVal.value, 25);
    t.equal(testElement.r.baseVal.valueInSpecifiedUnits, 25);

    testElement = crelns('http://www.w3.org/2000/svg', testElement, {r:45});

    t.equal(testElement.r.baseVal.value, 45);
    t.equal(testElement.r.baseVal.valueInSpecifiedUnits, 45);

    t.end();
});
