var page = require('webpage').create();

var err = new Error();
err.stack = {};

console.log(JSON.stringify(err.stack, null, 2));

phantom.exit(0);
