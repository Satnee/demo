// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyA063-ngsexQ0rhIvtHRKP0LmB0yBrH5vk",
    authDomain: "oneclick-73406.firebaseapp.com",
    databaseURL: "https://oneclick-73406.firebaseio.com",
    projectId: "oneclick-73406",
    storageBucket: "oneclick-73406.appspot.com",
    messagingSenderId: "69122383434",
    appId: "1:69122383434:web:ed374155a50b23b0a610b3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    //Alert Message
    swal('Your Message has been send',
            ).then((value) => {
                setTimeout(function(){
                    window.location.replace("index.html");
                }, 1000)
            });
    
 

  // Get values
  var name = getInputVal('fname');
  var address = getInputVal('faddress');
  var email = getInputVal('femail');
  var phone = getInputVal('fphone');
  var message = getInputVal('fmessage');

  // Save message
  saveMessage(name, address, email, phone, message);

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
function saveMessage(name, address, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    address: address,
    email:email,
    phone:phone,
    message:message
  });
}