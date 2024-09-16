var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false; 


$(document).on("keydown",function(){
    if(!started){
        $("h1").text("Level " + level); 
        nextSequence();
        started = true;
        console.log("keypress detected"); 
    }
    
});

function nextSequence() {

    userClickedPattern = [];
    level = level + 1; 
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber]; 
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);  
    $("h1").text("Level " + level); 
}

// click listener
$('div[type="button"]').on("click",function() {
    var userChosenColour = $(this).attr("id"); 
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animate(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

//checking the answers
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log(gamePattern[currentLevel]);
        console.log(userClickedPattern[currentLevel]);
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence()
            }, 1000); 
        }

    } else {
        console.log("Wrong");
        var gameOver = new Audio('sounds/wrong.mp3');
        gameOver.play();
        $('body').addClass("game-over");
        setTimeout(function () {
            $('body').removeClass("game-over")
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            startOver()
        }, 2000);
        
    }
    console.log("user pattern: " + userClickedPattern);
    console.log("game pattern: " + gamePattern);

}


// function for playing sound depending on colour chosen
function playSound(soundColour) {
    switch(soundColour) {
        case "red":
            var redSound = new Audio('sounds/red.mp3');
            redSound.play();
            break;
        case "blue":
            var blueSound = new Audio('sounds/blue.mp3');
            blueSound.play(); 
            break;
        case "green":
            var greenSound = new Audio('sounds/green.mp3');
            greenSound.play(); 
            break;
        case "yellow":
            var yellowSound = new Audio('sounds/yellow.mp3');
            yellowSound.play(); 
            break;
        default:
            console.log(randomChosenColour);
    }

}

// animate the button by adding and removing the .pressed class
function animate(currentColour) {
    $("#" + currentColour).addClass("pressed"); 

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    },100); 
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
    $("h1").text("Press A Key to Start");
}