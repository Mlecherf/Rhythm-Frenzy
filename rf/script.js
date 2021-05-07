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

function togglepopup(){
    document.getElementById("popup-1").classList.toggle("active")
}
const color=function(){
    piano1.style.backgroundColor= 'rgb('+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+')';
    piano2.style.backgroundColor= 'rgb('+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+')';
    piano3.style.backgroundColor= 'rgb('+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+')';
    piano4.style.backgroundColor= 'rgb('+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+')';
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
function game_start() {
    let random = Math.floor((Math.random()*100)/25)
    // console.log(random)
    if (random == 0){
        piano1.classList.add("tile")
    
    }
    if(random == 1){
        piano2.classList.add("tile")
     
    }
    if(random == 2){
        piano3.classList.add("tile")
    
    }
    if(random == 3){
        piano4.classList.add("tile")
       
    }
    setTimeout(() => { 
        game_start()        
    },180);
}
game_start()
volume.addEventListener("change",function(e){
    musique.volume = e.currentTarget.value /100;
});

let Speedvar = 1
let Speedvar1 = 1
let Speedvar2 = 1
let Speedvar3 = 1
let time = 2
let time1 = 2
let time2 = 2
let time3 = 2

function startSpeed(){
    let touchepos = parseInt(window.getComputedStyle(piano1).getPropertyValue("top"))
    let touchepos1 = parseInt(window.getComputedStyle(piano2).getPropertyValue("top"))
    let touchepos2 = parseInt(window.getComputedStyle(piano3).getPropertyValue("top"))
    let touchepos3 = parseInt(window.getComputedStyle(piano4).getPropertyValue("top"))

    if(touchepos >= 650){
         if((time-0.3)>0){
             time = time-0.05
             time = time*100
             time = Math.round(time)
             time = time/100
         }
         Speedvar+=1
         touche.classList.remove(variableuh);
         if (Speedvar%2 == 0 ){
             variableuh = "GameAnimation1"
         } else {
             variableuh = "GameAnimation"
         }
         touche.classList.add(variableuh)
             setTimeout(ninja,1000)

     }

    if(touchepos1 >= 650){
        if((time1-0.3)>0){
            time1 = time1-0.05
            time1 = time1*100
            time1 = Math.round(time1)
            time1 = time1/100
        }
        Speedvar1+=1
        touche1.classList.remove(variableuh);
        if (Speedvar1%2 == 0 ){
            variableuh = "GameAnimation1"
        } else {
            variableuh = "GameAnimation"
        }
        touche1.classList.add(variableuh)
            setTimeout(ninja,1000)

    }

    if(touchepos2 >= 650){
        if((time2-0.3)>0){
            time2 = time2-0.05
            time2 = time2*100
            time2 = Math.round(time2)
            time2 = time2/100
        }
        Speedvar2+=1
        touche2.classList.remove(variableuh);
        if (Speedvar2%2 == 0 ){
            variableuh = "GameAnimation1"
        } else {
            variableuh = "GameAnimation"
        }
        touche2.classList.add(variableuh)
            setTimeout(ninja,1000)

    }

    if(touchepos3 >= 650){
        if((time3-0.3)>0){
            time3 = time3-0.05
            time3 = time3*100
            time3 = Math.round(time3)
            time3 = time3/100
        }
        Speedvar3+=1
        touche3.classList.remove(variableuh);
        if (Speedvar3%2 == 0 ){
            variableuh = "GameAnimation1"
        } else {
            variableuh = "GameAnimation"
        }
        touche3.classList.add(variableuh)
            setTimeout(ninja,1000)

    }

    piano1.style.animationDuration = time + "s" 
    piano2.style.animationDuration = time1 + "s"
    piano3.style.animationDuration = time2 + "s"
    piano4.style.animationDuration = time3 + "s" 
    setTimeout(startSpeed,100)
}

function pressKey(key){
        var audio = new Audio('son/ding.mp3');
        let pianovalue1 = parseInt(window.getComputedStyle(piano1).getPropertyValue("top"))
        let pianovalue2 = parseInt(window.getComputedStyle(piano2).getPropertyValue("top"))
        let pianovalue3 = parseInt(window.getComputedStyle(piano3).getPropertyValue("top"))
        let pianovalue4 = parseInt(window.getComputedStyle(piano4).getPropertyValue("top"))
        let finishTop1 = parseInt(window.getComputedStyle(finish1).getPropertyValue("top"))
        let finishTop2 = parseInt(window.getComputedStyle(finish2).getPropertyValue("top"))
        let finishTop3 = parseInt(window.getComputedStyle(finish3).getPropertyValue("top"))
        let finishTop4 = parseInt(window.getComputedStyle(finish4).getPropertyValue("top"))
        
    if (key.key == "a" && piano1.classList == "piano1 tile" ){

        if(pianovalue1>=650 && finishTop1 == 700){
                audio.play()
                piano1.style.backgroundColor = "green"
                score=score+250
                Score.innerHTML = score
                Lose.innerHTML = "keep going !"
                setTimeout(ninja,1000)
                VALIDE1.style.display = "block"
        }
            if(pianovalue1>=720 || pianovalue1<650 && finishTop1 == 700 ){
                piano1.style.backgroundColor = "red"
                piano1.classList.remove("tile")
                piano2.classList.remove("tile")
                piano3.classList.remove("tile")
                piano4.classList.remove("tile")
                Lose.innerHTML = "You lose !"
                clearInterval(game_start)
            }
        piano1.classList.remove("tile")
    }
    if (key.key == "z" && piano2.classList == "piano2 tile" ){
        if(pianovalue2>=650&& finishTop2 == 700 ){
                    audio.play()
                    piano2.style.backgroundColor = "green"
                    score=score+250
                    Score.innerHTML = score
                    Lose.innerHTML = "keep going !"
                    setTimeout(ninja,1000)
                    VALIDE2.style.display = "block"
        }
        if(pianovalue2>=700 && finishTop2 == 700 ){
            piano2.style.backgroundColor = "red"
            piano1.classList.remove("tile")
            piano2.classList.remove("tile")
            piano3.classList.remove("tile")
            piano4.classList.remove("tile")
            Lose.innerHTML = "keep going !"
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
        }
        if(pianovalue3>=700 && finishTop3 == 700 ){
            piano3.style.backgroundColor = "red"
            piano1.classList.remove("tile")
            piano2.classList.remove("tile")
            piano3.classList.remove("tile")
            piano4.classList.remove("tile")
            Lose.innerHTML = "You lose !"
            clearInterval(game_start)
        }
        piano3.classList.remove("tile")
    }
    if (key.key == "r" && piano4.classList == "piano4 tile" ){
        if(pianovalue4>=650 && pianovalue4 <700&& finishTop4 == 700){
            piano4.style.backgroundColor = "green"
                audio.play()
                score=score+250
                Score.innerHTML = score
                Lose.innerHTML = "keep going !"
                setTimeout(ninja,1000)
                VALIDE4.style.display = "block"            
        }
        if(pianovalue4>=700 && finishTop4 == 700 ){
                piano4.style.backgroundColor = "red"
                piano1.classList.remove("tile")
                piano2.classList.remove("tile")
                piano3.classList.remove("tile")
                piano4.classList.remove("tile")
                Lose.innerHTML = "You lose !"
                clearInterval(game_start)
        }
        piano4.classList.remove("tile")
    }
}
// let finish_game = setInterval(() => {

//     let position1 = parseInt(window.getComputedStyle(piano1).getPropertyValue("top"))
//     let position2 = parseInt(window.getComputedStyle(piano2).getPropertyValue("top"))
//     let position3 = parseInt(window.getComputedStyle(piano3).getPropertyValue("top"))
//     let position4 = parseInt(window.getComputedStyle(piano4).getPropertyValue("top"))

//     if (position1<=200 && position1 >=15){
//         piano1.style.background = "green"
//     }
//     if (position1<= 10){
//         piano1.style.background = "red"
//         piano1.classList.remove("block")
//         piano2.classList.remove("block")
//         piano3.classList.remove("block")
//         piano4.classList.remove("block")
//         piano1.classList.add("lose")
//         clearInterval(game_start)
//         clearInterval(finish_game)
//         Score.innerHTML = "YOU LOSE try again"
//     }

//     if (position2<=200 && position1 >=15){
//         piano2.style.background = "green"
//     }
//     if (position2<= 10){
//         piano2.style.background = "red"
//         piano1.classList.remove("block")
//         piano2.classList.remove("block")
//         piano3.classList.remove("block")
//         piano4.classList.remove("block")
//         piano2.classList.add("lose")
//         clearInterval(game_start)
//         clearInterval(finish_game)
//         Score.innerHTML = "YOU LOSE try again"
//     }

//     if (position3<=200 && position1 >=15){
//         piano3.style.background = "green"
//     }
//     if (position3<= 10){
//         piano3.style.background = "red"
//         piano1.classList.remove("block")
//         piano2.classList.remove("block")
//         piano3.classList.remove("block")
//         piano4.classList.remove("block")
//         piano3.classList.add("lose")
//         clearInterval(game_start)
//         clearInterval(finish_game)
//         Score.innerHTML = "YOU LOSE try again"
//     }

//     if (position4<=200 && position1 >=15){
//         piano4.style.background = "green"
//     }
//     if (position4<= 10){
//         piano4.style.background = "red"
//         piano1.classList.remove("block")
//         piano2.classList.remove("block")
//         piano3.classList.remove("block")
//         piano4.classList.remove("block")
//         piano4.classList.add("lose")
//         clearInterval(game_start)
//         clearInterval(finish_game)
//         Score.innerHTML = "YOU LOSE try again"
//     }

// }, 10);
// function suppr(key) {
//     let pianovalue = parseInt(window.getComputedStyle(piano).getPropertyValue("top"))
//     let pianovalue1 = parseInt(window.getComputedStyle(piano1).getPropertyValue("top"))
//     let pianovalue2 = parseInt(window.getComputedStyle(piano2).getPropertyValue("top"))
//     let pianovalue3 = parseInt(window.getComputedStyle(piano3).getPropertyValue("top"))
//     let finishTop = parseInt(window.getComputedStyle(finish).getPropertyValue("top"))
//     let finishTop1 = parseInt(window.getComputedStyle(finish1).getPropertyValue("top"))
//     let finishTop2 = parseInt(window.getComputedStyle(finish2).getPropertyValue("top"))
//     let finishTop3 = parseInt(window.getComputedStyle(finish3).getPropertyValue("top"))
    
// if (key.keyCode === 65 && piano1.classList == "piano1 block" && piano1.style.background == "green") { // A

//     if ( pianovalue >= 400 && finishTop >= 400){
//         if(pianovalue<500){
//         score=score+250
//         Score.innerHTML = score
//         Lose.innerHTML = "keep going"
//         setTimeout(ninja,1000)
//         VALIDE.style.display = "block"
        
//         }
//     }
          
// } else if(key.keyCode===90 && piano2.classList == "piano2 block" && piano2.style.background == "green") { // Z
    
//     if ( pianovalue1 >= 400 && finishTop1 >= 400){
//         if(pianovalue1<450){
//         score=score+250
//         Score.innerHTML = score
//         Lose.innerHTML = "keep going"
//         setTimeout(ninja,1000)
//         VALIDE1.style.display = "block"
        
//         }
//     }
        
    
// }else if(key.keyCode===69 && piano3.classList == "piano3 block" && piano3.style.background == "green") { // e
   
//     if ( pianovalue2 >= 400 && finishTop2 >= 400){
//         if(pianovalue2<450){
//         score=score+250
//         Score.innerHTML = score
//         Lose.innerHTML = "keep going"
//         setTimeout(ninja,1000)
//         VALIDE2.style.display = "block"
        
//         }
//     }
        
    
// }else if(key.keyCode===82 && piano4.classList == "piano4 block" && piano4.style.background == "green") { // r
 
//         if ( pianovalue3 >= 400 && finishTop3 >= 400){
//             if(pianovalue3<450){
//             score=score+250
//             Score.innerHTML = score
//             Lose.innerHTML = "keep going"
//             setTimeout(ninja,1000)
//             VALIDE3.style.display = "block"
        
//             }
        
//         }    
//     }
// }
