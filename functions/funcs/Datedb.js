var admin = require("firebase-admin");

var db = require('../teste.json')

admin.initializeApp({
  credential: admin.credential.cert(db)
});

const dbConnect = function(users){ 
  return admin.firestore().collection(users)
}

module.exports = dbConnect;