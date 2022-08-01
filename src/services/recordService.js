const Record = require("../database/Record");

const uuid = require("uuid");
const { all } = require("../v1/routes/workoutRoutes");

const getAllRecords = () => {
 try {
  const allRecords = Record.getAllRecords();
 return allRecords;
 } catch (error) {
  throw error;
 }
}

const createNewRecord = (newRecord) => {
 try {
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
 } catch (error) {
  throw error;
 }
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