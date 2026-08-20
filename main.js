function signin() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "") {
        alert("please enter your email");
    } else if (password == "") {
        alert("plase enter your password");
    } else {

        if (email == "admin@gmail.com" && password=="admin1234") {
            alert("login successfully!");
            window.location.href ="home.html";
        }else{
            alert("Invalid email or password")

        }
    }

}