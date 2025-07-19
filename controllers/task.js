const Task= require('../models/task')
const CreateTask =async (req, res) => {
  try {
    const task = req.body;
    if (!task|| Object.keys(task).length===0) {
    return  res.status(404).json("No task found");
    }
    const newTask = await Task.create(task)
    return res.status(200).json({message:"Task succesfully created",newTask})
  } catch (error) {
    console.log(error);
  }
};
const UpdateTask = (req, res) => {
  try {
   const id= req.params.id
   if(!id){
    return res.status(404).json({message:"The task doesnt exist"})
   }
  } catch (error) {
    cobsole.log(error)
  }
};
module.exports = { CreateTask, UpdateTask };
