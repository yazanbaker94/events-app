'use strict';

const events = require('../../events');
const io=require('socket.io-client');
const HOST=process.env.HOST || 'http://localhost:3000';
const socket=io.connect(`${HOST}/caps`);

var faker = require('faker');

socket.on('pickedUpDriver', driverPickedUp);
socket.on('transitDelivery', driverTransit);
socket.on('deliveredMsg', deliveredMsg)



function driverPickedUp(payload) {
    setTimeout(function () {
        console.log("DRIVER: picked up ", payload.orderID)

        
    }, 1000);

    setTimeout(function () {
     
        socket.emit("transit", payload)
    }, 2000);
}
function deliveredMsg(payload) {

    console.log("VENDOR: Thank you for delivering", payload.orderID)



}
function driverTransit(payload) {
    setTimeout(function () {
       


        

        
    }, 2000);

    setTimeout(function () {
     
        socket.emit("delivered", payload)
    }, 2500);
}


