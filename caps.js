'use strict';
require('dotenv').config()
const events = require('./events');

// require('./body-parts/in-transit/index.js');

require('./delivery/vendor/vendor.js')
require('./delivery/driver/driver')


// events.emit('light', {brightness: 80});


// events.emit('light', {brightness: 20});

// events.on('light-detected', (payload)=> {
    // events.emit('light', {brightness: payload})
// });
