const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`App is Listening on port ${port}`);
});

// app.use((req,res) => {
//     console.log("Request Recived");
//     res.send("I Love You Chandani");
//     //res.send("<h1>I Love You Chandani</h1>");
// });
app.get((req,res) => {
    console.log("Request Recived");
    //res.send("I Love You Chandani");
    res.send("<h1>I Love You Chandani</h1>");
});

// app.get(("/"), (req,res)=>{
//     res.send("<h1>Love Gupsup</h1>");
// });

// app.get(("/chandan"), (req,res)=>{
//     res.send("<h1>I Love You Chandani</h1>");
// });

// app.get(("/chandani"), (req,res)=>{
//     res.send("<h1>I Love You too Chandan</h1>");
// });

// app.get(("/:username/:id"),(req,res)=>{
//     let {username,id}=req.params;
//     // console.log(req.params);
//     res.send(`<h1>Welcome to the page of @${username}</h1>`);
// });

//parametres (params)
// app.get(("/:username/:id"),(req,res)=>{
//     let {username,id}=req.params;
//     let HTMLString = `<h1> Welcome to The Page of @${username} and id is ${id}`;
//     res.send(HTMLString);
// });

//Query Search
app.get(("/search"),(req,res)=>{
    console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send("<h1>Nothing Searched</h1>");
    }
    res.send(`<h1>The Search Reasult Query is : ${q}</h1>`);
})