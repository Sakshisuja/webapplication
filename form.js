var firebaseConfig = {
  apiKey: "AIzaSyAx77ggMxbhsykT26IGiBoG8v0kNJxj8wg",
  authDomain: "form-bb469.firebaseapp.com",
  projectId: "form-bb469",
  storageBucket: "form-bb469.appspot.com",
  messagingSenderId: "396249287153",
  appId: "1:396249287153:web:67526afe7e4047c5875c50"
};
//
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  alert("Signed Up");

}
function signIn(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
}
function signOut(){
auth.signOut();
alert("Signed Out");
}

auth.onAuthStateChanged(function(user){
  if(user){
    var email = user.email;
    alert("Active User " + email);

          

          //Take user to a different or home page


          //is signed in

        }else{
          alert("No Active User");

          //no user is signed in

  }

  

  

  

});