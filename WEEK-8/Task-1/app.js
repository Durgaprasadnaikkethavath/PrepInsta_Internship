document.getElementById("taskForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const courseId = document.getElementById("courseId").value;
  const taskName = document.getElementById("taskName").value;
  const dueDate = document.getElementById("dueDate").value;
  const details = document.getElementById("details").value;

  const task = { courseId, taskName, dueDate, details };

  try {
    const response = await fetch(
      "http://localhost:3000/courses/" + courseId + "/tasks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );

    if (response.ok) {
      alert("Task added successfully");
    } else {
      const errorData = await response.json();
      alert("Error: " + errorData.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
