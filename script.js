function displayDetails() {
      var fname = document.getElementById('fname').value;
      var lname = document.getElementById('lname').value;
      var email = document.getElementById('email').value;
  	  var degree = document.getElementById('degree').value;
  	  var university = document.getElementById('univeristy').value;
	  
      alert("First Name: " + fname + "\nLast Name: " + lname + "\nDegree: " + degree + "\nUniversity: " + university);
      document.getElementById('display-lname').textContent = fname;
      document.getElementById('display-fname').textContent = lname;
      document.getElementById('display-email').textContent = email;
  	  document.getElementById('display-degree').textContent = degree;
      document.getElementById('display-university').textContent = university;
  
  	  
	
      fname.value = "";
      lname.value = "";
  	  email.value = "";
      degree.value = "";
  	  university.value = "";

      document.getElementById('resume').style.display = "block";
    }
