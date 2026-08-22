function signin() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    iet form = new FormData();

    form.append("email",email.value);
    form.append("password", password.value);
    
    let request = new XMLHttpRequest;

    request.open("POST","SigninProcess.php",true);
    request.onreadystatechange = function () {
        if(request.status == 200&&request.readyState==4){
            let response = request.responseText;

            if(response="successfully"){
                window.location.href  = "home.html";
            }else{
                alert(response);
            }
        }
        
    }

    // if (email == "") {
    //     alert("please enter your email");
    // } else if (password == "") {
    //     alert("plase enter your password");
    // } else {

    //     if (email == "admin@gmail.com" && password=="admin1234") {
    //         alert("login successfully!");
    //         window.location.href ="home.html";
    //     }else{
    //         alert("Invalid email or password")

    //     }
    // }
request.send(form);
}