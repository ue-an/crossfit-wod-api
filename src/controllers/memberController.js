const memberService = require("../services/memberService");

const getAllMembers = (req, res) => {
 const allMembers = memberService.getAllMembers();
 res.send({ status: "OK", data: allMembers});
}

const getOneMember = (req, res) => {
 const {
  params: { memberId },
 } = req;
 if (!memberId) {
  res.status(400).send({
   status: "Failed",
   data: {
    error: "Parameter ':memberId' cannot be empty"
   },
  });
 }
 try {
  const member = memberService.getOneMember(memberId);
 res.send({status: "OK", data: member});
 } catch (error) {
  res.status(error?.status || 500).send({
   status: "Failed",
   data: {
    error: error?.message || error
   }
  });
 }
}

module.exports = {
 getAllMembers,
 getOneMember,
}