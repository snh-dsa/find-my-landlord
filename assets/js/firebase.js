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

// Create instance of GitHub provider object
var provider = new firebase.auth.GithubAuthProvider();

// Specify additional OAuth 2.0 scopes (Optional)
// provider.addScope('repo');
// Specify additional custom OAuth provider parameters that you want to send with the request. (Optional)
// provider.setCustomParameters({
//  'allow_signup': 'false'
// });

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// TODO: Update Anonymous Sign In to OAuth provider.
// firebase.auth().signInAnonymously().catch(function(error) {
// 	console.log(error.code);
//	console.log(error.message);
//});

// sign in by redirecting to the sign-in page, call signInWithRedirect
firebase.auth().signInWithRedirect(provider).catch(function(error) {
	console.log(error.code);
	console.log(error.message);
});

// Error handling: Retrieve the provider's OAuth token by calling getRedirectResult when your page loads
//firebase.auth()
//  .getRedirectResult()
//  .then((result) => {
//    if (result.credential) {
      /** @type {firebase.auth.OAuthCredential} */
//      var credential = result.credential;

      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//      var token = credential.accessToken;
//      // ...
//    }

//    // The signed-in user info.
//    var user = result.user;
//  }).catch((error) => {
//    // Handle Errors here.
//    var errorCode = error.code;
//    var errorMessage = error.message;
//    // The email of the user's account used.
//    var email = error.email;
//    // The firebase.auth.AuthCredential type that was used.
//    var credential = error.credential;
//    // ...
//  });

var db = firebase.firestore();
var featuresRef = db.collection(databaseCollectionName);
