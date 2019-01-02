const express = require('express');
const router = express.Router();

let a = {
    name: "Renjie Zhou",
    cwid: "10396229",
    biography: "I am Renjie, a senior computer engineering student at Stevens Institute of Technology. I am originally from Lawrenceville, NJ. I am planning on getting a full time job after I graduate in May 2019 with an interest in software development. I'm striving to make myself a better person, and willing to make the most out of senior year. I hope to be able to succeed in life as a result of this.",
    favoriteShows: ["Archer", "Ash vs. Evil Dead", "Breaking Bad", "Fargo", "Justice League: Unlimited", "Naruto"],
    hobbies: ["Watching movies", "Surf the Internet", "Code"]
}
router.get("/", (req, res) => {
    res.json(a)
});

module.exports = router;