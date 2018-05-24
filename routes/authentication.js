   
   
   
   
   




   
   
   
   
   /////////////////////////////////////////////SUPPLIEER////////////////////////////////////////////////
    const  Supplier = require('../models/supplier');
    module.exports =(router) =>
    {



        router.post('/register-supplier',(req,res)=>
    {

        if(!req.body.Firstname)
        {
            res.json({success:false,message:'You must provide Firstname'})

        }
        else{
            if(!req.body.Lastname)
            {
                res.json({success:false,message:'You must provide Lastname'})
    
            }
            else{
                if(!req.body.Address)
                {
                    res.json({success:false,message:'You must provide Address'})
        
                }
                   
                        else{
                            if(!req.body.Phone)
                            {
                                res.json({success:false,message:'You must provide Contact'})
                    
                            }
                            else{
                                if(!req.body.CompanyName)
                                {
                                    res.json({success:false,message:'You must provide Company Name'})
                        
                                }

                                    else
                                    {
                                        let supplier = new Supplier({

                                            Firstname : req.body.Firstname,
                                            Lastname : req.body.Lastname,
                                            Address : req.body.Address,
                                            EmailID : req.body.EmailID,
                                            Phone : req.body.Phone,
                                           CompanyName : req.body.CompanyName,
                                           CompanyEmail : req.body.CompanyEmail
                                        });

                                       supplier.save ((err) =>
                                        {
                                                if(err)
                                                {
                                                    res.json({success:false,message:'Could not register supplier: ',err});
                                                }
                                                else{
                                                    res.json({success:true,message:'supplier saved'});
                                                }
                                        });
                                    }
                                        
                                }
                            }
                        }
                    }
                         
///////////////////////////////////////////////////////////////////////////////////////////////////////























/////////////////////////////////////////////////////////////////////////////////////////////////////////









        
    });





    router.put('/update-supplier/:Firstname',function(req,res)
{                                    
    
    
    Supplier.findOneAndUpdate(req.body.Firstname,{ 
      $set :  {

        Firstname : req.body.Firstname,
        Lastname : req.body.Lastname,
        Address : req.body.Address,
        EmailID : req.body.EmailID,
        Phone : req.body.Phone,
       CompanyName : req.body.CompanyName,
       CompanyEmail : req.body.CompanyEmail
       
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




router.get('/get-supplier',function(req,res){

Supplier.find({} ,function(err,data)
{
    res.json(data);
}


);
});

        return router;
    }






////////////////////////////////////////////////////





