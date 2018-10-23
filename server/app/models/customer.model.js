import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import 'babel-polyfill';
var Schema = mongoose.Schema;

var customerSchema = new mongoose.Schema({
    name: {
      type:String,
      required:true,
    },
    email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },
    createdBy:{
      type:Number
    },
    updatedBy:{
      type:Number
    },
    status:{
     type:Number
    },
    profile_image:{
      type:String
    }
});


const Customer = mongoose.model('customer',customerSchema);

module.exports = Customer;
