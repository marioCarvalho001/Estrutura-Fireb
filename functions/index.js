const functions = require("firebase-functions");

// Func dos triggers
var nomeUp = require('./triggers/nomeUper')
var nomeBef = require('./triggers/nomeBefor')
var onDelete = require('./triggers/onDelete')
var onWrite = require('./triggers/onWrite')

//routas
var routes = require('./routes/routes')


//Rotar que vão ser usadas no firebase
exports.Create = functions.firestore.document('/users/{documentId}').onCreate(nomeUp)
exports.Update = functions.firestore.document('/users/{documentId}').onUpdate(nomeBef)
exports.Delete = functions.firestore.document('/users/{documentId}').onDelete(onDelete)
exports.Write = functions.firestore.document('/users/{documentId}').onWrite(onWrite)

exports.db = functions.https.onRequest(routes); 



