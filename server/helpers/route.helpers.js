const Joi = require('joi');

module.exports = {
    validateBody: (schema) => { 
        
        return (req, res, next) => { 

           
            const result = Joi.validate(req.body, schema);
            if(result.error) {
                return res.status(400).json(result.error);
            }
            
            if(!req.value) { req.value ={}; }
            req.value['body'] = result.value;
            next();
        }
    },
    
    schemas:{
        authSchema: Joi.object().keys({
             email: Joi.string().email().required(),
             password: Joi.string().required()
        }),
        customerSchema: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            status: Joi.string().required(),
            createdBy: Joi.string().required(),
            updatedBy: Joi.string().required()
       }),
       taskSchema: Joi.object().keys({
            name: Joi.string().required(),
            assing_to: Joi.string().required(),
            start_date: Joi.date().required(),
            end_date: Joi.date().required(),
            created_by: Joi.string().required(),
            updated_by: Joi.string().required()
        })
    }
}