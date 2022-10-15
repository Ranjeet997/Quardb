// const mongoose=require('mongoose');
// const key=require('./key');

// const connectDB=async()=>{
//     try{

// const con=await mongoose.connect(key,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false,
//     useCreateIndex:true
// })
// console.log('mongodb connected');
//     }
//     catch(error){
//         console.log(error);
//         process.exit(1);
//     }
// }
// module.exports=connectDB;

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const connectdb = async () => {
  try {
    const con = await mongoose.connect(
      "mongodb+srv://note10:note10@cluster0.34all.mongodb.net/quadb?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log(`Mongo db connected `);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectdb;
