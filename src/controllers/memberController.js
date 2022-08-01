const memberService = require("../services/memberService");

const getAllMembers = (req, res) => {
 const allMembers = memberService.getAllMembers();
 res.send({ status: "OK", data: allMembers});
}

module.exports = {
 getAllMembers,
}