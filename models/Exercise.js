const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  title: String,
  reps: Number,
  description: String
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
