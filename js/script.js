function scroll(){
    var t = window.scrollY;
    var para = document.getElementById("para");
    var moon = document.getElementById("scroll-image");
    var m = 0.5;
    var b = 0;

    newY = m*t +b;
    para.style.backgroundPositionY = newY + "px";

    if (t > 4150){
        moon.style.transform = "scale(2,2)";
    }
}

function check(){
    var email_Box = document.getElementById("email_box");
    var email = email_Box.value;

    var n = email.includes("@");
    
    if (n){
        email_Box.classList.remove("is-invalid");
        email_Box.classList.add("is-valid");
    }else{
        email_Box.classList.remove("is-valid");
        email_Box.classList.add("is-invalid");
    }
}

function checkPass(){
    var pass1_Box = document.getElementById("pass1");
    var pass2_Box = document.getElementById("pass2");

    pass1 = pass1_Box.value;
    pass2 = pass2_Box.value;

    if (pass1.length >= 8){
        pass1_Box.classList.remove("is-invalid");
        pass1_Box.classList.add("is-valid");
    }else{
        pass1_Box.classList.remove("is-valid");
        pass1_Box.classList.add("is-invalid");
    }


   if (pass1 == pass2){
       pass2_Box.classList.remove("is-invalid");
       pass2_Box.classList.add("is-valid");
    }else{
        pass2_Box.classList.remove("is-valid");
        pass2_Box.classList.add("is-invalid");
    }

}

