const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const Listing = require("../models/listing.js");

const validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    if(error){
      let errMsg = error.details.map((el) => el.message).join(",");
      throw new ExpressError(400,errMsg);
    } else{
      next();
    }
  };
  
//index route
router.get("/",wrapAsync(async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("index.ejs",{allListings});
  }));
  
  //new route
  router.get("/new",(req,res)=>{
    res.render("new.ejs");
  });
  
  router.post("/", validateListing,wrapAsync(async (req,res,next)=>{
   
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
  router.get("/:id/edit",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("edit.ejs",{listing});
  }));
  
  router.put("/:id",validateListing,wrapAsync(async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/${id}`);
  }));
  
  router.delete("/:id",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    res.redirect("/listings");
  }));
  
  module.exports = router;