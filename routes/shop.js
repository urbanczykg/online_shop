const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile('/views/shop.html')
       next();
   });

   module.exports=router
   