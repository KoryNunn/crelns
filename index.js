var crel = require('crel');

module.exports = function(namespace, type){
    var element = crel.isElement(element) ? element : document.createElementNS(namespace, type);
    return crel.apply(null, [element].concat(Array.prototype.slice.call(arguments, 2)));
};