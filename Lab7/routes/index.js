const recipeRoutes = require("./recipes");

const constructorMethods = function constructorMethods(app) {
    app.use("/recipes", recipeRoutes);
    // app.use("/recipes/get", recipeRoutes);
    // app.use("/recipes/post", recipeRoutes);
    // app.use("/recipes/get/:id", recipeRoutes);
    // app.use("/recipes/put/:id", recipeRoutes);
    // app.use("/recipes/delete/:id", recipeRoutes);
    // app.use("/recipes/patch/:id", recipeRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethods;