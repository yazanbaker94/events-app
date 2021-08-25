'use strict';
require('dotenv').config()

const io=require('socket.io-client');
const HOST=process.env.HOST || 'http://localhost:3000';
const socket=io.connect(`${HOST}/caps`);
const storeName = process.env.STORE || "acme-widgets"

socket.emit("join", storeName);

let vendor = { clientID: storeName, event: "delivered" };
socket.emit("get-all", vendor);

var faker = require('faker');

socket.on("message", (message) => {
    if (
      message.payload.event === "delivered" &&
      message.payload.payload.store === storeName
    ) {
      vendorFunction(message);
    }
    if (
      message.payload.event === "in-transit" &&
      message.payload.payload.store === storeName
    ) {
      socket.emit("in-transit", message.id);
    }
  });

  socket.on("in-transit", (message) => {
    socket.emit("received", message.id);
  });



    // console.log("EVENT { event: 'pickup',")
    // console.log("time: ", faker.datatype.datetime())
    setInterval(() => {

let payload = {
    store: `${process.env.STORE}`,
    customer: faker.name.findName(),
    orderId: faker.datatype.uuid(),
    address: faker.address.cityName() + ', ' + faker.address.stateAbbr()
  };
  socket.emit("pickup", payload);
}, 5000);

// console.log('payload: ', payload)


socket.on('delivered', delivered)


function delivered(message) {
        console.log(`VENDOR: Thank you for delivering, ${message.payload.payload.orderId}`)

    

}






