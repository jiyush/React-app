import Task from '../models/tasks.model';

module.exports = {

    getTask: async () => {

    },

    create: (req, res, next) => { 
      
      try{ 
            
        const task = new Task({
                name:req.body.email,
                start_date:req.body.name,
                end_date:req.body.status,
                created_by:1,
                updated_by:1,
                created_at: 'a',
                updated_at: 'b'
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

    updateTask: async () => {

    },

    deleteTask: async () => {

    }

}


