const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["work", "prersonal"],
    default:'Select',
  },
  taskName: {
    type: String,
    required: [true, "Please, provide the task"],
    maxlength: 250,
  },
  status: {
    type: String,
    enum: ["pending", "inProgress", "declined", "done"],
    default:'Select',
  },
  createdBy:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    required: [true, "Please, provide the user"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
},{timestamps:true});


module.exports = mongoose.model('Tasks',TaskSchema)