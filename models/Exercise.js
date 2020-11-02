const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Please enter a name for your exercise"
  },
  reps: {
    type: Number,
    required: "Please enter a number of reps"
  },
  description: {
    type: String,
    required: "Please enter a description of the exercise"
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
