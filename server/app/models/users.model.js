import mongoose, { Mongoose, mongo } from 'mongoose';
import bcrypt from 'bcryptjs';
import 'babel-polyfill'

var userSchema = new mongoose.Schema({ 
    email: {
        type: String,
        required:true,
        unique:true,
        lowercase: true
    }, 
    password: {
        type: String,
        required:true
    }
});

userSchema.pre("save", async function(next){ 
    
    try{ 

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(this.password,salt);
        console.log(passwordHash)
        this.password = passwordHash;

        next();
    }catch(error){
        next(error);
    }

})

userSchema.methods.isValidPassword = async function(newPassword){
    try{
       return await bcrypt.compare(newPassword, this.password);
    }catch(error){
        new Error(error);
    }

}

const User = mongoose.model('user',userSchema);

module.exports = User;
