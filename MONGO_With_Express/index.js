const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const app = express();

const port = 8080;

main()
.then( () => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));


app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
})

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/chats",(req,res)=>{
    let {from,to,msg} = req.body;
    let newChat = new Chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date(),
    });
    // console.log(newChat);
    newChat.save().then((result)=>{
        console.log("Chat was Saved");
    }).catch((err)=>{
        console.log("Some Error While Shaving Data..");
    })
    res.redirect("/chats");
});

//Edit Route
app.get("/chats/:id/edit", async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

//Update Route
app.put("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    let {msg: newMessage} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id,{msg:newMessage},{runValidators:true, new:true});
    console.log(updatedChat);
    res.redirect("/chats");
});

//Destroy Route
app.delete("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect("/chats");
});

app.get("/",(req,res)=>{
    res.send("Root is Working");
});

app.listen(port,()=>{
    console.log(`App is Listening on Port : ${port}`);
});