const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const ModalSchema = new Schema(
{
    code: {type: String, required: true},
    name: {type: String, required: true, default: ""},
    description: {type: String, default: ""},
    createdAt: {type: Number, default: new Date().getTime()},
    updatedAt: {type: Number, default: new Date().getTime()},
});


ModalSchema.index({code: 'text', name: 'text'});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("categories", ModalSchema);
