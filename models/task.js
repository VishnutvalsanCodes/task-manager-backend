const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});
const Task = mongoose.model("TaskModel", taskSchema);
module.exports = Task;
