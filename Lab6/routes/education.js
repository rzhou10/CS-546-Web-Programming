const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json([{
        schoolName: "Stevens Institute of Technology",
        degree: "Bachelor of Engineering (in progress)",
        favoriteClass: "Computational Algorithms and Data Structures: One of the first courses relavent to my interests, and learned about various structures and improving algorithms.",
        favoriteMemory: "Getting more practical experience with coding."
    },
    {
        schoolName: "Lawrence High School",
        degree: "High school diploma",
        favoriteClass: "Drafting and Design: Learned how to use AutoCAD in this class, helped define my interest in engineering.",
        favoriteMemory: "Meeting most of my friends here."
    }]
    )
});

module.exports = router;