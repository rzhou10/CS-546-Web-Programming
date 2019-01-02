const todos = require("./todo");
const connection = require("./mongoConnection");

async function main(){
    const aliens = await todos.createTask("Aliens", "Space marines return to finish off the Aliens");
    console.log("Task 1 created");
    
    const saving = await todos.createTask("Saving Private Ryan", "A group of soldiers attempt to retrieve a paratrooper whose brothers have been killed.");
    console.log("Task 2 created");

    let allTodos = await todos.getAllTasks();
    console.log("All tasks: ");
    console.log(allTodos);

    console.log("Removing first task.");
    const getAliens = await todos.getTask(aliens._id);
    todos.removeTask(getAliens._id);

    const completedSaving = await todos.completeTask(saving._id);
    console.log("The task has finished.");
    console.log(completedSaving);

    const allTodos1 = await todos.getAllTasks();
    console.log("Remaining: ");
    console.log(allTodos1);

    const db = await connection();
    await db.serverConfig.close();

    console.log("Finished.");
}

main().catch(error => {
    console.log(error);
});