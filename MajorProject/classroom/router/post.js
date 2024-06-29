const express = require("express");
const router = express.Router();

//Post
router.get("/",(req,res)=>{
    res.send("This is Post Route");
})

router.get("/:id",(req,res)=>{
    res.send("This is Post Id");
})

router.post("/",(req,res)=>{
    res.send("Post for Post");
})

router.delete("/:id",(req,res)=>{
    res.send("Delete for Post id");
})

module.exports = router;
