const finish = document.getElementById("finish");
const finish1 = document.getElementById("finish1");
const finish2= document.getElementById("finish2");
const finish3 = document.getElementById("finish3");
const touche = document.getElementById("touche");
const touche1 = document.getElementById("touche1");
const touche2 = document.getElementById("touche2");
const touche3 = document.getElementById("touche3");
const pelouf = document.getElementById("PELOUF");
const pelouf1 = document.getElementById("PELOUF1");
const pelouf2 = document.getElementById("PELOUF2");
const pelouf3 = document.getElementById("PELOUF3");
const TIMER = document.getElementById("timer");

var variableuh = "GameAnimation";
var variableuuh = "GameAnimation";
var variableuuuh = "GameAnimation";
var variableuuuuh = "GameAnimation";
let score = 0;
let difficulty = 1.5;
let ui = 1;
let uii = 1;
let uiii = 1;
let uiiii = 1;
const Score = document.getElementById("score");
const Lose = document.getElementById("lose");
var volume = document.getElementById("volumebar")
var musique= document.getElementById("music");
var audio = document.getElementById("music").currentTime;


if (Lose != "LOSE"){
document.addEventListener("keydown", suppr)
}

let touchevalue = parseInt(window.getComputedStyle(touche).getPropertyValue("top"))
let touchevalue1 = parseInt(window.getComputedStyle(touche1).getPropertyValue("top"))
let touchevalue2 = parseInt(window.getComputedStyle(touche2).getPropertyValue("top"))
let touchevalue3 = parseInt(window.getComputedStyle(touche3).getPropertyValue("top"))


const Loose=function(){
if(touchevalue>=450){
    Lose.innerHTML="Lose."

    setTimeout(() => { 
        Loose()        
    },110);
}
setTimeout(() => { 
    Loose()        
},110);
Loose()
}

// -------------



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

// ----------------
let Speedvar = 1
let Speedvar1 = 1
let Speedvar2 = 1
let Speedvar3 = 1
let time = 2
let time1 = 2
let time2 = 2
let time3 = 2
function startSpeed(){
    let touchepos = parseInt(window.getComputedStyle(touche).getPropertyValue("top"))
    let touchepos1 = parseInt(window.getComputedStyle(touche1).getPropertyValue("top"))
    let touchepos2 = parseInt(window.getComputedStyle(touche2).getPropertyValue("top"))
    let touchepos3 = parseInt(window.getComputedStyle(touche3).getPropertyValue("top"))

    if(touchepos >= 450){
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

    if(touchepos1 >= 450){
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

    if(touchepos2 >= 450){
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

    if(touchepos3 >= 450){
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

     touche.style.animationDuration = time + "s" 
     touche1.style.animationDuration = time1 + "s"
     touche2.style.animationDuration = time2 + "s"
     touche3.style.animationDuration = time3 + "s" 
    setTimeout(startSpeed,100)
}


startTime()
startSpeed()

// ------------


volume.addEventListener("change",function(e){
    musique.volume = e.currentTarget.value /100;
});


const color=function(){

    touche.style.backgroundColor= 'rgb('+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+')';
    touche1.style.backgroundColor= 'rgb('+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+')';
    touche2.style.backgroundColor= 'rgb('+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+')';
    touche3.style.backgroundColor= 'rgb('+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+','+Math.floor(Math.random() * (255- 1)+1)+')';
    setTimeout(() => { 
                    color()        
                },180);
}

color()


// const checkDead = function(){
//     let finishTop = parseInt(window.getComputedStyle(finish).getPropertyValue("top"))
//     let finishTop1 = parseInt(window.getComputedStyle(finish1).getPropertyValue("top"))
//     let finishTop2 = parseInt(window.getComputedStyle(finish2).getPropertyValue("top"))
//     let finishTop3 = parseInt(window.getComputedStyle(finish3).getPropertyValue("top"))
//     let touchevalue = parseInt(window.getComputedStyle(touche).getPropertyValue("top"))
//     let touchevalue1 = parseInt(window.getComputedStyle(touche1).getPropertyValue("top"))
//     let touchevalue2 = parseInt(window.getComputedStyle(touche2).getPropertyValue("top"))
//     let touchevalue3 = parseInt(window.getComputedStyle(touche3).getPropertyValue("top"))
   
//     if (score%500 == 0){
//         difficulty -= 0.1
//         touche.style.animationDuration = difficulty + "s" 
//         touche1.style.animationDuration = difficulty + "s"
//         touche2.style.animationDuration = difficulty + "s"
//         touche3.style.animationDuration = difficulty + "s"
//     }       
//     var New ="";

    
    
//     if( ((touchevalue>=425 && finishTop>= 425) || (touchevalue1>=425 && finishTop>= 425) || (touchevalue2>=425 && finishTop>= 425) || (touchevalue3>=425 && finishTop>= 425)) ||
//         ((touchevalue>=425 && finishTop1>= 425) || (touchevalue1>=425 && finishTop1>= 425) || (touchevalue2>=425 && finishTop1>= 425) || (touchevalue3>=425 && finishTop1>= 425)) ||
//         ((touchevalue>=425 && finishTop2>= 425) || (touchevalue1>=425 && finishTop2>= 425) || (touchevalue2>=425 && finishTop2>= 425) || (touchevalue3>=425 && finishTop2>= 425))||
//         ((touchevalue>=425 && finishTop3>= 425) || (touchevalue1>=425 && finishTop3>= 425) || (touchevalue2>=425 && finishTop3>= 425) || (touchevalue3>=425 && finishTop3>= 425))
//          ) {
//         touche.style.animation = "none";
//         touche.style.display = "none";
//         touche1.style.animation = "none";
//         touche1.style.display = "none";
//         touche2.style.animation = "none";
//         touche2.style.display = "none";
//         touche3.style.animation = "none";
//         touche3.style.display = "none";
//         Lose.innerHTML = "you lose"
//     }else{
//         score++
//         Score.innerHTML = score
//         Lose.innerHTML = "keep going"
//         setTimeout(() => { 
//             checkDead()        
//         },10);
//     }
// }
function ninja(){
    pelouf.style.display = "none"
    pelouf1.style.display= "none"
    pelouf2.style.display= "none"
    pelouf3.style.display= "none"
}
function suppr(key) {
    var audio = new Audio('son/ding.mp3');
    let touchevalue = parseInt(window.getComputedStyle(touche).getPropertyValue("top"))
    let touchevalue1 = parseInt(window.getComputedStyle(touche1).getPropertyValue("top"))
    let touchevalue2 = parseInt(window.getComputedStyle(touche2).getPropertyValue("top"))
    let touchevalue3 = parseInt(window.getComputedStyle(touche3).getPropertyValue("top"))
    let finishTop = parseInt(window.getComputedStyle(finish).getPropertyValue("top"))
    let finishTop1 = parseInt(window.getComputedStyle(finish1).getPropertyValue("top"))
    let finishTop2 = parseInt(window.getComputedStyle(finish2).getPropertyValue("top"))
    let finishTop3 = parseInt(window.getComputedStyle(finish3).getPropertyValue("top"))

    if ((touchevalue>400) || (touchevalue1>400) || (touchevalue2>400) || (touchevalue3>400)){

    if (key.keyCode === 65) { // A

        
        if ( touchevalue >= 400 && finishTop >= 400){
            audio.play()
            ui+=1
        touche.classList.remove(variableuh);
        if (ui%2 == 0 ){
            variableuh = "GameAnimation1"
        } else {
            variableuh = "GameAnimation"
        }
        touche.classList.add(variableuh)
            if(touchevalue<500){
            score=score+250
            Score.innerHTML = score
            Lose.innerHTML = "Keep going!"
            setTimeout(ninja,1000)
            pelouf.style.display = "block"
            audio.play()
            }
        } 
    } if(key.keyCode===90) { // Z
        

        if ( touchevalue1 >= 400 && finishTop1 >= 400){
            uii+=1
            audio.play()
        touche1.classList.remove(variableuuh);
        if (uii%2 == 0 ){   
            variableuuh = "GameAnimation1"
        } else {
            variableuuh = "GameAnimation"
        }
        touche1.classList.add(variableuuh)
            if(touchevalue1<500){
            score=score+250
            Score.innerHTML = score
            Lose.innerHTML = "Keep going!"
            setTimeout(ninja,1000)
            pelouf1.style.display = "block"
            
            }
        }
    }else if(key.keyCode===69) { // e
        
    
        if ( touchevalue2 >= 400 && finishTop2 >= 400){

            uiii+=1
            audio.play()
            touche2.classList.remove(variableuuuh);
            if (uiii%2 == 0 ){
                variableuuuh = "GameAnimation1"
            } else {
                variableuuuh = "GameAnimation"
            }
            touche2.classList.add(variableuuuh)
            if(touchevalue2<500){
            score=score+250
            Score.innerHTML = score
            Lose.innerHTML = "Keep going!"
            setTimeout(ninja,1000)
            pelouf2.style.display = "block"
            
            }
        }
            
        
} else if(key.keyCode===82) { // r
  
    if ( touchevalue3 >= 400 && finishTop3 >= 400){
        uiiii+=1
        audio.play()
        touche3.classList.remove(variableuuuuh);
        if (uiiii%2 == 0 ){
            variableuuuuh = "GameAnimation1"
        } else {
            variableuuuuh = "GameAnimation"
        }
        touche3.classList.add(variableuuuuh)
        if(touchevalue3<500){
        score=score+250
        Score.innerHTML = score
        Lose.innerHTML = "Keep going!"
        setTimeout(ninja,1000)
        pelouf3.style.display = "block"
        
        }
        
}
}
}
}

