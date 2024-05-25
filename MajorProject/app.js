const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const ejsMate = require("ejs-mate");

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

// root route
app.get("/",(req,res)=>{
  res.send("Wroking Well");
});

//index route
app.get("/listings",async (req,res)=>{
  const allListings = await Listing.find({});
  res.render("index.ejs",{allListings});
});

//new route
app.get("/listings/new",(req,res)=>{
  res.render("new.ejs");
});

app.post("/listings",async (req,res)=>{
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
  // console.log(newListing);
});

//edit route
app.get("/listings/:id/edit",async (req,res)=>{
  let {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("edit.ejs",{listing});
});

app.put("/listings/:id",async (req,res)=>{
  let {id} = req.params;
  await Listing.findByIdAndUpdate(id,{...req.body.listing});
  res.redirect(`/listings/${id}`);
});

app.delete("/listings/:id",async (req,res)=>{
  let {id} = req.params;
  let deleteListing = await Listing.findByIdAndDelete(id);
  console.log(deleteListing);
  res.redirect("/listings");
})

//Show route
app.get("/listings/:id",async (req,res)=>{
  let {id} = req.params;
  const listing = await Listing.findById(id); 
  res.render("show.ejs",{listing});
});





app.listen(port, ()=>{
    console.log(`App is listening on port : ${port}`);
})