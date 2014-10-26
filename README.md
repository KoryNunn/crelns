# crelns

[Crel](http://github.com:KoryNunn/crel) for creating namespaced elements, like SVG.

# usage:

Same as crel, but with the namespace as the first argument:

``` javascript
crelns('http://www.w3.org/2000/svg', 'g', {'class':'thing'});
```

You can easily make an SVG specific version like so:


``` javascript
var crsvg = require('crelns').bind(null, 'http://www.w3.org/2000/svg');
```