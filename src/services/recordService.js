const Record = require("../database/Record");

const uuid = require("uuid");
const { all } = require("../v1/routes/workoutRoutes");

const getAllRecords = () => {
 const allRecords = Record.getAllRecords();
 return allRecords;
}

const createNewRecord = (newRecord) => {
 const recordToInsert = {
  ...newRecord,
  id: uuid(),
  workout: newRecord.workoutId,
  record: newRecord.record,
  memberId: newRecord.memberId,
  member: "/members/:memberId",
 }
 const createdRecord = Record.createNewRecord(recordToInsert);
 return createdRecord;
}

const getOneRecord = (recordId) => {
 try {
  const record = Record.getOneRecord(recordId);
 return record;
 } catch (error) {
  throw error;  
 }
}

module.exports = {
 getAllRecords,
 getOneRecord,
 createNewRecord,
}