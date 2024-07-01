const express = require("express");
const app = express();
const posts = require("./router/post.js");
const users = require("./router/user.js");
const cookieParser = require('cookie-parser');
app.use(cookieParser("secretcode"));
const session = require('express-session')
const flash = require('connect-flash');
const path = require("path");
let sessionOption = ({
    secret:"mysecretsessioncode",
    resave:false,
    saveUninitialized:true
});
let port = 8080;

app.use(session(sessionOption));
app.use(flash());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use((req,res,next)=>{
    res.locals.sucess = req.flash("sucess");
    res.locals.error = req.flash("error");
    next();
})

app.get("/register",(req,res)=>{
    let {name="Anonymous"} = req.query;
    let myname = req.session.name = name;
    if(name === "Anonymous"){
        req.flash("error","user not registered");
    }else{
        req.flash("sucess","user registered successfully");
    }
    console.log(myname);
    res.redirect("/hello");
})

app.get("/hello",(req,res)=>{
    // res.send(`Hello, ${req.session.name}`);
    // console.log(req.flash("sucess"));
    res.render("page.ejs",{name: req.session.name});
})

// app.get("/session",(req,res)=>{
//     res.send("Session Injected Successfull");
// })

// app.get("/sessioncount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
//     res.send(`you a sent a request ${req.session.count} times`);
// })

// app.get("/", (req, res) => {
//     res.send("This is Root Route");
// });

// app.get("/getsignedcookies",(req,res) => {
//     res.cookie("made-in","India", {signed:true});
//     res.send("Signed Cookie Sent");
// });

// app.get("/verify",(req,res) => {
//     console.log(req.signedCookies);
//     res.send("verified");
// })

// app.get("/cookiesparser",(req,res)=>{
//     let {name = "Anonymous"} = req.cookies;
//     res.send(`Hi, ${name}`);
// })

// app.get("/getcookies", (req, res) => {
//     res.cookie("Chandan", "Chandani");
//     res.cookie("Keys", "Values");
//     res.cookie("name","Chandan");
//     res.cookie("Name", "Chandani", { domain: "LoveYouChandan.com", path: "/Chandan", secure: true });
//     res.cookie("MyName", "Chandan", { domain: "LoveYouChandani.com", path: "/Chandani", secure: true });
//     res.cookie("RememberMe", "1", { expires: new Date(Date.now() + 900000), httpOnly: true });
//     res.send("Learn About Cookies");
// })

app.use("/posts", posts);
app.use("/users", users);
app.listen(port, () => {
    console.log(`App is Listening on port ${port}`);
});