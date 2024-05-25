const express = require("express");
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

const port = 8080;

app.listen(port,()=>{
    console.log(`Server is Running on Port : ${port}`);
})

app.get("/request",(req,res)=>{
    let {username,password} = req.query;
    res.send(`Standard GET response. Welcome ${username}`);
})

app.post("/request",(req,res)=>{
    const PostData = req.body;
    console.log(PostData);
    res.send("Standard POST response");
})