//Require Mongoose
const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  name: {type: String, required: true, index: { unique: true}},
  roleID: {type: Number, required: true},
});


exports.RoleModel = mongoose.model('RoleModel', RoleSchema );