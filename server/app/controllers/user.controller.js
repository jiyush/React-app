import JWT from 'jsonwebtoken';
import { JWT_SECRET } from '../../config';
import bcrypt from "bcryptjs";
import User from '../models/users.model';

/**
 * Signing token for jwt 
 * @param {*} user 
 * @return Sign jWT Token
 */

function signTOken(user) { 
    
    return JWT.sign({
        iss: 'nodeapi',
        sub:  user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() +1)   
    },JWT_SECRET);

}

/**
 * Create Async function for Bcrypt password
 * Its Taking 3-4  m . Secs to create
 * So need to create in async
 * @param {*} password 
 */

async function passwordHash(password){
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt);
        return hash;

    }catch(error){
      throw new Error(error);
    }
}

module.exports = { 

    signUp: async (req, res, next) => {   
        
        try{ 

            const { email, password } = req.value.body;
            const foundUser = await User.findOne({email});
           
            if(foundUser) return res.status(403).json({error:"email already exist"});
            
            var user = new User({ email, password });

            await user.save();
           
            const token = signTOken(user);
            res.status(200).json({status:'1', message:"successfully save", token:token });

        }catch(error){
            next(error)
        }
        
    },

    /** Get User value based on Id.
     * If Id is note given get all users record. 
     * @param (Id)
     */

    getAllUser : async (req, res, next) => {
       // User.findAll().then(users => res.json(users))
        let query;
        if(req.params.userId) {
                query = User.findAll({ where: { id: req.params.userId } 
            })
        } else {
            query = User.find({})
        }
        return query.then(users => res.json(users))
    },

    /**
     * Sign in User
     * @param {email , password}
     * @return {Authenticated token}
     */

    signIn: async (req, res , next) => { 
        const token = signTOken(req.user);
        res.status(200).json({token});
    },
    
    /**
     * Just for test
     * Testing Associations 
     */

    secret: async (req, res , next) => { 
        
        //const isSave =  User.saveBlogs(req);
        res.json({resource:'setes'});
    }
}