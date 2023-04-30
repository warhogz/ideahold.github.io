const dog = document.getElementById("dog");
const brevno = document.getElementById("brevno");

document.addEventListener("touchstart", function(event){
    jump()
});

function jump(){
    if(dog.classList != "jump"){
        dog.classList.add("jump")
    }
    setTimeout( function(){
        dog.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval (function(){
    let dogTop = parseInt(window.getComputedStyle(dog).getPropertyValue("top")) 
    let brevnoLeft = parseInt(window.getComputedStyle(brevno).getPropertyValue("left"))
    if (brevnoLeft <50 && brevnoLeft > 0  && dogTop >= 140){
        alert("GAME OVER")
        location.reload()

    }
}, 10)
