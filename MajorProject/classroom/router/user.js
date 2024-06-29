const express = require("express");
const router = express.Router();

//Users
router.get("/",(req,res)=>{
    res.send("This is User Route");
})

router.get("/:id",(req,res)=>{
    res.send("This is Users Id");
})

router.post("/",(req,res)=>{
    res.send("Post for user");
})

router.delete("/:id",(req,res)=>{
    res.send("Delete for user id");
})

module.exports = router;