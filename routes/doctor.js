const  Doctor = require('../models/doctor');
module.exports =(router) =>
{
    router.post('/register-doctor',(req,res)=>
{                                    
                                    let doctor = new Doctor({

                                        Firstname : req.body.Firstname,
                                        Lastname : req.body.Lastname,
                                        Address : req.body.Address,
                                        EmailID : req.body.EmailID,
                                        Phone : req.body.Phone,
                                       PMDC : req.body.PMDC,
                                       HospitalName:req.body.HospitalName
                                       
                                    });

                                   doctor.save ((err) =>
                                    {
                                            if(err)
                                            {
                                                res.json({success:false,message:'Could not register doctor: ',err});
                                            }
                                            else{
                                                res.json({success:true,message:'doctor saved'});
                                            }
                                    });
                                
                                
///////////////////////////////////////////////////////////////////////////////////////////////////////        
});



router.get('/get-doctor',function(req,res){

Doctor.find({} ,function(err,data)
{
    res.json(data);
}


);
});

///////////////////////////////////////////////////////////////////////////////////////




router.put('/update-doctor/:Firstname',function(req,res)
{                                    
  
  
Doctor.findOneAndUpdate(req.body.Firstname,{ 
    $set :  {

        Firstname : req.body.Firstname,
        Lastname : req.body.Lastname,
        Address : req.body.Address,
        EmailID : req.body.EmailID,
        Phone : req.body.Phone,
        PMDC : req.body.PMDC,
        HospitalName:req.body.HospitalName

  }


  },
  {
  new: true
  },


  function(err,updateddoctor)
  {
      if(err){
          res.send("Error updating doctor");
      }
      else{
          res.json(updateddoctor);  
      }
  }

);

});



/////////////////////////////////////////////////////////////////////////////////////

    return router;
}













