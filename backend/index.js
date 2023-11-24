const express = require("express");
require("dotenv").config();
const cors = require("cors");
const TodoModel = require("./models/todoModel");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
    response.send("<h1>Todo App</h1>")
})

app.post("/api/todos", (request, response) => {
    const { value } = request.body;

    const todoObject = new TodoModel({ value });

    todoObject.save()
    .then(result => {
        response.status(201).json(result);
    });
})

app.get("/api/todos", (request, response) => {

    TodoModel.find({})
    .then(result => {
        response.status(200).json(result);
    });
})


app.delete("/api/todos/:id", (request, response) => {

    const id = request.params.id;

    TodoModel.findByIdAndDelete(id)
    .then(() => {
        response.status(204).end();
    });
})

app.put("/api/todos/:id", (request, response) => {

    const id = request.params.id;
    const { value } = request.body;

    const updatedBody = { value };

    TodoModel.findByIdAndUpdate(id, updatedBody)
    .then(result => {
        response.status(201).json(result);
    });
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})