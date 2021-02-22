const patch = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
   res.sendFile(patch.join(__dirname, '../', 'views', 'shop.html' ));
    
});

   module.exports=router
   