const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://harshdevtripathi1234:Harshdev10@cluster0.kzc9uoh.mongodb.net");
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}