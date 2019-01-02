const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;

const uuid = require("uuid/v4");

async function createTask(title, description){
    if (!title){
        throw "Title is needed for the task.";
    }
    if (!description){
        throw "Description is needed for the task.";
    }

    if (typeof title !== "string"){
        throw "title needs to be string";
    }

    if (typeof description !== "string"){
        throw "description needs to be string";
    }

    let newId = uuid();
    let newCollection = await todoItems();
    let newTask = {
        _id: newId,
        title: title,
        description: description,
        completed: false,
        completedAt: null
    };

    const insert = await newCollection.insertOne(newTask);
    if (insert.length === 0){
        throw "Item could not be added";
    }

    return newTask;
}

async function getAllTasks(){
    let newCollection = await todoItems();

    const allItems = await newCollection.find({}).toArray();

    return allItems;
}

async function getTask(id){
    if (!id){
        throw "An id is needed for getting.";
    }

    if (typeof id !== "string"){
        throw "id needs to be a string"
    }

    let newCollection = await todoItems();
    const task = await newCollection.findOne({ _id: id });

    if (task == null){
        throw "No task with id of " + id;
    }

    return task;
}

async function completeTask(taskId){
    if (!taskId){
        throw "A taskId is needed."
    }

    if (typeof taskId !== "string"){
        throw "id needs to be a string"
    }

    const newCollection = await todoItems();
    const todoItem = await getTask(taskId);
    const id = todoItem._id;
    const title = todoItem.title;
    const description = todoItem.description;
    const timeStamp = new Date();

    const updatedTask = {
        _id : id,
        title : title,
        description : description,
        completed : true,
        completedAt : timeStamp
    };

    const updateInfo = await newCollection.replaceOne({_id : id}, updatedTask);
    if (updateInfo === 0){
        throw "Unable to update";
    }

    return await getTask(id);
}

async function removeTask(id){
    if (!id){
        throw "An id is needed to be removed."
    }

    if (typeof id !== "string"){
        throw "id needs to be a string"
    }

    let newCollection = await todoItems();
    const task = await newCollection.removeOne({ _id: id });

    if (task == null){
        throw "No task with id of " + id;
    }
}

module.exports = {
    description: "Traversing through MongoDB",
    createTask,
    getAllTasks,
    getTask,
    completeTask,
    removeTask
}