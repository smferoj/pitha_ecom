const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({limit: "5mb"}));

const PORT = process.env.PORT || 8080

// mongodb connection

console.log(process.env.MONGODB_URL);
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("Connected to database")).catch((err)=>console.log(err))

// schema 
const userSchema  = mongoose.Schema({
    firstName : String,
    lastName:String,
    email:{
        type: String,
        unique:true
    },
    password: String,
    confirmPassword: String,
    image: String
})

 const userModel = mongoose.model("user", userSchema)

//  signup api
app.get("/", (req, res)=>{
    res.send("sever is running")
})
app.post("/signup", async (req, res) => {
    try {
        console.log(req.body);
        const { email } = req.body;
        const result = await userModel.findOne({ email: email });
        console.log(result);
        if (result) {
            res.send({ message: "Email id is already registered", alert:false });
        } else {
            const data = userModel(req.body);
            const save = await data.save();
            res.send({ message: "Successfully sign up", alert:true });
        }
    } catch (err) {
        console.log(err);   
    }
});

// login api
app.post("/login", async(req, res)=>{
    console.log(req.body)
    try{
        const {email} = req.body
       const result =  await userModel.findOne({email: email});
       if(result){
        // console.log(result)
        const dataSend = {
            _id: result._id,
            firstName: result.firstName,
            lastName: result.lastName,
            email: result.email,
            image: result.image,
        }
        console.log(dataSend); 
        res.send({ message: "Login is successful", alert:true, data: dataSend});
       } else {
        res.send({ message: "Login Failed, Please signup", alert:false });
    }
    }catch(err){
        console.log(err); 
    }
})


app.listen(PORT, ()=> console.log(`Server is running at port:${PORT}`))