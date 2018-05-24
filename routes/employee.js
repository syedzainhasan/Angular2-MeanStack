const  Employee = require('../models/employee');
    module.exports =(router) =>
    {
        router.post('/register-employee',(req,res)=>
    {                                    
                                        let employee = new Employee({

                                            Firstname : req.body.Firstname,
                                            Lastname : req.body.Lastname,
                                            Address : req.body.Address,
                                            EmailID : req.body.EmailID,
                                            Phone : req.body.Phone,
                                          
                                           CNIC: req.body.CNIC,
                                             Salary: req.body.Salary,
                                           JoiningDate: req.body.JoiningDate,
                                             Designation: req.body.Designation,
                                            Password: req.body.Password,
                                            Gender: req.body.Gender,
                                           
                                        });

                                       employee.save ((err) =>
                                        {
                                                if(err)
                                                {
                                                    res.json({success:false,message:'Could not register employee: ',err});
                                                }
                                                else{
                                                    res.json({success:true,message:'employee saved'});
                                                }
                                        });
                                    
                                    
///////////////////////////////////////////////////////////////////////////////////////////////////////        
    });


    
router.get('/get-employee',function(req,res){

    Employee.find({} ,function(err,data)
    {
        res.json(data);
    }
    
    
    );
    });

  ///////////////////////////////////////////////////////////////////////////////////////
  



  router.put('/update-employee/:Firstname',function(req,res)
  {                                    
      
      
      Employee.findOneAndUpdate(req.body.Firstname,{ 
        $set :  {
  
            Firstname : req.body.Firstname,
            Lastname : req.body.Lastname,
            Address : req.body.Address,
            EmailID : req.body.EmailID,
            Phone : req.body.Phone,
            CNIC: req.body.CNIC,
                                             Salary: req.body.Salary,
                                           JoiningDate: req.body.JoiningDate,
                                             Designation: req.body.Designation,
                                            Password: req.body.Password,
                                            Gender: req.body.Gender,

      }
  
  
      },
      {
      new: true
      },
  
  
      function(err,updatedemployee)
      {
          if(err){
              res.send("Error updating employee");
          }
          else{
              res.json(updatedemployee);  
          }
      }
  
  );
  
  });
  


  /////////////////////////////////////////////////////////////////////////////////////
  
        return router;
    }













