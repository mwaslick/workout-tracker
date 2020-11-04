const router = require("express").Router();
const db = require("../models/")
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
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

router.put("api/update/:id", ({body}, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, 
        {$push: {exercises: body }},
        {new: true, runValidators: true}
        )
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
})



module.exports = router;
