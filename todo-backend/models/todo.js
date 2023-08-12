const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        unique: true,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    user_id: Schema.ObjectId,
});

const todoModel  = mongoose.model("Todo", todoSchema);

module.exports = todoModel;