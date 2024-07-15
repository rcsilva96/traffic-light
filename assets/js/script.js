let red = document.getElementById("redLight");
let yellow = document.getElementById("yellowLight");
let green = document.getElementById("greenLight");

function alternaLuz(){

    if(yellow.className === "light yellow-light"){

        red.className = "light red-light";
        yellow.className = "light light-off";

    } else if(red.className === "light red-light"){

        red.className = "light light-off";
        green.className = "light green-light";
        
    } else{

        yellow.className = "light yellow-light";
        green.className = "light light-off";
        
    }

}