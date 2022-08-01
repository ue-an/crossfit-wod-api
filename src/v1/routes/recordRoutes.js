const express = require("express");
const recordController = require("../../controllers/recordController");
const router = express.Router();

router.get("/", recordController.getAllRecords);
router.get("/:workoutId/records", recordController.getRecordForWorkout);
router.post("/", recordController.createNewRecord);

module.exports = router;