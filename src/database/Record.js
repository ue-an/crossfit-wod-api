const DB = require("./db.json");

const { saveToDatabase } = require("./utils");

const getAllRecords = () => {
 try {
  return DB.records;
 } catch (error) {
  throw { status: 500, message: error };
 }
}

const getOneRecord = (recordId) => {
 try {
  const record = DB.records.filter((record) => record.id === recordId);
  if (!record) {
   throw{
    status: 400,
    message: `Can't find record with the id '${recordId}'`,
   };
  }
  return record;
 } catch (error) {
  throw{ status: error?.status, message: error?.message || error };
 }
}

const createNewRecord = (newRecord) => {
 DB.records.push(newRecord);
 return newRecord;
}

module.exports = {
 getAllRecords,
 getOneRecord,
 createNewRecord,
};