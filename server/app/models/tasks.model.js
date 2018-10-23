import mongoose, { Mongoose, mongo } from 'mongoose';
import 'babel-polyfill'
let Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema({

    name: {
        type:String, 
        required:true   
    },
    start_date:{
        type:Date
    },
    end_date:{
        type:Date
    },
    created_by:{
        type:Number
    },
    updated_by:{
        type:Number
    },
    created_at:{
        type:Date
    },
    updated_at:{
        type:Date
    },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' }

})

const Task = mongoose.model('task',taskSchema);
module.exports = Task;