const express = require("express");  
const app = express();  
const userMOdel=require("./models/user");
const dbConnection=require("./confiq/db");

const morgan=require("morgan");
app.use(morgan('dev'));
app.set("view engine","ejs")
app.use(express.static("public"));  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/", (req, res) => {
    res.render("index");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register",async (req, res) => {
const {username,email,password}=req.body;
const newUser= await userMOdel.create({
    username:username,
    email:email,
    password:password
}) 
res.send(newUser);
});

// to see list of user regitered
app.get("/users",async (req,res)=>{
    const users=await userMOdel.find();
    res.send(users);
}   )           


app.post("/get-form-data",(req,res)=>{
    console.log(req.body);

    res.send("Form data received");
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

