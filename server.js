var express = require('express');
var app = express();
var port_su = process.env.port || 3000;

app.use(express.static('signup', {index: 'signup.html'}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port_su,()=>{
    console.log('App listening to: ' + port_su);
});


var express = require('express');
var app = express();
var port_ap = process.env.port || 3001;

app.use(express.static('Appointment Booking', {index: 'Appointment.html'}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port_ap,()=>{
    console.log('App listening to: ' + port_ap);
});



var express = require('express');
var app = express();
var port_mt = process.env.port || 3002;

app.use(express.static('mental', {index: 'home.html'}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port_mt,()=>{
    console.log('App listening to: ' + port_mt);
});