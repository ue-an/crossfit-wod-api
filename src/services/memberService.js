const Member = require("../database/Member");

const getAllMembers = () => {
 const allMembers = Member.getAllMembers();
 return allMembers;
}

module.exports = {
 getAllMembers,
}