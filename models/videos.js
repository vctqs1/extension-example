const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const ModalSchema = new Schema(
{
    title: {type: String, required: true},
    description: {type: String, default: ""},
    categories: {type: Array, required: true, default: []},
    thumbnails: {type: Array, required: true, default: []},
    url: {type: String, required: true, default: ''},
    createdAt: {type: Number, default: new Date().getTime()},
    updatedAt: {type: Number, default: new Date().getTime()},
});
ModalSchema.index({title: 'text', description: 'text', url: 'text'});


// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("videos", ModalSchema);
