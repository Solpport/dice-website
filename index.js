function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateDice(){

    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();

    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];
    image1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if(randomNumber1 > randomNumber2){

        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    
    }
    else if(randomNumber1 < randomNumber2){

        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";

    }
    else{

        document.querySelector("h1").innerHTML = "Draw!";

    }

}

window.addEventListener("load", updateDice);
