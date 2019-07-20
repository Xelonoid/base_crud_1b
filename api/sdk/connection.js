
var admin = require("firebase-admin");
var serviceAccount = require("./parkir-di-abc-firebase.json");
if (admin.apps.length > 0){
    admin.app();
}else{
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://parkir-di-abc.firebaseio.com"
    });
}
var db = admin.firestore();
db.settings({
    timestampsInSnapshots: true
});
module.exports = db;
