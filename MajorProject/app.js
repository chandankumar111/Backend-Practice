const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");

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

const validateListing = (req,res,next) => {
  let {error} = listingSchema.validate(req.body);
  if(error){
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400,errMsg);
  } else{
    next();
  }
}

// root route
app.get("/",(req,res)=>{
  res.send("Wroking Well");
});

//index route
app.get("/listings",wrapAsync(async (req,res)=>{
  const allListings = await Listing.find({});
  res.render("index.ejs",{allListings});
}));

//new route
app.get("/listings/new",(req,res)=>{
  res.render("new.ejs");
});

app.post("/listings", validateListing,wrapAsync(async (req,res,next)=>{
 
  // if(!req.body.listing){
  //   throw new ExpressError(400,"Send Valid data for Listing");
  // }
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
  // if(!newListing.title){
  //   throw new ExpressError(400,"Title is Missing");
  // }
  // if(!newListing.discription){
  //   throw new ExpressError(400,"Discription is Missing");
  // }
  // if(!newListing.price){
  //   throw new ExpressError(400,"Price is Missing");
  // }
  // if(!newListing.location){
  //   throw new ExpressError(400,"Location is Missing");
  // }
  // if(!newListing.country){
  //   throw new ExpressError(400,"Country is Missing");
  // }
 
  // console.log(newListing);
  
}));

//edit route
app.get("/listings/:id/edit",wrapAsync(async (req,res)=>{
  let {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("edit.ejs",{listing});
}));

app.put("/listings/:id",validateListing,wrapAsync(async (req,res)=>{
  let {id} = req.params;
  await Listing.findByIdAndUpdate(id,{...req.body.listing});
  res.redirect(`/listings/${id}`);
}));

app.delete("/listings/:id",wrapAsync(async (req,res)=>{
  let {id} = req.params;
  let deleteListing = await Listing.findByIdAndDelete(id);
  console.log(deleteListing);
  res.redirect("/listings");
}));

//Show route
app.get("/listings/:id",wrapAsync(async (req,res)=>{
  let {id} = req.params;
  const listing = await Listing.findById(id); 
  res.render("show.ejs",{listing});
}));

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