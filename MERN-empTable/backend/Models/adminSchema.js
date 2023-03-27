const mongoose = require('mongoose')

let adminStructure = mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    }
})

module.exports = mongoose.model( 'admin' , adminStructure)