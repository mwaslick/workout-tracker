const router = require("express").Router();
const db = require("../models/")
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { 
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
 });

router.post("/api/newworkout", ({body}, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        console.log(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post("api/workout/:id", ({body}, res) => {
    db.Exercise.create(body)
    .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: {reps: _id}}, {new: true}))
    .then (dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})

router.get("/populateworkout", (req, res) => {
    db.Workout.find({})
    .populate("reps")
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    })
})


module.exports = router;
