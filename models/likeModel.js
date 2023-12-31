//import mongoose instance
const mongoose = require("mongoose");

//route handler
const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",//reference to post model
    },
    user:{
        type:String,
        required:true,
    },
});

module.exports = mongooe.model("Like",likeSchema);