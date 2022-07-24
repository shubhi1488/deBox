import {
    getDatabase,
    ref,
    get,
    set,
    update,
    remove,
    child,
  } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
var IdV,nameV,emailV,textV;
const db = getDatabase();
  
  // Reference
  // Getting data from Textboxes
  var IdBox = document.getElementById("idBox");
  var NameBox = document.getElementById("nameBox");
  var TextBox = document.getElementById("textBox");
  var EmailBox = document.getElementById("emailBox");
  //insert function-
  function insertData(event) {
    event.preventDefault();
    readFormData();
    if ( IdV== "" && nameV == ""  && textV == "" && emailV=="") {
      alert("Fields can not be blank");
    } else {
      // Code to send the data to Firebase
      set(ref(db, "data/" + IdV), {
        rollNo: IdV,
        name: nameV,
        textarea:textV,
        email:emailV,
        
      })
        .then(() => {
          alert("Data Stored Successfully");
          
        })
        .catch((error) => {
          alert("Unsccussful", error);
        });
  
      clearFormData();
    }
  }
  //read function-
  function readData(event) {
    event.preventDefault();
    readFormData();
  
    // Code to read the data from Firebase
  
    const dbref = ref(db);
  
    get(child(dbref, "data/" + IdV))
      .then((snapshot) => {
        if (snapshot.exists()) {
          NameBox.value = snapshot.val().name;
          
          TextBox.value = snapshot.val().textarea;
          EmailBox.value=snapshot.val().email;
        } else {
          alert("No Data Found");
        }
      })
      .catch((error) => {
        alert("Unsccussful", error);
      });
  }
  //update function-
  function updateData(event) {
    event.preventDefault();
    readFormData();
    // Code to update  data in Firebase
    update(ref(db, "data/" + IdV), {
      // IdNo: IdV,  remove as Idno is my Key
      name: nameV,
      textarea:textV,
      email:emailV,
      
    })
      .then(() => {
        alert("Data Updated Successfully");
      })
      .catch((error) => {
        alert("Unsccussful", error);
      });
  
    clearFormData();
  }
  //delete function-
  function deleteData(event) {
    event.preventDefault();
    readFormData();
    if (IdV == "" && nameV == ""  && textV == "" &&emailV=="") {
      alert("Fields can not be blank");
    } else {
      // Code to remove the data from Firebase
      if (confirm("Are your Sure to Delete this ?")) {
        remove(ref(db, "data/" + IdV))
          .then(() => {
            alert("Data Deleted Successfully");
          })
          .catch((error) => {
            alert("Unsccussful", error);
          });
      }
  
      clearFormData();
    }
  }
  function readFormData() {
    IdV = IdBox.value;
    nameV = NameBox.value;
    
    textV = TextBox.value;
    emailV=EmailBox.value;
    console.log(IdV, nameV,emailV,textV);
  }
  function clearFormData() {
    IdBox.value = "";
    NameBox.value = "";
    EmailBox.value=""
    TextBox.value = "";
  }
  document.querySelectorAll(".btn")[0].onclick = insertData;
  document.querySelectorAll(".btn")[1].onclick = readData;
  document.querySelectorAll(".btn")[2].onclick = updateData;
  document.querySelectorAll(".btn")[3].onclick = deleteData;
