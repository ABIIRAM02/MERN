const mongoose = require('mongoose')

let addDataSchema = mongoose.Schema({

    author:
    {
        type:String,
        required:true
    },
    title:
    {
        type:String,
        required:true
    },
    summary:
    {
        type:String,
        required:true
    },
    image:
    {
        type:String,
        required:true
    },
    location:
    {
        type:String,
        required:true
    },
    rating:
    {
        type:Number,
        required:true
    }

})
module.exports = mongoose.model('AddedData',addDataSchema)