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


const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
        maxLength: 30,
    },
    author:{
        type: String,
    },
    price:{
        type: Number,
        min:[1,"Price is too low for sell"],
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    },
    genre:{
        type:[String],
    },
});

const Book = mongoose.model("Book",bookSchema);

// let book1 = new Book({
//     title:"Marvel Fantacy",
//     author: "Johan Darwin",
//     price:255,
//     category:"fiction",
//     genre:["Comics","superheroes","fiction"],
// });

Book.findByIdAndUpdate("664c6d01bbedabe5f5c0eca6",{price:560},{runValidators:true},{new:true}).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
})

// book1.save().then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// });
