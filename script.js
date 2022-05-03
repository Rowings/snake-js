// const pour selectionné le dino
const dino = document.getElementById("dino");

// fonction qui s'occupe du saut
function jump() {
    // empecher le saut de stopper en cas de spam
        if(dino.classList != "jump") { 
    dino.classList.add("jump");

    setTimeout(function(){
        dino.classList.remove("jump");
      }, 300);
    }
}

document.addEventListener("keydown", function(event){

    jump();
})