const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const port = 8080;

const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }else{
    throw new ExpressError(400,"Access Denied");
    }
};

// app.use((req,res)=>{
//     res.status(404).send("Page Not Found");
// })

app.get("/app",checkToken,(req,res)=>{
    res.send("Welcome to the World Heritage Site Bodhgaya");
});

app.get("/err",(req,res)=>{
    anc = nsfh;
});

app.use((err,req,res, next)=>{
    // console.log("------Error-------");
    let {status,message} = err;
    res.status(status=500).send(message="Some Error Occured!");
    next(err);
});

app.get("/admin",(req,res)=>{
    throw new ExpressError(400,"Access to admin is Forbidden!");
});

// app.use((err,req,res, next)=>{
//     console.log("------Error2-------");
//     next(err);
// });
// app.use(()=>{
//     console.log("Hi, I'm a Middleware");
// });

// app.use("/",(req,res)=>{
//     let {query} = req.query;
//     console.log(query);
//     console.log("Middleware");
//     res.send("I'm Middleware");
// });
// app.use((req,res,next)=>{
//     console.log(req);
//     console.log("Next Middleware Calling");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log('Time : ',new Date(Date.now()).toString());
//     console.log(req.method, req.path, req.hostname, req.statusCode);
//     next();
// })

// app.use("/middleware",(req,res,next)=>{
//     console.log("Hi This is Path defined MiddleWare");
//     res.send("Path Defined MiddleWare");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("This is not Path Defined Middleware");
//     res.send("This is not Path Defined Middleware");
//     next();
// });

app.get("/get",(req,res)=>{
    res.send("App is Working Well");
});

app.get("/", (req,res)=>{
    res.send("This is Home Page");
});

app.get("/random",(req,res)=>{
    console.log("Get Request");
    res.send("Random Page");
});



app.listen(port,()=>{
    console.log(`App is listening on port : ${port}`);
});