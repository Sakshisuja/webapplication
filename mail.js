const firebaseConfig = {
  apiKey: "AIzaSyCs4N2v8fd9J9tDLfYKTrNrWm8ddHMhcSw",
  authDomain: "contact-27c15.firebaseapp.com",
  databaseURL: "https://contact-27c15-default-rtdb.firebaseio.com",
  projectId: "contact-27c15",
  storageBucket: "contact-27c15.appspot.com",
  messagingSenderId: "599488833725",
  appId: "1:599488833725:web:3e25bc0013070c683f6fd4"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var phone = getElementVal("phone");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, phone, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, phone, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    phone: phone,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
