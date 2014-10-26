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
    t.plan(1);

    var testElement = crelns('http://www.w3.org/2000/svg', 'g', {'class':'thing'});

    t.deepEqual(
        testElement.className,
        {animVal:'thing',baseVal:'thing'}
    );

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
