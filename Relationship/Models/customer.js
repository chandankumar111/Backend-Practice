const mongoose = require('mongoose');
const { Schema } = mongoose;

main()
    .then(() => console.log("Connection Successful!"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
};

const orderSchema = new Schema({
    item : String,
    price:String
});

const customerSchema = new Schema({
    name:String,
    orders:[
        {
            type: Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
});

customerSchema.post("findOneAndDelete", async (customer)=>{
    if(customer.orders.length){
        let result = await Order.deleteMany({_id: {$in: customer.orders}});
        console.log(result);
    }
    // console.log("POST MiddleWare Executed");
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer",customerSchema);



// const addOrder = async () => {
//     let result = await Order.insertMany(
//         [
//         {item:"Samousa",price:10},
//         {item:"Chips",price:20},
//         {item:"Chocolates",price:350}
//     ]
// );
//     console.log(result);
// };

const findCustomer = async () => {
    // let cust1 = new Customer({
    //     name:"Chandan Kumar",
    // });
    // let order1 = await Order.findOne({item:"Chocolates"});
    // let order2 =await Order.findOne({item:"Chips"});

    // cust1.orders.push(order1);
    // cust1.orders.push(order2);
    // let result = await cust1.save();
    // console.log(result);
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
};
// customerSchema.pre("findOneAndDelete",async()=>{
//     console.log("PRE MiddleWare Executed");
// });


const addCustomer = async () =>{
    let newCustomer = new Customer({
        name:"Suraj Chouhan"
    });

    let newOrder = new Order({
        item:"Cherry",
        price:599
    });

    newCustomer.orders.push(newOrder);
    await newOrder.save();
    await newCustomer.save();
}

const DeleteCustomer =async () =>{
    let DelCust = await Customer.findByIdAndDelete("667d15abdc880206ce0b7876");
    console.log(DelCust);
}
// addOrder();
// findCustomer();
DeleteCustomer();
// addCustomer();

