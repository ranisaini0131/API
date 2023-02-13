const mongoose = require("mongoose");

//Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

//Model
module.exports = mongoose.model("brands", productSchema);