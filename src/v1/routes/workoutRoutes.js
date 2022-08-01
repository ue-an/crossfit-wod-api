const express = require("express");
const workoutController = require("../../controllers/workoutController");
const router = express.Router();

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

router.get("/:workoutId/records", workoutController.getRecordForWorkout);

module.exports = router;