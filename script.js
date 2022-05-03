// const pour selectionné le dino
const dino = document.getElementById("dino");
// const pour selectionné le cactus
const cactus = document.getElementById("cactus")


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
//fonction pour avoir le statut du dino 
let isAlive = setInterval(function () {
    //permet de savoir ou se trouve le dino par rapport au top (y position)
    // parseInt sert à arrondir les resultat lors du saut
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        // permet de savoir ou se trouve le cactus sur l'axe X 
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        
    // dection des collision

    if(cactusLeft <50 && cactusLeft > 0 && dinoTop >= 140) {
        
        // alert("Perdu poto !");
    }
    
},10);

// definition des touches pour sauter 
document.addEventListener("keydown", function(event){

    jump();
})