const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('<h1>Hello expresja</h1>');
       next();
   });

   module.exports=router
   