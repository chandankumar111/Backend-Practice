const express = require("express");
const path = require("path");
const app = express();

let port = 8080;
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.set("views", path.join(__dirname, "/views"));

app.listen(port,()=>{
    console.log(`App is LIstening on port ${port}`);
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/rolldice",(req,res)=>{
    let value = Math.floor(Math.random()*6) + 1 ;
    // res.render("rolldice.ejs",{num:value});
    res.render("rolldice",{value});
});

app.get("/home",(req,res)=>{
    res.send("home");
});

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const InstaData = require("./data.json");
    const data = InstaData[username];
    console.log(data);
    if(data){
    res.render("instagram.ejs",{data});
    } else{
        res.render("error.ejs",{username});
    }
})