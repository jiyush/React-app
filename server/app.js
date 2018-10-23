const express = require('express');
const morgan  = require('morgan');
const bodyParser = require('body-parser');
const app =  express();
const mongoose = require('mongoose');
const Cors = require("cors");

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/node',{ useNewUrlParser: true });

// app.use((request, response, next) => {
// 	response.header("Access-Control-Allow-Origin", "*");
// 	response.header("Access-Control-Allow-Header", "Origin, X-Requested-with, Content-type, Accept");
// 	next();
// });

//Middlewares
app.use(Cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routers
app.use('/user', require('./app/routes/user.route'));
app.use('/customer', require('./app/routes/customer.route'));
app.use('/task', require('./app/routes/task.route'));

const port = process.env.PORT || 5000;

app.listen(port);
console.log(`Server Listening port ${port}`);

//2017-08-10 13:12:16