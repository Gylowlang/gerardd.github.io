const forgetPasswordLink = document.querySelector('.forget-password a');
forgetPasswordLink.addEventListener('click', function(event) {
	event.preventDefault();
	alert('Sorry, we cannot process your request at this time.');
});


const signUpLink = document.querySelector('.signup a');
signUpLink.addEventListener('click', function(event) {
	event.preventDefault();
	alert('Sorry, sign up feature is not available at this time.');
});


const backToLoginLink = document.querySelector('.back-to-login a');
backToLoginLink.addEventListener('click', function(event) {
	event.preventDefault();
	window.location.href = 'login.html';
});


