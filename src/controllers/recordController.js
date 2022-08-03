const recordService = require("../services/recordService");

const getAllRecords = (req, res) => {
 const allRecords = recordService.getAllRecords();
 res.send({status: "OK", data: allRecords});
}

const getOneRecord = (req, res) => {
 const {
  params: { recordId },
 } = req;
 if (!recordId) {
  res.status(400).send({
   status: "Failed",
   data: {
    error: "Parameter ':recordId' can not empty"
   },
  });
 }
 try {
  const record = recordService.getOneRecord(recordId);
 res.send({status: "OK", data: record});
 } catch (error) {
  res.status(error?.status || 500).send({
   status: "Failed",
   data: {
    error: error?.message || error
   }
  });
 }
}

const createNewRecord = (req, res) => {
 const { body } = req;
 if (
  !body.workout ||
  !body.record ||
  !body.memberId
  ) {
  res.status(400).send({ status: "Failed", data: {
   error: "One of the following keys is missing or is empty in request body: 'workoutId', 'record', 'memberId'"
  },
 })
 return;
 }
 const newRecord = {
  workout: body.workout,
  record: body.record,
  memberId: body.memberId,
  member: "/members/:memberId",
 }
 try {
  const createdRecord = recordService.createNewRecord(newRecord);
 res.status(200).send({ status: "OK", data: createdRecord });
 } catch (error) {
  res.status(error?.status || 500).send({
   status: "Failed",
   data: {
    error: error?.message || error
   }
  });
 }
}

const updateOneRecord = (req,res) => {
 const {
  body,
  params: { recordId },
 } = req;
 if (!recordId) {
  res.status(400).send({
   status: "Failed",
   data:{
    error: "Parameter ':recordId' cannot be empty",
   }
  });
 }
 try {
  const updatedRecord = recordService.updateOneRecord(recordId, body);
  res.send({ status: "OK", data: updatedRecord });
 } catch (error) {
  res.status(error?.status || 500).send({
   status: "Failed",
   data:{
    error: error?.message || error
   }
  });
 }
}

const deleteOneRecord = (req, res) => {
 const {
  params: { recordId }
 } = req;
 if (!recordId) {
  res.status(400).send({
   data: {
    status: "Failed",
    error: "Parameter ':recordId' cannot be empty",
   }
  });
 }
 try {
  recordService.deleteOneRecord(recordId);
  res.status(204).send({ status: "OK" });
 } catch (error) {
  res.status(error?.status || 500).send({
   data: {
    status: "Failed",
    error: error?.message || error
   }
  });
 }
}

module.exports = {
 getAllRecords,
 getOneRecord,
 createNewRecord,
 updateOneRecord,
 deleteOneRecord,
}