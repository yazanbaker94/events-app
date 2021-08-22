'use strict';

const events = require('../../events');
var faker = require('faker');
events.on('pickup', driverPickedUp);

function driverPickedUp(payload) {
    setTimeout(function () {
        console.log("DRIVER: picked up ", payload.orderID)
       
        console.log("EVENT { event: in transit", )
        console.log("time: ", faker.datatype.datetime())
        console.log('payload: ', payload)

        

        
    }, 1000);

    setTimeout(function () {
     
    events.emit("delivered", payload)
    }, 3000);
}

