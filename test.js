const  titre=()=>{
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    
    document.getElementById("titre").style.color = "rgb(" + r + ", " + g + ", " + b + ")" ;
}

let a = 0;
function counter() {
    a++;
    document.getElementById("count").innerHTML = a;    
}
    

