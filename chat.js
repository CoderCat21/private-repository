
const signInbtn = document.querySelector('.cta-sign-in');
const submitBtn = document.querySelector('.cta-submit');
submitBtn.addEventListener(() => {
	var username = document.getElementById("username").value;
	alert("Account creation successful! Your username is " + username + ". Now log in to chat!");
});

signInBtn.addEventListener(() => {
	window.location = "signIn.html";
});
