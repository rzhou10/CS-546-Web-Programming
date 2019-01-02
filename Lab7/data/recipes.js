const mongoCollections = require("../config/mongoCollection");
const recipes = mongoCollections.recipes;
const uuid = require("uuid/v4");

//gets id and titles
async function getAllRecipes() {
    const recipeCollection = await recipes();
    return await recipeCollection.find({}).toArray();
}

//finds recipe w/ id
async function getRecipeById(id) {
    if (!id){
        throw "An id is needed for getting.";
    }

    let newCollection = await recipes();
    const recipe = await newCollection.findOne({ _id: id });

    if (recipe == null){
        throw "No recipe with this id";
    }

    return recipe;
}

//add
async function addRecipe(title, ingredients, steps) {
    if (!title){
        throw "A title is required.";
    }
    if (!ingredients){
        throw "An ingredients list is required.";
    }
    if (!steps){
        throw "A steps list is required.";
    }
    
    if (typeof title !== "string"){
        throw "title needs to be string";
    }
    if (!Array.isArray(ingredients)){
        throw "ingredients needs to be an array";
    }
    if (!Array.isArray(steps)){
        throw "steps needs to be an array";
    }
    
    let newId = uuid();
    let newCollection = await recipes();
    let newRecipe = {
        _id: newId,
        title: title,
        ingredients: ingredients,
        steps: steps
    };

    const insert = await newCollection.insertOne(newRecipe);
    if (insert.length === 0){
        throw "Item could not be added";
    }

}

//removes a recipe
async function deleteRecipe(id) {
    if (!id){
        throw "An id is needed for deleting.";
    }
    
    let newCollection = await recipes();
    const task = await newCollection.removeOne({ _id: id });

    if (task == null){
        throw "No task with id of " + id;
    }
}

// replaces a field inside of recipe
async function patchRecipe(id, patchedRecipe) {
    if (!id){
        throw "An id is needed for updating.";
    }
    if (typeof id !== "string"){
        throw "id needs to be a string.";
    }
    let newCollection = await recipes();

    let patchedRecipeData = {};

    if (patchedRecipe.title){
        if (typeof patchedRecipe.title !== "string"){
            throw "Incorrectly formatted title";
        }
        patchedRecipeData.title= patchedRecipe.title;
    }
    if (patchedRecipe.ingredients){
        if (!Array.isArray(ingredients)){
            throw "ingredients needs to be an array";
        }
        patchedRecipeData.ingredients = patchedRecipe.ingredients;
    }
    if (patchedRecipe.steps){
        if (!Array.isArray(steps)){
            throw "steps needs to be an array";
        }
        patchedRecipeData.steps = patchedRecipe.steps;
    }

    const task = await newCollection.updateOne({_id: id}, {$set: patchedRecipeData});

    if (task.modifiedCount == 0){
        throw "Could not update recipe";
    }

    return task;

}

//replaces recipe
async function putRecipe(id, newRecipe) {
    if (!id){
        throw "An id is needed for updating.";
    }
    if (typeof id !== "string"){
        throw "id needs to be a string.";
    }
    if (!newRecipe){
        throw "A new recipe is needed";
    }

    if (typeof newRecipe.title !== "string"){
        throw "title needs to be a string"
    }
    if (!Array.isArray(newRecipe.ingredients)){
        throw "ingredients needs to be an array";
    }
    if (!Array.isArray(newRecipe.steps)){
        throw "steps needs to be an array";
    }
    const newCollection = await recipes();
    const updateRecipe = await getRecipeById(id);
    const id1 = updateRecipe._id;
    const title = newRecipe.title;
    const ingredients = newRecipe.ingredients;
    const steps = newRecipe.steps;

    const updatedRecipeData = {
        _id: id1,
        title: title,
        ingredients: ingredients,
        steps: steps
    };

    const updatedInfo = await newCollection.replaceOne({_id: id}, updatedRecipeData);

    if (updatedInfo.modifiedCount === 0){
        throw "Can't update recipe";
    }

    return updatedInfo;
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    addRecipe,
    deleteRecipe,
    putRecipe,
    patchRecipe
}