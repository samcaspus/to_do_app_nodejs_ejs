const mongoose = require("mongoose");
//// the schema for establishing node js task

const toDoSchema = new mongoose.Schema({

    "description": {
        type: String,
        required: true
    },
    "category": {
        type: String,
        required: true
    },
    "dueDate": {
        type: String,
        required: true
    }
})


const ToDoApp = mongoose.model("ToDoApp", toDoSchema);


module.exports = ToDoApp;


