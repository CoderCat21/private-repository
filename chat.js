function saveInfo() {
	var username = document.getElementById("username").value;
	var useremail = document.getElementByType("email").value;
	var userpassword = document.getElementByType("password").value;
	alert("Account creation successful! Your username is " + username + ". Now log in to chat!");
}

const signUpbtn = document.querySelector('.cta-sign-up');
signUpBtn.addEventListener(() => {
	window.location = "signup.html";
});
