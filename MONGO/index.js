const mongoose = require('mongoose');

main()
.then( () => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    age:Number,
});

const User = mongoose.model("User",userSchema);
// const Employee = mongoose.model("Employee", userSchema);

User.find()
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
});

User.find({age: {$gt: 18}})
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
});

User.find({age: {$gt: 18}})
.then((result)=>{
    console.log(result[0].name);
})
.catch((err)=>{
    console.log(err);
});

User.findById("664b5741bb22557896551f40")
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
});

User.findOneAndUpdate({name:"Roushan"},{age:22},{new:true}).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});

//InsertMany
// User.insertMany([
//     {name:"Bhanu",email:"bhanu@gmail.com",age:20},
//     {name:"Jayant",email:"jayant@gmail.com",age:25},
//     {name:"Amit",email:"amit@gmail.com",age:30},
// ]).then((result)=>{
//     console.log(result);
// });

// const user1 = new User({
//     name: "Chandan",
//     email: "chandan@yahoo.com",
//     age:18,
// });

// user1.save();

// const user2 = User({
//     name: "Chandani",
//     email: "chandani@yahoo.com",
//     age: 18,
// });

// user2.save()
// .then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// });