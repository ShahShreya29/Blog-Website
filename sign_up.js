function adddata() {
    // Retrieve input field values
    var name = document.getElementById('signupUsername').value.trim();
    var email = document.getElementById('signupUseremail').value.trim();
    var cpass = document.getElementById('signupUsercpassword').value.trim();
    var pass = document.getElementById('signupUserpassword').value.trim();
    var role = document.getElementById('userRole').value.trim();

    var passerror = document.getElementById('passerror');
    var cpasserror = document.getElementById('cpasserror');
    var emailerror = document.getElementById('emailerror');
    var email_check = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  
    // Check if any field is empty
    if (name === '' || email === '' || cpass === '' || pass === '') {
        alert("All fields are required.");
        return;
    }
    if (!email.match(email_check)) {
        emailerror.innerHTML = "invalid email"
        return;
    }

    // Check if password length is exactly 8 characters
    if (pass.length !== 8) {
        passerror.innerHTML = "password length is exactly 8 characters"
        return;
    }

    // Check if password and confirm password match
    if (pass !== cpass) {
        cpasserror.innerHTML = "Passwords do not match.";
        return;
    }

    // Retrieve existing user data or initialize an empty array if none exists
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    var existingUser = users.find(function(user) {
        return user.email === email;
    });

    if (existingUser) {
        // If the email already exists, prompt the user to log in
        alert('User with this email already exists. Please log in instead.');
        return; // Exit the function to prevent duplicate signing up
    }

    // Add the new user data to the array
    users.push({
        "name": name,
        "email": email,
    // "password": btoa(pass),
       "password" : pass, 
       "role": role
    });

    // Store the updated array back into localStorage
    localStorage.setItem('users', JSON.stringify(users));
    sessionStorage.setItem('currentuser', email);
    sessionStorage.setItem('currentrole', role);


    // Inform user about successful signup
    alert('Signup successful for ' + name + '. Please login to continue.');
    window.open('loginform.html');
}
