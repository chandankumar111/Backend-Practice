const express = require("express");
const app = express();
const posts = require("./router/post.js");
const users = require("./router/user.js");
const cookieParser = require('cookie-parser');
app.use(cookieParser("secretcode"));
let port = 8080;

app.get("/", (req, res) => {
    res.send("This is Root Route");
});

app.get("/getsignedcookies",(req,res) => {
    res.cookie("made-in","India", {signed:true});
    res.send("Signed Cookie Sent");
});

app.get("/verify",(req,res) => {
    console.log(req.signedCookies);
    res.send("verified");
})

app.get("/cookiesparser",(req,res)=>{
    let {name = "Anonymous"} = req.cookies;
    res.send(`Hi, ${name}`);
})

app.get("/getcookies", (req, res) => {
    res.cookie("Chandan", "Chandani");
    res.cookie("Keys", "Values");
    res.cookie("name","Chandan");
    res.cookie("Name", "Chandani", { domain: "LoveYouChandan.com", path: "/Chandan", secure: true });
    res.cookie("MyName", "Chandan", { domain: "LoveYouChandani.com", path: "/Chandani", secure: true });
    res.cookie("RememberMe", "1", { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.send("Learn About Cookies");
})

app.use("/posts", posts);
app.use("/users", users);
app.listen(port, () => {
    console.log(`App is Listening on port ${port}`);
});