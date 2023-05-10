const express=require('express');
const router=express.Router();
const send_mail=require('./send_mail');

router.post('/send', async(req,res)=>{
    try{
        const result =await send_mail(req.body);

    res.json({
        status:true,
        payload:result
    });
    }
    catch(err){
        res.json({
            status:false,
            payload:`Something went wrong. Error: ${err}`
        });
    }
});

module.exports=router;