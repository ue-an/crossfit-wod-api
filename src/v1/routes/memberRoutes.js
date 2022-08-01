const express = require("express");
const memberController = require("../../controllers/memberController");

const router = express.Router();

router.get("/", memberController.getAllMembers);


//get member
router.get("/members", memberController.getAllMembers);
// router.get("/members/:memberId", recordController)

module.exports = router;