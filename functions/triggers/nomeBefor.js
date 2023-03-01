const dbConnect = require('../funcs/Datedb')
const users = dbConnect("users")

const nomeBef = (snap, context) => {
  const name = snap.before.data().name; 
  const id = snap.before.data().id; 
  users.doc(id).update({ beforeName: name});  
  console.log('upDate')
  return true
}

module.exports = nomeBef
