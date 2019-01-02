const express = require("express");
const router = express.Router();
const {users, usersid} = require("../data");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
    if (req.cookies && req.cookies.AuthCookie){
        res.redirect("/private");
    }
    else{
        res.render("signin", {layout: false});
    }
});

router.post("/login", async (req, res) => {
    const username = req.body.username;
    const name = await users(username);
    if (!name){
        res.render("signin", {layout: false, messages : "Invalid username."});
        return;
    }
    const pswd = req.body.password;
    const checkPswd = await bcrypt.compare(pswd, name.hashedPassword);

    if (checkPswd){
        res.cookie("AuthCookie", name._id, { expires: new Date(Date.now() + 900000) });
        res.redirect("/private");
    }
    else{
        res.render("signin", {layout: false, messages: "Invalid password."});
    }
});

router.get("/private", async (req, res) => {
    try{
        const name = await usersid(req.cookies.AuthCookie);
        if (name){
            res.render("layouts/main", { username: name.username, firstName: name.firstName, lastName: name.lastName, profession: name.profession, bio: name.bio });
        }
        else{
            res.status(404).json({messages: "No user exists with that name."});
        }
    }
    catch (error){
        console.log(error);
        res.status(403).render("failed", {layout: false});
    }
});

router.get("/logout", async (req, res) => {
    res.clearCookie("AuthCookie");
    res.render("signin", {layout: false, messages: "Successfully logged out."});
});

module.exports = router;