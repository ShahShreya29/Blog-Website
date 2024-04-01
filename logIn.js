function check() {
    var email = document.getElementById('loginUserEmail').value;
    var password = document.getElementById('loginPassword').value;
    
    var passwordError = document.getElementById('passwordError');
    var emailError = document.getElementById('emailError');
    var emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Check if any field is empty
    if (email === '' || password === '') {
        alert("All fields are required.");
        return;
    } 
    if (!email.match(emailCheck)) {
        emailError.innerHTML = "invalid email"
        return;
    }

    if (password.length !== 8) {
        passwordError.innerHTML = "password length is exactly 8 characters"
        return;
    }


    // Retrieve user data array from localStorage
    var users = JSON.parse(localStorage.getItem('users')) || [];
    sessionStorage.setItem('ce', email)

    // Find the user with the matching email
    var user = users.find(function (user) {
        return user.email === email;

    });

    if (user) {
        // Check if passwords match
        if (user.password === btoa(password)) {
            alert('Login successful for ' + user.name + '!');
             window.open("blog.html");
            //  window.open("blog.html", "_self");
            //   location.href = "blog.html";
           // window.open("blog.html", "name2", params);
        }
    }
}
