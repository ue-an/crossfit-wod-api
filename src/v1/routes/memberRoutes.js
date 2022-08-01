const express = require("express");
const memberController = require("../../controllers/memberController");

const router = express.Router();

router.get("/", memberController.getAllMembers);

router.get("/:memberId", memberController.getOneMember);

module.exports = router;