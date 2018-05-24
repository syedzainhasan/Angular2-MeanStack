const  Agent = require('../models/agent');
    module.exports =(router) =>
    {
        router.post('/register-agent',(req,res)=>
    {                                    
                                        let agent = new Agent({

                                            Firstname : req.body.Firstname,
                                            Lastname : req.body.Lastname,
                                            Address : req.body.Address,
                                            EmailID : req.body.EmailID,
                                            Phone : req.body.Phone,
                                           Company : req.body.Company,
                                           
                                        });

                                       agent.save ((err) =>
                                        {
                                                if(err)
                                                {
                                                    res.json({success:false,message:'Could not register agent: ',err});
                                                }
                                                else{
                                                    res.json({success:true,message:'agent saved'});
                                                }
                                        });
                                    
                                    
///////////////////////////////////////////////////////////////////////////////////////////////////////        
    });


    
router.get('/get-agent',function(req,res){

    Agent.find({} ,function(err,data)
    {
        res.json(data);
    }
    
    
    );
    });

  ///////////////////////////////////////////////////////////////////////////////////////
  



  router.put('/update-agent/:Firstname',function(req,res)
  {                                    
      
      
      Agent.findOneAndUpdate(req.body.Firstname,{ 
        $set :  {
  
            Firstname : req.body.Firstname,
            Lastname : req.body.Lastname,
            Address : req.body.Address,
            EmailID : req.body.EmailID,
            Phone : req.body.Phone,
           Company : req.body.Company,

      }
  
  
      },
      {
      new: true
      },
  
  
      function(err,updatedsupplier)
      {
          if(err){
              res.send("Error updating supplier");
          }
          else{
              res.json(updatedsupplier);  
          }
      }
  
  );
  
  });
  


  /////////////////////////////////////////////////////////////////////////////////////
  
        return router;
    }













