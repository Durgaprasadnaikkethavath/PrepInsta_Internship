const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/student_tasks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define Mongoose schemas and models
const TaskSchema = new mongoose.Schema({
  courseId: mongoose.Schema.Types.ObjectId,
  taskName: String,
  dueDate: Date,
  details: String,
});

const Task = mongoose.model("Task", TaskSchema);

// Route to get tasks by course ID
app.get("/courses/:courseId/tasks", async (req, res) => {
  const { courseId } = req.params;

  try {
    const tasks = await Task.find({ courseId });

    if (tasks.length === 0) {
      return res
        .status(404)
        .json({ message: "No tasks found for this course." });
    }

    res.json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error. Could not retrieve tasks." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
