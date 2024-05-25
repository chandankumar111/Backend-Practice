const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
uuidv4();
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

const port = 8080;

app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}`);
});

let posts = [
    {
        id:uuidv4(),
        username:"Chandan",
        content:"I Love You Chandani"
    },
    {
        id:uuidv4(),
        username:"Chandani",
        content:"I Love You Chandan"
    },
    {
        id:uuidv4(),
        username:"Santosh",
        content:"I Love You Santoshi"
    },
    {
        id:uuidv4(),
        username:"Santoshi",
        content:"I Love You Santosh"
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    console.log(req.body);
    posts.push({id,username,content});
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id ===p.id);
    console.log(post);
    res.render("show.ejs",{post});
})

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    console.log(id);
    let newContent = req.body.content;
    let post = posts.find((p)=> id ===p.id);
    post.content = newContent;
    console.log(post);
    res.send("Patch request is working");
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id ===p.id);
    console.log(post);
    res.render("edit.ejs",{post});
})

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !==p.id);
    res.redirect("/posts");
})

app.get("/",(req,res)=>{
    res.send("Hello Chandan Welcome Back!");
})