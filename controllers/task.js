const Task= require('../models/task')
const CreateTask = (req, res) => {
  try {
    const task = req.body;
    if (task.length == 0) {
      res.status(404).json("No task found");
    }
    res.status(200).json({ message: "successfully created a task" });
  } catch (error) {
    console.log(error);
  }
};
const UpdateTask = (req, res) => {
  try {
   req.params.id=id
  } catch (error) {
    cobsole.log(error)
  }
};
module.exports = { CreateTask, UpdateTask };
