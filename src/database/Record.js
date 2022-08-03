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
  throw{ status: error?.status || 500, message: error?.message || error };
 }
}

const createNewRecord = (newRecord) => {
 try {
  DB.records.push(newRecord);
  saveToDatabase(DB);
 return newRecord;
 } catch (error) {
  throw { status: error?.status || 500, message: error?.message || error };
}
}

const updateOneRecord = (recordId, changes) => {
  try {
    const indexForUpdate = DB.records.findIndex((record) => record.id === recordId);
    const isWorkoutNameValid = DB.workouts.findIndex((workout) => workout.id === changes.workout) > -1;
    const isMemberExisting = DB.members.findIndex((member) => member.id === changes.memberId) > -1;
    if (!isWorkoutNameValid) {
      throw {
        status: 400,
        message: `Workout with the id '${changes.workout}' does not exist`,
      };
    }
    if (!isMemberExisting) {
      throw {
        status: 400,
        message: `Member with the id '${changes.memberId}' does not exist`,
      }
    }
    const updatedRecord = {
      ...DB.records[indexForUpdate],
      ...changes,
    };
    DB.records[indexForUpdate] = updatedRecord;
    saveToDatabase(DB);
  } catch (error) {
    throw{ status: error?.status || 500, message: error?.message || error };
  }
}

const deleteOneRecord = (recordId) => {
  try {
    const indexForDeletion = DB.records.findIndex((record) => record.id === recordId);
    if (indexForDeletion === -1) {
      throw{
        status: 400,
        message: `Can't find record with id '${recordId}'`,
      }
    }
    DB.records.splice(indexForDeletion, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw{ status: error?.status || 500, message: error?.message || error };
  }
}

module.exports = {
 getAllRecords,
 getOneRecord,
 createNewRecord,
 updateOneRecord,
 deleteOneRecord,
};