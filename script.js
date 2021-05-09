const finish1 = document.getElementById("finish1");
const finish2 = document.getElementById("finish2");
const finish3= document.getElementById("finish3");
const finish4 = document.getElementById("finish4");
const VALIDE1 = document.getElementById("valide1");
const VALIDE2 = document.getElementById("valide2");
const VALIDE3 = document.getElementById("valide3");
const VALIDE4 = document.getElementById("valide4");
const TIMER = document.getElementById("timer");
const Score = document.getElementById("score");
const Lose = document.getElementById("lose");
let score = 0;
let difficulty = 1.5;

let piano1 = document.createElement('div')
document.getElementById("game").appendChild(piano1)
piano1.classList.add("piano1")
let piano2 = document.createElement('div')
document.getElementById("game").appendChild(piano2)
piano2.classList.add("piano2")
let piano3 = document.createElement('div')
document.getElementById("game").appendChild(piano3)
piano3.classList.add("piano3")
let piano4 = document.createElement('div')
document.getElementById("game").appendChild(piano4)
piano4.classList.add("piano4")
if (Lose != "LOSE"){
document.addEventListener("keydown", pressKey)
}
var volume = document.getElementById("volumebar")
var musique= document.getElementById("music");
var audio = document.getElementById("music").currentTime;
var variableuh = "tile";
var variableuuh = "tile";
var variableuuuh = "tile";
var variableuuuuh = "tile";
// const Game = document.getElementById("game")
// let pianovalue = parseInt(window.getComputedStyle(Game).getPropertyValue("top"))
let pianovalue1 = parseInt(window.getComputedStyle(piano1).getPropertyValue("top"))
let pianovalue2 = parseInt(window.getComputedStyle(piano2).getPropertyValue("top"))
let pianovalue3 = parseInt(window.getComputedStyle(piano3).getPropertyValue("top"))
let pianovalue4 = parseInt(window.getComputedStyle(piano4).getPropertyValue("top"))
let finishTop1 = parseInt(window.getComputedStyle(finish1).getPropertyValue("top"))
let finishTop2 = parseInt(window.getComputedStyle(finish2).getPropertyValue("top"))
let finishTop3 = parseInt(window.getComputedStyle(finish3).getPropertyValue("top"))
let finishTop4 = parseInt(window.getComputedStyle(finish4).getPropertyValue("top"))

function togglepopup(){
    document.getElementById("popup-1").classList.toggle("active")
}

function nextpage(){
   let nextbutton = document.getElementById("next-btn") 
   let previousbutton = document.getElementById("previous-btn")
   nextbutton.style.display = "none"
   previousbutton.style.display = "block"
   document.getElementById("cloak0").style.display = "none"
   document.getElementById("cloak").style.display = "none"
   document.getElementById("cloak1").style.display = "none"
   document.getElementById("cloak2").style.display = "none"
   document.getElementById("cloak3").style.display = "none"
   document.getElementById("cloak4").style.display = "none"
   document.getElementById("reversecloak").style.display = "block"
   document.getElementById("reversecloak1").style.display = "block"
}

function previouspage(){
    document.getElementById("next-btn").style.display="block"
    document.getElementById("previous-btn").style.display="none"
    document.getElementById("cloak0").style.display = "block"
    document.getElementById("cloak").style.display = "block"
    document.getElementById("cloak1").style.display = "block"
    document.getElementById("cloak2").style.display = "block"
    document.getElementById("cloak3").style.display = "block"
    document.getElementById("cloak4").style.display = "block"
    document.getElementById("reversecloak").style.display = "none"
    document.getElementById("reversecloak1").style.display = "none"
}
const color=function(){
    // if (pianovalue<=700){mettre les couleur que de O a 700 pour les touches
    piano1.style.backgroundColor= 'rgb('+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+')';
    piano2.style.backgroundColor= 'rgb('+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+')';
    piano3.style.backgroundColor= 'rgb('+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+')';
    piano4.style.backgroundColor= 'rgb('+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+')';
    // }else if (pianovalue>700){arreter color pour mettre en vert ou rouge  les touches

    // }
    setTimeout(() => { 
                    color()        
                },180);

}
color()

function ninja(){
    VALIDE1.style.display = "none"
    VALIDE2.style.display= "none"
    VALIDE3.style.display= "none"
    VALIDE4.style.display= "none"
}
//random pas claire car boucle sur les memes chiffres voir console.log
function game_start() {
    let random = Math.floor((Math.random()*100)/25)
    // console.log(random)
    // let lol = -4
    // let oui = 0
    if (random == 0){
        piano1.classList.add("tile")
        // oui+= 1
    }
    if(random == 1){
        piano2.classList.add("tile")
        // oui+= 1
    }
    if(random == 2){
        piano3.classList.add("tile")
        // oui+= 1
    }
    if(random == 3){
        piano4.classList.add("tile")
        // oui+= 1 
    }
    // console.log(oui)
    // if (oui===4){
    //     clearInterval(game_start)
    //     oui += lol
    // }
    setTimeout(() => { 
        game_start()        
    },180);
}
game_start()
// ? pourquoi ca marche pas
volume.addEventListener("change",function(e){
    musique.volume = e.currentTarget.value /100;
});

// ca c'est good
let s = 0
let m = 0
function startTime(){
    s+= 1
    if(s>59){
        s = 0
        m+=1
    }

   
    TIMER.innerHTML = " Secondes : " + s + "  |  " + "Minutes : " + m
    setTimeout(startTime,1000)

}

let time = 2
let time1 = 2
let time2 = 2
let time3 = 2
// trucs a revoir n'accelère pas
function startSpeed(){
    if(pianovalue1 >= 650){
         if((time-0.3)>0){
             time = time-0.05
             time = time*100
             time = Math.round(time)
             time = time/100
         }
     }

    if(pianovalue2 >= 650){
        if((time1-0.3)>0){
            time1 = time1-0.05
            time1 = time1*100
            time1 = Math.round(time1)
            time1 = time1/100
        }
    }

    if(pianovalue3 >= 650){
        if((time2-0.3)>0){
            time2 = time2-0.05
            time2 = time2*100
            time2 = Math.round(time2)
            time2 = time2/100
        }
    }

    if(pianovalue4 >= 650){
        if((time3-0.3)>0){
            time3 = time3-0.05
            time3 = time3*100
            time3 = Math.round(time3)
            time3 = time3/100
        }
    }

    piano1.style.animationDuration = time + "s" 
    piano2.style.animationDuration = time1 + "s"
    piano3.style.animationDuration = time2 + "s"
    piano4.style.animationDuration = time3 + "s" 
    setTimeout(startSpeed,100)
}

let hp = 10

function HP(){
    if (hp>=0) {
    document.getElementById("hp").value = hp
    setTimeout(HP,100)
    }
}
HP()
startTime()
startSpeed()
function pressKey(key){
let pianovalue1 = parseInt(window.getComputedStyle(piano1).getPropertyValue("top"))
let pianovalue2 = parseInt(window.getComputedStyle(piano2).getPropertyValue("top"))
let pianovalue3 = parseInt(window.getComputedStyle(piano3).getPropertyValue("top"))
let pianovalue4 = parseInt(window.getComputedStyle(piano4).getPropertyValue("top"))
        console.log(finishTop1)
        var audio = new Audio('son/ding.mp3');
    if (key.key == "a" && piano1.classList == "piano1 tile" ){
        //dans la case final

        if(pianovalue1>= 650 && finishTop1==700){
            console.log("1")
                audio.play()
                score=score+250
                Score.innerHTML = score

                Lose.innerHTML = "keep going !"
                setTimeout(ninja,1000)
                VALIDE1.style.display = "block"   
        } else {
            hp = hp-1
        }
        //a la fin de la case final
        if (pianovalue1>=800){

            piano1.classList.add("lose")
            clearInterval(game_start)
        }
        piano1.classList.remove("tile")
    }
    if (key.key == "z" && piano2.classList == "piano2 tile" ){
        if(pianovalue2>=650 && finishTop2 == 700){
                    audio.play()
                    score=score+250
                    Score.innerHTML = score
                    Lose.innerHTML = "keep going !"
                    setTimeout(ninja,1000)
                    VALIDE2.style.display = "block"
         
        } else {
            hp = hp-1
        }
        if ( pianovalue2>=800){
            piano2.style.backgroundColor = "red"
            piano2.classList.add("lose")
            clearInterval(game_start)
        }
        piano2.classList.remove("tile")
    }
    if (key.key == "e" && piano3.classList == "piano3 tile" ){
        if(pianovalue3>=650 && finishTop3 == 700){
                    audio.play()
                    score=score+250
                    Score.innerHTML = score
                    Lose.innerHTML = "keep going !"
                    setTimeout(ninja,1000)
                    VALIDE3.style.display = "block"
        }else {
            hp = hp-1
        }
        if ( pianovalue3>=800){
            piano3.style.backgroundColor = "red"
            piano3.classList.add("lose")
            clearInterval(game_start)
        }
        piano3.classList.remove("tile")
    }
    if (key.key == "r" && piano4.classList == "piano4 tile" ){
        if(pianovalue4>=650 && finishTop4 == 700){
                audio.play()
                score=score+250
                Score.innerHTML = score
                Lose.innerHTML = "keep going !"
                setTimeout(ninja,1000)
                VALIDE4.style.display = "block"
                piano4.classList.remove("tile")     
        }else {
            hp = hp-1
        }
        if ( pianovalue4>=800 ){
            piano4.style.backgroundColor = "red"
            piano4.classList.add("lose")
            clearInterval(game_start)
        }    
        piano4.classList.remove("tile") 
    }
}