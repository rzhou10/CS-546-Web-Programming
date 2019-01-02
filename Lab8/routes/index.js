const resultRoutes = require("./result");
const path = require("path");

const constructorMethods = function constructorMethods(app){
    app.use("/result", resultRoutes);

    app.get("/", (req, res) => {
        res.render("start", {
            title: "The Best Palindrome Checker in the World!"
        });
    });

    app.use("*", (req, res) => {
        res.redirect("/");
    });
};

module.exports = constructorMethods;