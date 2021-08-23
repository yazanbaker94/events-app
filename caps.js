'use strict';
require('dotenv').config()
const events = require('./events');
const port = process.env.PORT || 3000;
const io=require('socket.io')(port);
const caps=io.of('/caps')

var faker = require('faker');


// require('./body-parts/in-transit/index.js');

// const vendor =  require('./delivery/vendor/vendor.js')
// require('./delivery/driver/driver')

io.on('connection',socket=>{
    console.log('CONNECTED SUCCESSFULLY ',socket.id);
});


caps.on('connection',socket=>{
    console.log('CONNECTED SUCCESSFULLY ',socket.id);

    socket.on('pickup', payload => {
        console.log("EVENT { event: 'pickup',")
        console.log("time: ", faker.datatype.datetime())
        console.log({
            payload:payload
        })
        caps.emit('pickedUpDriver', payload)
    })

    socket.on('transit', payload => {
        console.log("EVENT { event: 'transit',")
        console.log("time: ", faker.datatype.datetime())
        console.log({
            payload:payload
        })
        socket.emit('transitDelivery', payload)
    })

    socket.on('delivered', payload => {
        console.log("EVENT { event: 'delivered',")
        console.log("time: ", faker.datatype.datetime())
        console.log({
            payload:payload
        })

        caps.emit('thankYou',payload);
        caps.emit('deliveredMsg',payload);


    })

})





// events.emit('light', {brightness: 80});


// events.emit('light', {brightness: 20});

// events.on('light-detected', (payload)=> {
    // events.emit('light', {brightness: payload})
// });
