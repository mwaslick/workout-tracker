const router = require("express").Router();
const { db } = require("../models/Exercise.js");
const Exercise = require("../models/Exercise.js");
const Workout = require("../models/Workout.js");

app.post("/newworkout", ({body}, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        console.log(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    })
})


module.exports = router;
