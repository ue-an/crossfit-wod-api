const DB = require("./db.json");

const { saveToDatabase } = require("./utils");

const getAllMembers = () => {
 return DB.members;
}

const getOneMember = (memberId) => {
 try {
  const member = DB.members.filter((member) => member.id === memberId);
  if (!member) {
   throw{
    status: 400,
    message: `Can't find member with the member id '${memberId}'`,
   };
  }
  return member;
 } catch (error) {
  throw{ status: error?.status || 500, message: error?.message || error };
 }
};

// const createNewMember = () => {
//  return;
// }

// const updateOneMember = () => {
//  return;
// }

// const deleteOneMember = () => {
//  return;
// }

module.exports = {
 getAllMembers,
 getOneMember,
}