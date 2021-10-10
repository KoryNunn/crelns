var test = require('tape');
var crelns = require('../');
var { JSDOM } = require('jsdom');
var dom = new JSDOM();

global.window = dom.window;
global.document = dom.window.document;

test('create g', function(t) {
    t.plan(1);

    var testElement = crelns('http://www.w3.org/2000/svg', 'g', {'class':'thing'});

    t.equal(
        testElement.tagName,
        'g'
    );
});

test('create g with a class', function(t) {
    t.plan(2);

    var testElement = crelns('http://www.w3.org/2000/svg', 'g', {'class':'thing'});

    t.equal(testElement.className.animVal, 'thing');
    t.equal(testElement.className.baseVal, 'thing');
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
});

test('create circle with attributes', function(t) {
    t.plan(3);

    var testElement = crelns('http://www.w3.org/2000/svg', 'circle', {'class':'mycircle',cx:50,cy:50,r:25});

    t.equal(testElement.className.animVal, 'mycircle');
    t.equal(testElement.className.baseVal, 'mycircle');
    t.equal(testElement.getAttribute('cx'), '50');
});

test('modify existing circle attributes', function(t) {
    t.plan(2);

    var testElement = crelns('http://www.w3.org/2000/svg', 'circle', {'class':'mycircle',cx:50,cy:50,r:25});

    t.equal(testElement.getAttribute('r'), '25');

    testElement = crelns('http://www.w3.org/2000/svg', testElement, {r:45});

    t.equal(testElement.getAttribute('r'), '45');
});
