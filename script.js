// Boutons du PopUP.
let nextbutton = document.getElementById("next-btn")
let previousbutton = document.getElementById("previous-btn")
let Start = 0

function nextpage() {

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

function previouspage() {
    document.getElementById("next-btn").style.display = "block"
    document.getElementById("previous-btn").style.display = "none"
    document.getElementById("cloak0").style.display = "block"
    document.getElementById("cloak").style.display = "block"
    document.getElementById("cloak1").style.display = "block"
    document.getElementById("cloak2").style.display = "block"
    document.getElementById("cloak3").style.display = "block"
    document.getElementById("cloak4").style.display = "block"
    document.getElementById("reversecloak").style.display = "none"
    document.getElementById("reversecloak1").style.display = "none"
}

function Starter() {
    Start = 1
    document.getElementById("popup-2").style.display = "none";
    document.getElementById("music").play()
    game_start()

}

function togglepopup() {
    document.getElementById("popup-1").classList.toggle("active")
}
//------------------------------------
// Déclaration de Variables Globales !
//------------------------------------
// Créations des nouvelles touches.
let piano1 = document.createElement('div')
let piano2 = document.createElement('div')
let piano3 = document.createElement('div')
let piano4 = document.createElement('div')
// Touches et fin de page.
const finish1 = document.getElementById("finish1");
const finish2 = document.getElementById("finish2");
const finish3 = document.getElementById("finish3");
const finish4 = document.getElementById("finish4");
//------------------------------------
const VALIDE1 = document.getElementById("valide1");
const VALIDE2 = document.getElementById("valide2");
const VALIDE3 = document.getElementById("valide3");
const VALIDE4 = document.getElementById("valide4");
//------------------------------------
let finishTop1 = parseInt(window.getComputedStyle(finish1).getPropertyValue("top"))
let finishTop2 = parseInt(window.getComputedStyle(finish2).getPropertyValue("top"))
let finishTop3 = parseInt(window.getComputedStyle(finish3).getPropertyValue("top"))
let finishTop4 = parseInt(window.getComputedStyle(finish4).getPropertyValue("top"))
//------------------------------------
let pianovalue1 = parseInt(window.getComputedStyle(piano1).getPropertyValue("top"))
let pianovalue2 = parseInt(window.getComputedStyle(piano2).getPropertyValue("top"))
let pianovalue3 = parseInt(window.getComputedStyle(piano3).getPropertyValue("top"))
let pianovalue4 = parseInt(window.getComputedStyle(piano4).getPropertyValue("top"))
const restart = document.getElementById("Restart");
//------------------------------------
// Timer, score et fin de jeu.
const TIMER = document.getElementById("timer");
const Score = document.getElementById("score");
const Lose = document.getElementById("lose");
let score = 0;
let difficulty = 1.5;
let STOP = false
// Musique.
var volume = document.getElementById("volumebar")
var musique = document.getElementById("music");
//  HP.
let hp = 10
// Temps / Timer.
let time = 4
let time1 = 4
let time2 = 4
let time3 = 4


let CheckCreate = 0

//------------------------------------
const color = function () {

    topPos1 = piano1.offsetTop;
    topPos2 = piano2.offsetTop;
    topPos3 = piano3.offsetTop;
    topPos4 = piano4.offsetTop;

    if (topPos1 <= 600) {//{mettre les couleur que de O a 700 pour les touches
        piano1.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * (255 - 1) + 1) + ',' + Math.floor(Math.random() * (255 - 1) + 1) + ',' + Math.floor(Math.random() * (255 - 1) + 1) + ')';
    } else if (topPos1 > 600 && topPos1 <= 685) {//{arreter color pour mettre en vert ou rouge  les touches
        piano1.style.backgroundColor = "green"
    } else if (topPos1 > 685 && topPos1 <= 820) {
        piano1.style.backgroundColor = "red"
    }
    if (topPos2 <= 600) {
        piano2.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * (255 - 1) + 1) + ',' + Math.floor(Math.random() * (255 - 1) + 1) + ',' + Math.floor(Math.random() * (255 - 1) + 1) + ')';
    } else if (topPos2 > 600 && topPos2 <= 685) {
        piano2.style.backgroundColor = "green"
    } else if (topPos2 > 685 && topPos2 <= 820) {
        piano2.style.backgroundColor = "red"
    }
    if (topPos3 <= 600) {
        piano3.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * (255 - 1) + 1) + ',' + Math.floor(Math.random() * (255 - 1) + 1) + ',' + Math.floor(Math.random() * (255 - 1) + 1) + ')';
    } else if (topPos3 > 600 && topPos3 <= 685) {
        piano3.style.backgroundColor = "green"
    } else if (topPos3 > 685 && topPos3 <= 820) {
        piano3.style.backgroundColor = "red"
    }
    if (topPos4 <= 600) {
        piano4.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * (255 - 1) + 1) + ',' + Math.floor(Math.random() * (255 - 1) + 1) + ',' + Math.floor(Math.random() * (255 - 1) + 1) + ')';
    } else if (topPos4 > 600 && topPos4 <= 685) {
        piano4.style.backgroundColor = "green"
    } else if (topPos4 > 685 && topPos1 <= 820) {
        piano4.style.backgroundColor = "red"
    }
    setTimeout(() => {
        color()
    }, 120);

}
color()



let s = 0
let m = 0
function startTime() {
    if (Start != 0) {
        if (hp != 0) {
            s += 1
            if (s > 59) {
                s = 0
                m += 1
            }

        }
    }


    TIMER.innerHTML = " Secondes : " + s + "  |  " + "Minutes : " + m
    setTimeout(startTime, 1000)


}



piano1.style.animationDuration = time + "s"
piano2.style.animationDuration = time1 + "s"
piano3.style.animationDuration = time2 + "s"
piano4.style.animationDuration = time3 + "s"



if (CheckCreate == 0) {
    document.getElementById("game").appendChild(piano1)
    piano1.classList.add("piano1")
    document.getElementById("game").appendChild(piano2)
    piano2.classList.add("piano2")
    document.getElementById("game").appendChild(piano3)
    piano3.classList.add("piano3")
    document.getElementById("game").appendChild(piano4)
    piano4.classList.add("piano4")
    CheckCreate = CheckCreate + 1

    document.addEventListener("keydown", pressKey)

}

function game_start() {
    if (STOP == false) {
        if (hp != 0) {
            let random = Math.floor((Math.random() * 100) / 25)
            // let lol = -4
            // let oui = 0
            if (random == 0) {
                piano1.classList.add("tile")
                // oui+= 1
            }
            if (random == 1) {
                piano2.classList.add("tile")
                // oui+= 1
            }
            if (random == 2) {
                piano3.classList.add("tile")
                // oui+= 1
            }
            if (random == 3) {
                piano4.classList.add("tile")
                // oui+= 1 
            }


        } else {
            Lose.innerHTML = "You Lose!"

            restart.style.display = "block"
            document.getElementById("music").pause()
            document.getElementById("music").currentTime = 0
            STOP = true
        }
        setTimeout(game_start, 180)
    }
}




startTime()



function ninja() {
    VALIDE1.style.display = "none"
    VALIDE2.style.display = "none"
    VALIDE3.style.display = "none"
    VALIDE4.style.display = "none"
}




volume.addEventListener("change", function (e) {
    musique.volume = e.currentTarget.value / 100;
});



function HP() {
    if (hp >= 0) {
        document.getElementById("hp").value = hp
        setTimeout(HP, 100)
    }
}

function CheckOut() {
    if (STOP == false) {
        let pianovalue1 = parseInt(window.getComputedStyle(piano1).getPropertyValue("top"))
        let pianovalue2 = parseInt(window.getComputedStyle(piano2).getPropertyValue("top"))
        let pianovalue3 = parseInt(window.getComputedStyle(piano3).getPropertyValue("top"))
        let pianovalue4 = parseInt(window.getComputedStyle(piano4).getPropertyValue("top"))


        if ((pianovalue1 > 790 && pianovalue1 < 795)) {
            time = time - 0.1
            piano1.style.animationDuration = time + "s"
            hp = hp - 1
            Lose.innerHTML = "Maybe plug ur keyboard ?"
        } else if (pianovalue2 > 790 && pianovalue2 < 795) {
            time1 = time1 - 0.1
            piano2.style.animationDuration = time1 + "s"
            hp = hp - 1
            Lose.innerHTML = "Ur supposed to press buttons you know ?"
        } else if (pianovalue3 > 790 && pianovalue3 < 795) {
            time2 = time2 - 0.1
            piano3.style.animationDuration = time2 + "s"
            hp = hp - 1
            Lose.innerHTML = "Is it to hard for you ?"
        } else if (pianovalue4 > 790 && pianovalue4 < 795) {
            time3 = time3 - 0.1
            piano4.style.animationDuration = time3 + "s"
            hp = hp - 1
            Lose.innerHTML = "Great Job ! Just joking."
        }



        requestAnimationFrame(CheckOut)
    }
}

function Restart() {
    location.reload();
}


CheckOut()
HP()

function pressKey(key) {

    let finishTop1 = parseInt(window.getComputedStyle(finish1).getPropertyValue("top"))
    let finishTop2 = parseInt(window.getComputedStyle(finish2).getPropertyValue("top"))
    let finishTop3 = parseInt(window.getComputedStyle(finish3).getPropertyValue("top"))
    let finishTop4 = parseInt(window.getComputedStyle(finish4).getPropertyValue("top"))
    let pianovalue1 = parseInt(window.getComputedStyle(piano1).getPropertyValue("top"))
    let pianovalue2 = parseInt(window.getComputedStyle(piano2).getPropertyValue("top"))
    let pianovalue3 = parseInt(window.getComputedStyle(piano3).getPropertyValue("top"))
    let pianovalue4 = parseInt(window.getComputedStyle(piano4).getPropertyValue("top"))

    if (hp != 0) {

        var audio = new Audio('son/ding.mp3');
        var audio1 = new Audio('son/hitsound2.mp3');
        var audio2 = new Audio('son/short.mp3');
        var audio3 = new Audio('son/soft-hitclap2.mp3');
        if (key.key == "a" && piano1.classList == "piano1 tile") {
            //dans la case final

            if (pianovalue1 >= 650 && finishTop1 == 700) {
                audio.play()
                score = score + 250
                Score.innerHTML = score

                Lose.innerHTML = "Keep going !"
                setTimeout(ninja, 1000)
                VALIDE1.style.display = "block"
                time = time - 0.1
                piano1.style.animationDuration = time + "s"

            } else {
                time = time - 0.1
                piano1.style.animationDuration = time + "s"
                hp = hp - 1
                Lose.innerHTML = "You missed one..."
            }
            //a la fin de la case final

            piano1.classList.remove("tile")
        }
        if (key.key == "z" && piano2.classList == "piano2 tile") {
            if (pianovalue2 >= 650 && finishTop2 == 700) {
                audio1.play()
                score = score + 250
                Score.innerHTML = score
                Lose.innerHTML = "Great !"
                setTimeout(ninja, 1000)
                VALIDE2.style.display = "block"
                time1 = time1 - 0.1
                piano2.style.animationDuration = time1 + "s"

            } else {
                time1 = time1 - 0.1
                piano2.style.animationDuration = time1 + "s"
                hp = hp - 1
                Lose.innerHTML = "Not like that Zinedine !"
            }

            piano2.classList.remove("tile")
        }
        if (key.key == "e" && piano3.classList == "piano3 tile") {
            if (pianovalue3 >= 650 && finishTop3 == 700) {
                audio2.play()
                score = score + 250
                Score.innerHTML = score
                Lose.innerHTML = "Nice hit !"
                setTimeout(ninja, 1000)
                VALIDE3.style.display = "block"
                time2 = time2 - 0.1
                piano3.style.animationDuration = time2 + "s"
            } else {
                time2 = time2 - 0.1
                piano3.style.animationDuration = time2 + "s"
                hp = hp - 1
                Lose.innerHTML = "Are u blind ? 👀"
            }

            piano3.classList.remove("tile")
        }
        if (key.key == "r" && piano4.classList == "piano4 tile") {

            if (pianovalue4 >= 650 && finishTop4 == 700) {
                audio3.play()
                score = score + 250
                Score.innerHTML = score
                Lose.innerHTML = "Well done !"
                setTimeout(ninja, 1000)
                VALIDE4.style.display = "block"
                piano4.classList.remove("tile")
                time3 = time3 - 0.1
                piano4.style.animationDuration = time3 + "s"
            } else {
                time3 = time3 - 0.1
                piano4.style.animationDuration = time3 + "s"
                hp = hp - 1
                Lose.innerHTML = "Be better. 🤷"
            }

            piano4.classList.remove("tile")
        }
    }
}


function END() {

    if (STOP == true) {

        piano1.classList.remove("tile")
        piano2.classList.remove("tile")
        piano3.classList.remove("tile")
        piano4.classList.remove("tile")

        requestAnimationFrame(END)
    }

}


END()





