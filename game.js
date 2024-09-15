var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()]; 

gamePattern.push(randomChosenColour);

$("document").trigger("keydown",nextSequence());

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber; 
}

$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); 

// click listener
$('div[type="button"]').on("click",function() {
    var userChosenColour = $(this).attr("id"); 
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animate(userChosenColour);

});


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