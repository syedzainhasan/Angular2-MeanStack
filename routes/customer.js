const Customer = require('../models/customer');
    module.exports =(router) =>
    {
        router.post('/register-customer',(req,res)=>
    {                                    
                                        let customer = new Customer({

                                            Firstname : req.body.Firstname,
                                            Lastname : req.body.Lastname,
                                            Address : req.body.Address,
                                            EmailID : req.body.EmailID,
                                            Phone : req.body.Phone,
                                           DOB: req.body.DOB,
                                           HospitalName: req.body.HospitalName,
                                           Gender: req.body.Gender
                                           
                                        });

                                       customer.save ((err) =>
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


    
router.get('/get-customer',function(req,res){

    Customer.find({} ,function(err,data)
    {
        res.json(data);
    }
    
    
    );
    });

  ///////////////////////////////////////////////////////////////////////////////////////
  



  router.put('/update-customer/:Firstname',function(req,res)
  {                                    
      
      
      Customer.findOneAndUpdate(req.body.Firstname,{ 
        $set :  {
  
            Firstname : req.body.Firstname,
            Lastname : req.body.Lastname,
            Address : req.body.Address,
            EmailID : req.body.EmailID,
            Phone : req.body.Phone,
            DOB: req.body.DOB,
            HospitalName: req.body.HospitalName,
            Gender: req.body.Gender
           

      }
  
  
      },
      {
      new: true
      },
  
  
      function(err,updatedcustomer)
      {
          if(err){
              res.send("Error updating customer");
          }
          else{
              res.json(updatedcustomer);  
          }
      }
  
  );
  
  });
  


  /////////////////////////////////////////////////////////////////////////////////////
  
        return router;
    }













