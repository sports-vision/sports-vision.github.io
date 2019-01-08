// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAn63ckWS8UQ-1fj-pSvHPWdiV-z7FRMbY",
    authDomain: "sports-vision-1296.firebaseapp.com",
    databaseURL: "https://sports-vision-1296.firebaseio.com",
    projectId: "sports-vision-1296",
    storageBucket: "",
    messagingSenderId: "283747378680"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  // Save message
  saveMessage(fname, lname, email, subject, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, email, subject, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname:lname,
    email:email,
    subject:subject,
    message:message
  });
}