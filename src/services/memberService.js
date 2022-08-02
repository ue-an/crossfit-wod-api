const { v4: uuid} = require("uuid");
const Member = require("../database/Member");

const getAllMembers = () => {
 try {
  const allMembers = Member.getAllMembers();
 return allMembers;
 } catch (error) {
  throw error;
 }
}

const getOneMember = (memberId) => {
 try {
  const member = Member.getOneMember(memberId);
 return member;
 } catch (error) {
  throw error;
 }
}

const createNewMember = (newMember) => {
 const memberToInsert = {
  ...newMember,
  id: uuid(),
  name: newMember.name,
  gender: newMember.gender,
  dateOfBirth: newMember.dateOfBirth,
  email: newMember.email,
  password: newMember.password,
 };
 try {
  const createdMember = Member.createNewMember(memberToInsert);
  return createNewMember;
 } catch (error) {
  throw error;
 }
}

const updateOneMember = (memberId, changes) => {
 try {
  const updatedMember = Member.updateOneMember(memberId, changes);
  return updatedMember;
 } catch (error) {
  throw error;
 }
}

const deleteOneMember = (memberId) => {
 try {
  Member.deleteOneMember(memberId);
 } catch (error) {
  throw error;
 }
}

// const getMemberByEmail = (email) => {
//  try {
//   const member = Member.getMemberByEmail(email);
//   return member;
//  } catch (error) {
//   throw error;
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