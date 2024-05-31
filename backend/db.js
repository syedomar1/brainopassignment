const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/brainop"
const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("Connected to mongoose successfully");
}

module.exports = connectToMongo;