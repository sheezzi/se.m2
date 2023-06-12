//enternal js

  // Define an array to store the classmates data

  var classmates = [

{ name: "Shahzad Nawaz", cnic: "S23BSEEN1M01116", 
    filename: "Sheezzi.html" },
{ name: "Vinod Kumar", cnic: "S23BSEEN1M01102", 
    filename: "Vinod.html" },
{ name: "Muhammad Ibrar Zafar", cnic: "S23BSEEN1M01149", 
    filename: "ibrar.html" },
{ name: "Muhammad Nouman Saeed", cnic: "S23BSEEN1M01086", 
    filename: "nouman.html" },
{ name: "Fahad Ilyas", cnic: "S23BSEEN1M01124", 
    filename: "fahad.html" },
{ name: "Ali Raza", cnic: "S23BSEEN1M01117", 
    filename: "aliraza.html" },
{ name: "Mubeen Abbas", cnic: "S23BSEEN1M01142", 
    filename: "mubeen.html" },
{ name: "Muhammad Hanzala", cnic: "S23BSEEN1M01078", 
    filename: "hanzala.html" },
{ name: "Muhammad Saqib", cnic: "S23BSEEN1M01104", 
    filename: "saqib.html" },
{ name: "Muhammad Daim", cnic: "S23BSEEN1M01094", 
    filename: "daim.html" },
{ name: "Ahsan Abdullah", cnic: "S23BSEEN1M01093", 
    filename: "ahsan.html" },
{ name: "Muhammad Raheel", cnic: "S23BSEEN1M01108", 
    filename: "raheel.html" },
{ name: "Fakhir Muhammad", cnic: "S23BSEEN1M01125", 
    filename: "fakhir.html" },
{ name: "Muhammad Abid Raza", cnic: "S23BSEEN1M01098", 
    filename: "abid.html" },
{ name: "Abdul Rehman", cnic: "S23BSEEN1M01090", 
    filename: "abrehman.html" },
{ name: "Arslan Sarwar", cnic: "S23BSEEN1M01136", 
    filename: "arslan.html" },
{ name: "Abdullah Khurshid", cnic: "S23BSEEN1M01084", 
    filename: "aryan.html" },
{ name: "Fawad Ur Rehman", cnic: "S23BSEEN1M01118", 
    filename: "fawad.html" },
{ name: "Muhammad Hafeez", cnic: "S23BSEEN1M01077", 
    filename: "hafeez.html" },
{ name: "Mohsin Ali", cnic: "S23BSEEN1M01139", 
    filename: "mohsin.html" },
{ name: "  Muzamal Farooq", cnic: "S23BSEEN1M01129", 
    filename: "muzamil.html" },
{ name: "Muhammad Naseer Ahmad", cnic: "S23BSEEN1M01130", 
    filename: "naseer.html" },
{ name: "Syed Umar Ali", cnic: "S23BSEEN1M01080", 
    filename: "shah.html" },
{ name: "Muhammad Waleed", cnic: "S23BSEEN1M01123", 
    filename: "waqas.html" },
{ name: "Muhammad yasir", cnic: "S23BSEEN1M0----", 
    filename: "yasir.html" },
{ name: "Jafar Ali", cnic: "S23BSEEN1M01112", 
    filename: "jafar.html" },
{ name: "Abdul Qayyum", cnic: "S23BSEEN1M01078", 
    filename: "qayyum.html" },
{ name: "Muhammad Awais", cnic: "S23BSEEN1M01115", 
    filename: "awais.html" },
{ name: "Muhammad Abdullah", cnic: "S23BSEEN1M01085", 
    filename:"abdullah.html" },
{ name: "Bashar Ahmed", cnic: "S23BSEEN1M0----", 
    filename:"bashar.html" },
{ name: "Abdul Rehman", cnic: "S23BSEEN1M01088", 
    filename:"abrehman2.html" },
{ name: "Muhammad Rehan Saleem", cnic: "S23BSEEN1M01103", 
    filename:"rehan.html"},
{ name: "Muhammad Hasan", cnic: "S23BSEEN1M01100", 
    filename:"hassan.html"},
{ name: "Muhammad Faraz", cnic: "S23BSEEN1M01127", 
    filename:"faraz.html"},
{ name: "Samiullah", cnic: "S23BSEEN1M01151", 
    filename:"samiullah.html"},
{ name: "aqeel Ur Rehman", cnic: "S23BSEEN1M01111", 
    filename:"aqeel.html"},
{ name: "Abdullah Mumtaz", cnic: "S23BSEEN1M01110",
    filename:"abmumtaz.html"},
{ name: "Ghulam Masood", cnic: "S23BSEEN1M01120", 
    filename:"masood.html"},
{ name: "Muhammad Ahmad", cnic: "S23BSEEN1M01081",
    filename:"ahmad.html"},
{ name: "Anas Muneer Alvi", cnic: "S23BSEEN1M01148",
    filename:"alvi.html"},

    // Add more classmates here...

       ];

    // function for searching in db

  function search() {
    // Get the value of the search input
    var search = document.getElementById("search").value.toLowerCase();
    // Loop through the classmates and add them to the table if they match the search criteria
    var found = false; // A flag to check if a match is found
    for (var i = 0; i < classmates.length; i++) {
      if (classmates[i].name.toLowerCase() == search || classmates[i].cnic.toLowerCase() == search) {
        // Open the student's HTML file in a new tab/window
        window.open(classmates[i].filename, "_self");
        found = true;
        break; // Exit the loop since a match is found
      }
    }
    if (!found){
      // Handle the case when no match is found
      alert("Invaild input, Please enter Your full name or our database does not exist your data.");
    }
    
    // Clear the search input field
    document.getElementById("search").value = search;
  }

      // script for chache storing

function verifyIdentity() {
  var isVerified = localStorage.getItem("isVerified");
  
  if (isVerified === "true") {
    window.location.href = "students_data.html";
  } else {
    var modal = document.getElementById("verificationModal");
    modal.style.display = "block";
  }
}
    // function for checking identity

function checkIdentity() {
  var answer1 = document.getElementById("answer1").value;
  var answer2 = document.getElementById("answer2").value;

  // Convert user's input and expected answers to lowercase
  var userAnswer1 = answer1.toLowerCase();
  var userAnswer2 = answer2.toLowerCase();
  var expectedAnswer1 = "[Expected Answer 1]".toLowerCase();
  var expectedAnswer2 = "[Expected Answer 2]".toLowerCase();
  
  if (userAnswer1 === expectedAnswer1 && userAnswer2 === expectedAnswer2) {
    localStorage.setItem("isVerified", "true");
    window.location.href = "students_data.html";
  } else {
    alert("Sorry, you are not recognized as a class fellow.");
  }
}


// studen_data table mangement js code
      function filterStudents() {
        var searchInput = document.getElementById("search").value.toLowerCase();
        var studentList = document.getElementsByClassName("student-list")[0];
        var students = studentList.getElementsByClassName("student-item");

        for (var i = 0; i < students.length; i++) {
          var roll = students[i].getElementsByClassName("roll")[0].textContent.toLowerCase();
          var name = students[i].getElementsByClassName("name")[0].textContent.toLowerCase();
          var city = students[i].getElementsByClassName("city")[0].textContent.toLowerCase();

          if (roll.startsWith(searchInput)||name.startsWith(searchInput) || city.startsWith(searchInput)) {
            students[i].style.display = "table-row";
          } else {
            students[i].style.display = "none";
          }
        }
      }
  
