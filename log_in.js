function check() {
    var email = document.getElementById('loginUseremail').value;
    var pass = document.getElementById('loginPassword').value;
    
    var passerror = document.getElementById('passerror');
    var emailerror = document.getElementById('emailerror');
    var email_check = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Check if any field is empty
    if (email === '' || pass === '') {
        alert("All fields are required.");
        return;
    }
    if (!email.match(email_check)) {
        emailerror.innerHTML = "invalid email"
        return;
    }

    if (pass.length !== 8) {
        passerror.innerHTML = "password length is exactly 8 characters"
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
        if (user.password === pass) {
            alert('Login successful for ' + user.name + '!');
             window.open("blog.html");
            //  window.open("blog.html", "_self");
            //   location.href = "blog.html";
           // window.open("blog.html", "name2", params);
            //         if(user.role === "admin" ){
            //             window.open('blog.html');
            //         }else{
            //             window.open('signinup.html');
            //         }
            //     } else {
            //         alert('Invalid password');
            //     }
            // } else {
            //     alert('User not found');
            // }
        }
    }
}
