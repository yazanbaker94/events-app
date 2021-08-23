'use strict';
require('dotenv').config()
const events = require('../../events');
const io=require('socket.io-client');
const HOST=process.env.HOST || 'http://localhost:3000';
const socket=io.connect(`${HOST}/caps`);

var faker = require('faker');

function yourFunction(){

    // console.log("EVENT { event: 'pickup',")
    // console.log("time: ", faker.datatype.datetime())

let payload = {
    store: `${process.env.STORE}`,
    customer: faker.name.findName(),
    orderID: faker.datatype.uuid(),
    address: faker.address.cityName() + ', ' + faker.address.stateAbbr()
}
// console.log('payload: ', payload)

socket.emit('pickup', payload)
   
}
setInterval(function () {
yourFunction()
}, 5000)


socket.on('transitDelivery', delivered)


function delivered(payload) {
    console.log("DRIVER: delivered up", payload.orderID)
        console.log("VENDOR: Thank you for delivering", payload.orderID)
socket.emit('delivered', payload)
    

}






socket.on('thankYou', thankyou)

function thankyou(payload) {
   
        console.log("VENDOR: Thank you for delivering", payload.orderID)
        
}


    // method to be executed;



// console.log(payload)


