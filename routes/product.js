const  Product = require('../models/product');
    module.exports =(router) =>
    {
        router.post('/register-product',(req,res)=>
    {                                    
                                        let product = new Product({

                                  
                                              
    Name:req.body.Name,
    PacksPerBox:req.body.PacksPerBox,
    Barcode  : req.body.Barcode,
    DrugGroup:req.body.DrugGroup,
    Formulae:req.body.Formulae,
    UnitsinPack :req.body.UnitsinPack,
    Packing:req.body.Packing,
    MinQuantity:req.body.MinQuantity,
    BoxPerCarton:req.body.BoxPerCarton,
    RackNo : req.body.RackNo,
                                           
                                        });

                                       product.save ((err) =>
                                        {
                                                if(err)
                                                {
                                                    res.json({success:false,message:'Could not register product : ',err});
                                                }
                                                else{
                                                    res.json({success:true,message:'product saved'});
                                                }
                                        });
                                    
                                    
///////////////////////////////////////////////////////////////////////////////////////////////////////        
    });


    
router.get('/get-product',function(req,res){

    Product.find({} ,function(err,data)
    {
        res.json(data);
    }
    
    
    );
    });

  ///////////////////////////////////////////////////////////////////////////////////////
  



  router.put('/update-product/:Name',function(req,res)
  {                                    
      
      
      Product.findOneAndUpdate(req.body.Name,{ 
        $set :  {
  
            Name:req.body.Name,
            PacksPerBox:req.body.PacksPerBox,
            Barcode  : req.body.Barcode,
            DrugGroup:req.body.DrugGroup,
            Formulae:req.body.Formulae,
            UnitsinPack :req.body.UnitsinPack,
            Packing:req.body.Packing,
            MinQuantity:req.body.MinQuantity,
            BoxPerCarton:req.body.BoxPerCarton,
            RackNo : req.body.RackNo

      }
  
  
      },
      {
      new: true
      },
  
  
      function(err,updatedproduct)
      {
          if(err){
              res.send("Error updating product");
          }
          else{
              res.json(updatedproduct);  
          }
      }
  
  );
  
  });
  


  /////////////////////////////////////////////////////////////////////////////////////
  
        return router;
    }













