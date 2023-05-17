require("dotenv").config();
const express = require("express");
const app=express();
const cors=require("cors");
require("./db/connection");
const router = require("./Routes/router");
const PORT=process.env.PORT;



app.use(express.json());//middleware
app.use(cors());
app.use(router);






app.listen(PORT,()=>{
    console.log('Server is running on Port No' ,PORT);
})
