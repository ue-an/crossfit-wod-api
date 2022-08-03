const Record = require("../database/Record");
const { v4:uuid } = require("uuid");
const { all } = require("../v1/routes/workoutRoutes");

const getAllRecords = () => {
 try {
  const allRecords = Record.getAllRecords();
 return allRecords;
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

const createNewRecord = (newRecord) => {
  const recordToInsert = {
   ...newRecord,
   id: uuid(),
   workout: newRecord.workout,
   record: newRecord.record,
   memberId: newRecord.memberId,
   member: newRecord.member,
  }
  try {
  const createdRecord = Record.createNewRecord(recordToInsert);
  return createdRecord;
 } catch (error) {
  throw error;
 }
}

const updateOneRecord = (recordId, changes) => {
 try {
  const updatedRecord = Record.updateOneRecord(recordId, changes);
  return updatedRecord;
 } catch (error) {
  throw error;
 }
}

const deleteOneRecord = (recordId) => {
 try {
  Record.deleteOneRecord(recordId);
 } catch (error) {
  throw error;
 }
}

module.exports = {
 getAllRecords,
 getOneRecord,
 createNewRecord,
 updateOneRecord,
 deleteOneRecord,
}