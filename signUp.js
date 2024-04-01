function addData() {
  // Retrieve input field values
  var name = document.getElementById("signupUserName").value.trim();
  var email = document.getElementById("signupUserEmail").value.trim();
  var confirmPassword = document
    .getElementById("signupUserConfirmPassword")
    .value.trim();
  var password = document.getElementById("signupUserPassword").value.trim();
  var role = document.getElementById("userRole").value.trim();

  var passwordError = document.getElementById("passwordError");
  var confirmPasswordError = document.getElementById("confirmPasswordError");
  var emailError = document.getElementById("emailError"); 
  var emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  // Check if any field is empty
  if (name === "" || email === "" || confirmPassword === "" || password === "") {
    alert("All fields are required.");
    return;
  }
  if (!email.match(emailCheck)) {
    emailError.innerHTML = "invalid email";
    return;
  }

  // Check if password length is exactly 8 characters
  if (password.length !== 8) {
    passwordError.innerHTML = "password length is exactly 8 characters";
    return;
  }

  // Check if password and confirm password match
  if (password !== confirmPassword) {
    confirmPasswordError.innerHTML = "Passwords do not match.";
    return;
  }

  // Retrieve existing user data or initialize an empty array if none exists
  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the user already exists
  var existingUser = users.find(function (user) {
    return user.email === email;
  });

  if (existingUser) {
    // If the email already exists, prompt the user to log in
    alert("User with this email already exists. Please log in instead.");
    return; // Exit the function to prevent duplicate signing up
  }

  // Add the new user data to the array
  users.push({
    name: name,
    email: email,
    // "password": btoa(pass),
    password: btoa( password),
    role: role,
  });

  // Store the updated array back into localStorage
  localStorage.setItem("users", JSON.stringify(users));
  sessionStorage.setItem("currentuser", email);
  sessionStorage.setItem("currentrole", role);

  // Inform user about successful signup
  alert("Signup successful for " + name + ". Please login to continue.");
  window.open("loginForm.html");
}
