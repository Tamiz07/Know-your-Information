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
/*var button = document.getElementById("enter");
var input  = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputlength(){
	return input.value.length;
}

function addListElement(){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

function addListAfterClick(){
	if(inputlength() >0){
		addListElement()
	}	
}

function addListAfterKeypress(event) {
	if(inputlength() > 0 && event.keyCode === 13){
		addListElement()
	}
}

button.addEventListener("click",addListAfterClick);

input.addEventListener("keypress",addListAfterKeypress);
	*/