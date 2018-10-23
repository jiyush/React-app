import  Customer  from '../models/customer.model';
import Task from '../models/tasks.model';
module.exports = {

    /**
     * Get all Customer Details
     * @param 
     * @return 
     */

    getCustomer: async (req, res, next) => { 

        let query;
        
        if(req.params.customerId) {
                query =  Customer.find({_id: req.params.customerId});
        } else {
                query =  Customer.find({});
        }
        return query.then(customer => res.json(customer))

    }, 

    /**
     * Create Customer if not exist
     * @param request body
     * @return Saved Row
     */

    createCustomer: async (req, res , next) => {
      
     try{ 
            
        const user = new Customer({
                email:req.body.email,
                name:req.body.name,
                status:req.body.status,
                createdBy:1,
                updatedBy:1
          });
          
          user.save((err, doc) => { 
           
            if (err) { return console.error(err) }  

            return res.status(200).json({ 
                message:'Successfully Created'
            });
              
          });


        }catch(error){
            next(error);
        }

    },

    /**
     * Update row For given Id.
     * @param request body Update
     * @return Updated row. 
     */

    updateCustomer:(req, res ,next) => {

       
        try{

            Customer.findOne({ _id: req.params.customerId }, function (err, doc){ 

            
                doc.name = (req.body.name) ? req.body.name: '',
                doc.email = (req.body.email) ? req.body.email :'',
                doc.status = (req.body.status) ? req.body.status : '',
                doc.updatedBy = (req.body.updatedBy) ? req.body.updatedBy : '0',
                doc.save();
            });
            
            res.status(200).json({message:'Updated successfully'});

        }catch(error){
            next(error);
        }

    },

    /**
     * Delete row for given Id
     * @param customerId
     * @return deleted 
     */

    deleteCustomer :(req, res, next) => { 


        Customer.findByIdAndRemove(req.params.customerId, (err, customer) => {
            // As always, handle any potential errors:
            if (err) return res.status(500).send(err);
            // We'll create a simple object to send back with a message and the id of the document that was removed
            // You can really do this however you want, though.
            const response = {
                message: "Customer successfully deleted",
                id: customer._id
            };
            return res.status(200).send(response);
        });
  
    },

    /**
     * Status Update Id
     * @param customerId
     * @return Update 
     */

    updateStatus:(req, res, next) => {
        
     try{

        Customer.findByIdAndUpdate( 
            req.params.customerId,
            req.body,
            {new: true},
            // the callback function
            (err, customer) => {
            // Handle any possible database errors
                if (err) return res.status(500).send(err);
                return res.send(customer);
            }  
        )
        
        }catch(error){
            next(error);
        }      
     }
}

