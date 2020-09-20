// Initialize Cloud Firestore through Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAVaPvI1xLiL3OEWsY-MdAhz2MHzfxs_AE",
    authDomain: "fmll-test.firebaseapp.com",
    databaseURL: "https://fmll-test.firebaseio.com",
    projectId: "fmll-test",
    storageBucket: "fmll-test.appspot.com",
    messagingSenderId: "710531184838",
    appId: "1:710531184838:web:bc5fb8d331d89308f83fc7",
    measurementId: "G-JPYMJDMX5P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().signInAnonymously().catch(function(error) {
	console.log(error.code);
	console.log(error.message);
});

var db = firebase.firestore();
var featuresRef = db.collection(databaseCollectionName);
