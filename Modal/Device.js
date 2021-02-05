var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports = mongoose.model('Device', new Schema({
    id: ObjectId,
    device: String,
    manufacturer: String,
    os:String,
    lastCheckedOutDate : String,
    lastCheckedOutBy: String,
    isCheckedOut : String,
},{strict:false}));