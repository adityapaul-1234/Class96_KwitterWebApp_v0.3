var firebaseConfig = {
      apiKey: "AIzaSyCxrqu6A82BNu870Dxj_EK7lTDFoXNFvf0",
      authDomain: "c94-practicewebapp.firebaseapp.com",
      databaseURL: "https://c94-practicewebapp-default-rtdb.firebaseio.com",
      projectId: "c94-practicewebapp",
      storageBucket: "c94-practicewebapp.appspot.com",
      messagingSenderId: "384032205411",
      appId: "1:384032205411:web:a93f4cb2a6062331672656",
      measurementId: "G-DT1PJBP7DB"
    };
firebase.initializeApp(firebaseConfig);

Room_Name = localStorage.getItem("Room-Name");
User_Name = localStorage.getItem("user_name");

function send(){
      MSG = document.getElementById("Message").value;
      firebase.database().ref(Room_Name).push({
            name: User_Name,
            nessage: MSG,
            likes: 0
      });

      document.getElementById("Message").value = "";
}

function get_Data() { firebase.database().ref("/"+Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
get_Data(); 

function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room-Name");
      window.location = "index.html";
}
