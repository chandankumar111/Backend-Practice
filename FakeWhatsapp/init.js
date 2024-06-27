const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allchats = [{
    from: "Chandani",
    to: "Chandan",
    msg: "I Miss You Chandan",
    created_at: new Date(),
},
{
    from: "Chandan",
    to: "Chandani",
    msg: "I Miss You too Chandani",
    created_at: new Date(),
},
{
    from: "Roushan",
    to: "Tara",
    msg: "I Miss You Tara",
    created_at: new Date(),
},
{
    from: "Tara",
    to: "Roushan",
    msg: "I Miss You too Roushan",
    created_at: new Date(),
},
{
    from: "Bhanu",
    to: "Bharti",
    msg: "I Miss You Bharti",
    created_at: new Date(),
},
{
    from: "Bharti",
    to: "Bhanu",
    msg: "I Miss You too Bhanu",
    created_at: new Date(),
},
];

// allchats.save().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

Chat.insertMany(allchats);