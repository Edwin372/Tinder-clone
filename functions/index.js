const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


exports.aggregateFollows = functions.firestore
    .document('follows/{followId}')
    .onCreate(async (snap, context) => {
        const value = snap.data()
        const {followerId, followedId} = value
        console.log(followerId)
        const rawDataFollower = await db.collection('users').doc(followerId).get()
        const rawDataFollowed = await db.collection('users').doc(followedId).get()
        const follower = rawDataFollower.data()
        const followed = rawDataFollowed.data()
        const newFollowerCount = follower.following + 1
        console.log(newFollowerCount)

        const newFollowedCount = followed.follower + 1
        console.log(newFollowerCount)
        await db.collection('users').doc(followerId).set({
          ...follower,
          following: newFollowerCount
        })
        await db.collection('users').doc(followedId).set({
          ...followed,
          follower: newFollowedCount
        })
        await db.collection('notifications').add({
          receiverId: rawDataFollowed.id,
          photo: follower.avatar,
          message: `${follower.displayName} is following you!`
        })
        
    })