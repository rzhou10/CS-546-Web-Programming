const express = require("express");
const router = express.Router();
const data = require("../data");
const resultData = data.result;

router.post("/", (req, res) => {
    var text = req.body["text-to-test"];

    if (!text) {
        res.status(400).send("<p class = \"error\" style=\" background-color: black;color: white;\">Please enter some text<p><a href=\"/\">Back</a>");
    }

    const isPalindrome = resultData.checkForPalindrome(text);
    if (isPalindrome) {
        text = "Congrats! \"" + text + "\" is a palindrome.";
    }
    else {
        text = "Sorry, \"" + text + "\" isn't a palindrome.";
    }
    res.render("result", {
        title: "The Palindrome Results!",
        isPalindrome: isPalindrome,
        result: text
    });
});

module.exports = router;