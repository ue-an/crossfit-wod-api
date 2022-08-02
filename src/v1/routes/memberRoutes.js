const express = require("express");
const memberController = require("../../controllers/memberController");
const router = express.Router();

router.get("/", memberController.getAllMembers);

router.get("/:memberId", memberController.getOneMember);

router.post("/", memberController.createNewMember);

router.patch("/:memberId", memberController.updateOneMember);

router.delete("/:memberId", memberController.deleteOneMember);

// router.get("/:email", memberController.getMemberByEmail);

module.exports = router;