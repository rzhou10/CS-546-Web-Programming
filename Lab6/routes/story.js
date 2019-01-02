const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        storyTitle: "The Time That a Guy Might Have Went Overboard on a Cruise Ship",
        story: "I went on a cruise in Alaska many years ago, and the first night on the ship everyone was called out for attendance. I found out the next day that someone may have gone overboard. The story (as I heard) was that two guys got drunk on the deck, and one guy leaves to go to sleep and turns back to say goodbye to his friend, but he was no where to be found. He claims he saw a small splash in the water, so the crew woke everyone up to check if everyone was still around. I never found out what really happened that night, nor do I remember much else about the incident."
    })
});

module.exports = router;