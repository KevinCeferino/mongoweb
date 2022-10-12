const mongoose = require('mongoose'); // Erase if already required
const Schema = mongoose.Schema;
// Declare the Schema of the Mongo model
var mySchema = new Schema({
    user:{
        type:String,
        required:true,
        index:true,
    },
    message:{
        type: String,
        required: true
    },
    date:{
        type: Date
    }
});

const model = mongoose.model('Message', mySchema);
console.log(model);
module.exports = model;