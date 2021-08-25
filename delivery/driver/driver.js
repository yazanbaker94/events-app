'use strict';

const events = require('../../events');
const io=require('socket.io-client');
const HOST=process.env.HOST || 'http://localhost:3000';
const socket=io.connect(`${HOST}/caps`);

var faker = require('faker');

// socket.on('pickedUpDriver', driverPickedUp);
// socket.on('transitDelivery', driverTransit);
// socket.on('deliveredMsg', deliveredMsg)


socket.on("pickup", driverPickedUp);



let driver = { clientID: "driver", event: "pickup" };
socket.emit("get-all", driver);

socket.on("message", (message) => {
    if (message.payload.event === "pickup") {
        driverPickedUp(message);
    }
  });




function driverPickedUp(message) {

        console.log(`DRIVER: picked up ${message.payload.payload.orderId}`)

        socket.emit("in-transit", message.payload.payload)

        console.log(`Driver: delivered up ${message.payload.payload.orderId}`)
        socket.emit("delivered", message.payload.payload);
     socket.emit("received", message);
      
    }

   



