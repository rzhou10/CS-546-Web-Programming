const express = require("express");
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

router.get("/", async (req, res) => {
    try {
        const recipeList = await recipeData.getAllRecipes();
        res.json(recipeList);
    } 
    catch (err){
        res.status(500).json({route: "get", error: err});
    }
    
});

router.get("/:id", async (req, res) => {
    try {
        const recipe = await recipeData.getRecipeById(req.params.id);
        res.json(recipe);
    }
    catch (err){
        console.log(err);
        res.status(404).json({error: "Could not find"});
    }
});

router.post("/", async (req, res) => {
    const info = req.body;

    if (!info){
        res.status(400).json({ error: "Data is needed" });
    }
    if (!info.title){
        res.status(400).json({ error: "Title is needed" });
    }
    if (!info.ingredients){
        res.status(400).json({ error: "ingredients list is needed" });
    }
    if (!info.steps){
        res.status(400).json({ error: "steps list is needed" });
    }
    try {
        const title = info.title;
        const ingredients = info.ingredients;
        const steps = info.steps;
        const newRecipe = await recipeData.addRecipe(title, ingredients, steps);
        res.json(newRecipe);
    }
    catch (err){
        res.status(500).json({route: "post", error: err});
    }
});

router.put("/:id", async (req, res) => {
    const info = req.body;
    
    try {
        const updatedRecipe = await recipeData.putRecipe(req.params.id, info);
        res.json(updatedRecipe);
    }
    catch (err){
        console.log(err);
        res.status(404).json({route: "put/:id", error: err});
    }
});

router.delete("/:id", async (req, res) => {

    try {
        recipeData.deleteRecipe(req.params.id);
    }
    catch (err){
        res.status(500).json({route: "delete/:id", error: err});
    }
});

router.patch("/:id", async (req, res) => {
    const patchData = req.body;

    try {
        const recipe = await recipeData.patchRecipe(req.params.id, patchData);
        res.json(recipe);
    }
    catch (err){
        console.log(err);
        res.status(500).json({route: "patch/:id", error: err});
    }
});

module.exports = router;