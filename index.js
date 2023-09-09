for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click" ,handclicked)
  
}
document.addEventListener("keypress",keypressed)
function keypressed(event){
    var pressedkey = event.key
    makesound(pressedkey)
}

function handclicked(){
    var keyclicked = this.innerHTML;
    makesound(keyclicked)
    }


function makesound(key){
    switch(key){
        case "w":
            var audio = new Audio ("crash.mp3");
            audio.play();
            break
        case "a":
            var audio = new Audio ("kick-bass.mp3");
            audio.play();
            break
        case "s":
            var audio = new Audio ("snare.mp3");
            audio.play();
            break
        case "d":
            var audio = new Audio ("tom-1.mp3");
            audio.play();
            break
        case "j":
            var audio = new Audio ("tom-2.mp3");
            audio.play();
            break
        case "k":
            var audio = new Audio ("tom-3.mp3");
            audio.play();
            break
        case "l":
            var audio = new Audio ("tom-4.mp3");
            audio.play();
            break
}
}
