const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// exports.addMessage = functions.https.onRequest(async (req, res) => {
//   // Grab the text parameter.
//   const original = req.query.text;
//   // Push the new message into Cloud Firestore using the Firebase Admin SDK.
//   const writeResult = await admin.firestore().collection('messages').add({original: original});
//   // Send back a message that we've successfully written the message
//   res.json({result: `Message with ID: ${writeResult.id} added.`});
// });

// exports.getLikeNotification = functions.https.onRequest( async (req, res) => {
//   const original = req.query.text
//   const writeResult = await admin.firestore().collection('messages').add({original: original});
//   res.json({result: `Message with ID: ${writeResult.id} added.`})
// })

// exports.getCommentNotification = functions.https.onRequest( async (req, res) => {
//   const original = req.query.text
//   const writeResult = await admin.firestore().collection('messages').add({original: original});
//   res.json({result: `Message with ID: ${writeResult.id} added.`})
// })

// exports.getNewPostNotification = functions.https.onRequest( async (req, res) => {
//   const original = req.query.text
//   const writeResult = await admin.firestore().collection('messages').add({original: original});
//   res.json({result: `Message with ID: ${writeResult.id} added.`})
// })

// exports.getContributeReqNotification = functions.https.onRequest( async (req, res) => {
//   const original = req.query.text
//   const writeResult = await admin.firestore().collection('messages').add({original: original});
//   res.json({result: `Message with ID: ${writeResult.id} added.`})
// })


// exports.getContributeRequestAcceptNotification = functions.https.onRequest( async (req, res) => {
//   const original = req.query.text
//   const writeResult = await admin.firestore().collection('messages').add({original: original});
//   res.json({result: `Message with ID: ${writeResult.id} added.`})
// })

// exports.getNewDraftNotification = functions.https.onRequest( async (req, res) => {
//   const original = req.query.text
//   const writeResult = await admin.firestore().collection('messages').add({original: original});
//   res.json({result: `Message with ID: ${writeResult.id} added.`})
// })

// exports.getNewDraftNotification = functions.https.onRequest( async (req, res) => {
//   const original = req.query.text
//   const writeResult = await admin.firestore().collection('messages').add({original: original});
//   res.json({result: `Message with ID: ${writeResult.id} added.`})
// })
