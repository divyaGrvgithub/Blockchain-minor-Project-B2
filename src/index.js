const express = require("express");
const route = ("./route/route.js");
const mongoose = require('mongoose');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

mongoose.set('strictQuery',true)
mongoose.connect("mongodb+srv://divyamala_:Dt25042000knp@divyamala.0cofsch.mongodb.net/divyaGrv",{
    UseNewUrlParser:true
})

.then(()=>console.log('Mongodb is connected'))
.catch((err)=>console.log(err))

// app.use("/",route);

app.listen(process.env.port||3000,function(){
    console.log('Express app running on port'+(process.env.port||3000))
});