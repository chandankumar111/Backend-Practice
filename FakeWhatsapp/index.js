const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const app = express();
const ExpressError = require("./ExpressError.js");

const port = 8080;

main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    }
}
app.get("/chats", asyncWrap(async (req, res, next) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", { chats });

}));

app.get("/chats/new", (req, res) => {
    // throw new ExpressError(400,"Some Error Occurs!");
    res.render("new.ejs");
});

app.post("/chats", asyncWrap(async (req, res, next) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date(),
    });
    // console.log(newChat);
    await newChat.save();
    res.redirect("/chats");

}));

//Show route
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        next(new ExpressError(400, "Chat Not Found!"));
    }
    res.render("edit.ejs", { chat });
}));

//Edit Route
app.get("/chats/:id/edit", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
}));

//Update Route
app.put("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let { msg: newMessage } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMessage }, { runValidators: true, new: true });
    console.log(updatedChat);
    res.redirect("/chats");
}));

//Destroy Route
app.delete("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect("/chats");
}));

const handleValidationError = (err) => {
    console.log("This was a Validation Error. Please follow rules");
    console.dir(err.message);
    return err;
};


app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === "ValidationError") {
        err = handleValidationError(err);
    }
    next(err);
});



app.use((err, req, res, next) => {
    let { status = 500, message = "Some Error Occured!" } = err;
    res.status(status).send(message);
})

app.get("/", (req, res) => {
    res.send("Root is Working");
});

app.listen(port, () => {
    console.log(`App is Listening on Port : ${port}`);
});