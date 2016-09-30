// Webpack reads this file, resolves all the dependencies referenced by it
// recursively and the outputs the bundled Javascript file.


// The !!script! is a special flag that will inline the script in our bundle,
// equivalent to using a <script> tag in HTML.
require('!!script!es6-shim/es6-shim.min.js');
require('!!script!angular2/bundles/angular2-polyfills.min.js');
require('!!script!rxjs/bundles/Rx.umd.min.js');
require('!!script!angular2/bundles/angular2-all.umd.min.js');

require('./app/main');
