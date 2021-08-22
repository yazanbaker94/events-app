'use strict';
require('dotenv').config()
const events = require('../../events');

var faker = require('faker');

function yourFunction(){

    console.log("EVENT { event: 'pickup',")
    console.log("time: ", faker.datatype.datetime())

let payload = {
    store: `${process.env.STORE}`,
    customer: faker.name.findName(),
    orderID: faker.datatype.uuid(),
    address: faker.address.cityName() + ', ' + faker.address.stateAbbr()
}
console.log('payload: ', payload)

events.emit('pickup', payload)
   
}
setInterval(function () {
yourFunction()
}, 5000)


events.on('delivered', thankyou)

function thankyou(payload) {
    console.log("DRIVER: delivered up", payload.orderID)
        console.log("VENDOR: Thank you for delivering", payload.orderID)
        console.log("EVENT { event: 'delivered',", )
        console.log("time: ", faker.datatype.datetime())
        console.log('payload: ', payload)
        console.log('**************************************************************************NEWORDER: ')



        

}





    // method to be executed;



// console.log(payload)


