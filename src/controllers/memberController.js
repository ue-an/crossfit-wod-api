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
 res.send({ status: "OK", data: member });
 } catch (error) {
  res.status(error?.status || 500).send({
   status: "Failed",
   data: {
    error: error?.message || error
   }
  });
 }
}

const createNewMember = (req, res) => {
 const { body } = req;
 if (!body.name ||
  !body.gender ||
  !body.dateOfBirth ||
  !body.email ||
  !body.password
  ) {
  res.status(400).send({
   status: "Failed",
   data: {
    error: "One of the following keys is missing or is empty in request body: 'name', 'gender', 'dateOfBirth', 'email', 'password' ",
   }
  })
  return;
 }
 const newMember = {
  name: body.name,
  gender: body.gender,
  dateOfBirth: body.dateOfBirth,
  email: body.email,
  password: body.password,
 };
 try {
  const createdMember = memberService.createNewMember(newMember);
  res.status(201).send({ status: "OK", data: createdMember });
 } catch (error) {
  res.status(error?.status || 500).send({ status: "Failed", data:{error: error?.message || error }});
 }
}

const updateOneMember = (req, res) => {
 const {
  body, params: { memberId },
 } = req;
 if (!memberId) {
  res.status(400).send({
   status: "Failed",
   data: {
    error: "Parameter ':memberId' can not be empty"
   },
  });
 }
 try {
  const updatedMember = memberService.updateOneMember(memberId, body);
  res.send({ status: "OK", data: updatedMember });
 } catch (error) {
  res.status(error?.status || 500).send({ status: "Failed", data: {error: error?.message || error}
 });
 }
}

const deleteOneMember = (req, res) => {
 const { params: { memberId } } = req;
 if (!memberId) {
  res.status(400).send({status: "Failed", data: {
   error: "Parameter ':memberId' cannot be empty",
  }});
 }
 try {
  memberService.deleteOneMember(memberId);
 res.status(204).send({ status: "OK"});
 } catch (error) {
  res.status(error?.status || 500).send({
   status: "Failed",
   data: {
    error: error?.message || error
   }
  });
 }
}

// const getMemberByEmail = (req, res) => {
//  const {
//   params: { email },
//  } = req;
//  if (!email) {
//   res.status(400).send({
//    status: "Failed",
//    data: {
//     error: "Parameter ':email' cannot be empty"
//    },
//   });
//  }
//  try {
//   const member = memberService.getMemberByEmail(email);
//   res.send({status: "OK", data: member});
//  } catch (error) {
//   res.status(error?.status || 500).send({
//    status: "Failed",
//    data: {
//     error: error?.message|| error
//    }
//   });
//  }
// }

module.exports = {
 getAllMembers,
 getOneMember,
 createNewMember,
 updateOneMember,
 deleteOneMember,
 // getMemberByEmail,
}