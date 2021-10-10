var crel = require('crel');

module.exports = function(namespace, type){
    var element = type instanceof Element ? type : document.createElementNS(namespace, type);
    return crel.apply(null, [element].concat(Array.prototype.slice.call(arguments, 2)));
};