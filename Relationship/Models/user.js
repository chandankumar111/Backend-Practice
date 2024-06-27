const mongoose = require('mongoose');
const { Schema } = mongoose;

main()
    .then(() => console.log("Connection Successful!"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
};

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
    let user1 = new User({
        username: "Sherelock Homes",
        addresses: [
            {
                location: "Londan",
                city: "Poland",
            },
        ],
    });

    user1.addresses.push({ location: "Punjab", city: "Gaya" });
    let result = await user1.save();
    console.log(result);
};

addUsers();