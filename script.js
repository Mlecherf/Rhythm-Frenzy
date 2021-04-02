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

if (Lose != "LOSE"){
document.addEventListener("keydown", suppr)
}


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
    let touchevalue = parseInt(window.getComputedStyle(touche).getPropertyValue("top"))
    let touchevalue1 = parseInt(window.getComputedStyle(touche1).getPropertyValue("top"))
    let touchevalue2 = parseInt(window.getComputedStyle(touche2).getPropertyValue("top"))
    let touchevalue3 = parseInt(window.getComputedStyle(touche3).getPropertyValue("top"))
    let finishTop = parseInt(window.getComputedStyle(finish).getPropertyValue("top"))
    let finishTop1 = parseInt(window.getComputedStyle(finish1).getPropertyValue("top"))
    let finishTop2 = parseInt(window.getComputedStyle(finish2).getPropertyValue("top"))
    let finishTop3 = parseInt(window.getComputedStyle(finish3).getPropertyValue("top"))
    
if (key.keyCode === 65) { // A
    ui+=1
    touche.classList.remove(variableuh);
    if (ui%2 == 0 ){
        variableuh = "GameAnimation1"
    } else {
        variableuh = "GameAnimation"
    }
    touche.classList.add(variableuh)
    
    if ( touchevalue >= 400 && finishTop >= 400){
        if(touchevalue<450){
        score=score+250
        Score.innerHTML = score
        Lose.innerHTML = "keep going"
        setTimeout(ninja,1000)
        pelouf.style.display = "block"
        
        }
    }
          
} else if(key.keyCode===90) { // Z
    uii+=1
    touche1.classList.remove(variableuuh);
    if (uii%2 == 0 ){   
        variableuuh = "GameAnimation1"
    } else {
        variableuuh = "GameAnimation"
    }
    touche1.classList.add(variableuuh)
    if ( touchevalue1 >= 400 && finishTop1 >= 400){
        if(touchevalue1<450){
        score=score+250
        Score.innerHTML = score
        Lose.innerHTML = "keep going"
        setTimeout(ninja,1000)
        pelouf1.style.display = "block"
        
        }
    }
        
    
}else if(key.keyCode===69) { // e
    uiii+=1
    touche2.classList.remove(variableuuuh);
    if (uiii%2 == 0 ){
        variableuuuh = "GameAnimation1"
    } else {
        variableuuuh = "GameAnimation"
    }
    touche2.classList.add(variableuuuh)
    console.log(finishTop2, touchevalue2)
    if ( touchevalue2 >= 400 && finishTop2 >= 400){
        if(touchevalue2<450){
        score=score+250
        Score.innerHTML = score
        Lose.innerHTML = "keep going"
        setTimeout(ninja,1000)
        pelouf2.style.display = "block"
        
        }
    }
        
    
}else if(key.keyCode===82) { // r
    uiiii+=1
    touche3.classList.remove(variableuuuuh);
    if (uiiii%2 == 0 ){
        variableuuuuh = "GameAnimation1"
    } else {
        variableuuuuh = "GameAnimation"
    }
    touche3.classList.add(variableuuuuh)
    if ( touchevalue3 >= 400 && finishTop3 >= 400){
        if(touchevalue3<450){
        score=score+250
        Score.innerHTML = score
        Lose.innerHTML = "keep going"
        setTimeout(ninja,1000)
        pelouf3.style.display = "block"
        
        }
        
}
}
}

