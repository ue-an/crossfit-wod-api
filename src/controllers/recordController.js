const recordService = require("../services/recordService");

const getAllRecords = (req, res) => {
 const allRecords = recordService.getAllRecords();
 res.send({status: "OK", data: allRecords});
}

const getRecordForWorkout = (req, res) => {
 const {
  params: { workoutId },
 } = req;
 if (!workoutId) {
  res.status(400).send({
   status: "Failed",
   data: {
    error: "Parameter ':workoutId' can not empty"
   },
  });
 }
 const record = recordService.getRecordForWorkout(workoutId);
 res.send({status: "OK", data: record});
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
  workout: body.workoutId,
  record: body.record,
  memberId: body.memberId,
  member: body.member,
 }
 const createdRecord = recordService.createNewRecord(newRecord);
 res.status(200).send({ status: "OK", data: createdRecord });
}

module.exports = {
 getAllRecords,
 getRecordForWorkout,
 createNewRecord,
}