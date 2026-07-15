const express = require("express");
const fs = require("fs");

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const file = "./data/tasks.json";

app.get("/tasks", (req, res) => {
    const tasks = JSON.parse(fs.readFileSync(file));
    res.json(tasks);
});

app.post("/tasks", (req, res) => {
    const tasks = JSON.parse(fs.readFileSync(file));

    const newTask = {
        id: Date.now(),
        title: req.body.title,
        completed: false
    };

    tasks.push(newTask);

    fs.writeFileSync(file, JSON.stringify(tasks));

    res.json(newTask);
});

app.delete("/tasks/:id", (req, res) => {
    let tasks = JSON.parse(fs.readFileSync(file));

    tasks = tasks.filter(task => task.id != req.params.id);

    fs.writeFileSync(file, JSON.stringify(tasks));

    res.json({
        message: "Task deleted"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});