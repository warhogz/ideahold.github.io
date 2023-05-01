const dog = document.getElementById("dog");
const brevno = document.getElementById("brevno");
const div = document.createElement("div");
div.classList.add('black');
document.body.append(div);

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

var score = 0;
let isAlive = setInterval (function(){
    let dogTop = parseInt(window.getComputedStyle(dog).getPropertyValue("top")) 
    let brevnoLeft = parseInt(window.getComputedStyle(brevno).getPropertyValue("left"))
    if(brevno[i].x==30){
        score++;
    }
    if (brevnoLeft <50 && brevnoLeft > 0  && dogTop >= 140){
        alert("GAME OVER")
        location.reload()

    }
}, 10)
div.innerHTML = ("Ваш счет: " + score);
