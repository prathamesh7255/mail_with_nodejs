const express=require('express');
const body_parser=require('body-parser')
const cors=require('cors')
const app=express();

const router=require('./routes');

app.use(cors());
app.use(body_parser.json());
app.use(
    body_parser.urlencoded({
        limit:'50mb',
        extended:false,
        parameterLimit:50000
    })
);

app.use('/api',router);
const port=process.env.port || 5000;

app.listen(port,()=>{
    console.log(`Server is listening to port ${port}...`)
});