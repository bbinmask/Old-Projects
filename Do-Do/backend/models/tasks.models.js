import mongoose from "mongoose";

const taskTypeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", taskTypeSchema);

const taskSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tasks: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tasks",
    },
  },
  { timestamps: true }
);

const Tasks = mongoose.model("Tasks", taskSchema);

export default Tasks;
