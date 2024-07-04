const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage });


router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,validateListing, upload.single("listing[image]"),wrapAsync(listingController.createListing));


router.get("/new",isLoggedIn,listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,validateListing,isOwner,wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

//Index Route
// router.get("/",wrapAsync(listingController.index));
  
  //New Route
  

  //Show route

  //Create Route
  // router.post("/", isLoggedIn,validateListing,wrapAsync(listingController.createListing));
  
  //Edit Route
  router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));
  
  //Update Route
  
  //Destroy Router
  

  module.exports = router;