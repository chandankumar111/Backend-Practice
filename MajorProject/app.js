const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema,reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");
// const Listing = require("./models/listing.js");
const listings = require("./routes/listing.js")
const reviews = require("./routes/review.js");

const port = 8080;

main()
.then( () => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.set("views", path.join(__dirname,"views/listings"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);


app.use("/listings",listings);
app.use("/reviews",reviews);

// root route
app.get("/",(req,res)=>{
  res.send("Wroking Well");
});



app.all("*",(req,res,next)=>{
  next(new ExpressError(400,"Page Not Found!"));
});

app.use((err,req,res,next)=>{
  // res.send("Something Went Wrong!");
  let {status=500,message="Something Went Wrong!"} = err;
  res.status(status).render("error.ejs",{message});
  // res.status(status).send(message);
});


app.listen(port, ()=>{
    console.log(`App is listening on port : ${port}`);
})