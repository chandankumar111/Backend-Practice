const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express =require("express");
const app = express();
const path = require("path");
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

let port = 8080;

app.listen(port,()=>{
  console.log(`App is Listening...on port : ${port}`);
});

app.get("/",(req,res)=>{
  let q = `SELECT count(*) FROM user`;
  try{
    connection.query(q, (err,result)=>{
      if(err) throw err;
      let count = (result[0]["count(*)"]);
      res.render("home.ejs", {count});
      // console.log(result[1]);
      // console.log(result.length);
    })
  }catch(err){
    console.log(err);
    res.send("Something Went Wrong");
  };
})

app.get("/user",(req,res)=>{
  let q = `SELECT * FROM user`;
  try{
    connection.query(q, (err,users)=>{
      if(err) throw err;
      // console.log(users);
      res.render("showusers.ejs",{users});
      // console.log(result[1]);
      // console.log(result.length);
    })
  }catch(err){
    console.log(err);
    res.send("Something Went Wrong");
  };
})

//Edit Route
app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try{
    connection.query(q, (err,result)=>{
      if(err) throw err;
      // console.log(users);
      let user = result[0];
      res.render("edituser.ejs",{user});
      // console.log(result[1]);
      // console.log(result.length);
    })
  }catch(err){
    console.log(err);
    res.send("Something Went Wrong");
  };
});

app.patch("/user/:id",(req,res)=>{
  let {id} = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try{
    connection.query(q, (err,result)=>{
      if(err) throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("Wrong Password");
      } else {
          let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
          connection.query(q2, (err,result)=>{
          if(err) throw err;
          res.redirect("/user");
    })
      }
    });
  }catch(err){
    console.log(err);
    res.send("Something Went Wrong");
  };
})

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'instagram',
    password: 'Chandan@#45'
  });
// let q = "SHOW TABLES";
//Inserting one user at a time
// let q = "INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)";
// let user = ["123","123_newuser","abc@gmail.com","abc"];

// inserting multiple user data at a time
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [
//   ["1232","123_newuserb","abcb@gmail.com","abcb"],
//   ["1233","123_newuserc","abcc@gmail.com","abcc"],
// ];

//inserting data in bulk using flaker
let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    // faker.image.avatar(),
    faker.internet.password(),
    // faker.date.birthdate(),
    // faker.date.past(),
  ];
};
// let data = [];
// for(let i = 0;i<100;i++){
//   // console.log(createRandomUser());
//   data.push(createRandomUser());
// }

  // try{
  //   connection.query(q,[data], (err,result)=>{
  //     if(err) throw err;
  //     console.log(result);
  //     // console.log(result[1]);
  //     // console.log(result.length);
  //   })
  // }catch(err){
  //   console.log(err);
  // }
  

  // connection.end();
  



  // console.log(createRandomUser());