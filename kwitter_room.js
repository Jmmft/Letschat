const firebaseConfig = {
    apiKey: "AIzaSyDiUGZ39PCKqth8ZKprn2rPnDUmlMWuW9k",
    authDomain: "kwitter-room-20358.firebaseapp.com",
    databaseURL: "https://kwitter-room-20358-default-rtdb.firebaseio.com",
    projectId: "kwitter-room-20358",
    storageBucket: "kwitter-room-20358.appspot.com",
    messagingSenderId: "548119638851",
    appId: "1:548119638851:web:5b664dc15f4e0f2944b5f6",
    measurementId: "G-SF0QP8PNB2"
  };

  
  
  
    firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }