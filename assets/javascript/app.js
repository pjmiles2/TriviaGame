//function to display question


var counter = 0;
var wins = 0;
var losses =0;
var userChoice;
var current;
var answerArray;


var game = {


question: ["Just Do It", "Fly the Friendly Skies", "The Ultimate Driving Machine"],
industry: ["shoe company's", "airline's", "car maker's"],
correctAnswer: ["Nike", "United", "BMW"],
wrongChoice1: ["Reebok", "Delta", "Lexus"],
wrongChoice2: ["Adidas", "American", "Ford"],
wrongChoice3: ["Converse", "Southwest", "Cadillac"]

}

function newQuestion(){

var current = Math.floor(Math.random() * game.question.length);
console.log(current);
    
answerArray = [game.correctAnswer[current], game.wrongChoice1[current], game.wrongChoice2[current], game.wrongChoice3[current]];

var randomArray = answerArray.sort(function() { return 0.5 - Math.random() });

console.log(answerArray);

$(".question").show();
$("#A").show();
$("#B").show();
$("#C").show();
$("#D").show();
$(".gamestatus").show();

$(".question").html("Which " + game.industry[current] + " slogan is " + game.question[current] +"?");

var answerA = randomArray[0];
var answerB = randomArray[1];
var answerC = randomArray[2];
var answerD = randomArray[3];

$("#A").append(answerA);
$("#B").append(answerB);
$("#C").append(answerC);
$("#D").append(answerD);

var windowTimeout = setTimeout(function(){

    $(".gamestatus").html("Time's Up!")
    $(".question").html(" ");
    $("#A").hide();
    $("#B").hide();
    $("#C").hide();
    $("#D").hide();
    losses++;

}, 10000);

$("button").on("click", function(){
    
    clearTimeout(windowTimeout);

    if (this.id === "A") {

        userChoice = answerA;

    } else if (this.id === "B") {
    
        userChoice = answerB;

    } else if (this.id === "C"){

        userChoice = answerC;
    }
    
        else {userChoice = answerD;
        };
    
     console.log(userChoice);

     winLoss();

});
newQuestion();



function winLoss() { 

    if (userChoice === game.correctAnswer[current]) {

        $(".gamestatus").html("Correct! " + game.question[current] + " is the slogan for " + userChoice + ".");
        wins++;


        var resetTimeout = setTimeout(function(){

            $(".question").hide();
            $("#A").hide();
            $("#B").hide();
            $("#C").hide();
            $("#D").hide();
            $(".gamestatus").hide();
            newQuestion();

        }, 5000);

    } else {

        $(".gamestatus").html("Wrong!!");
        losses++;

        var resetTimeout = setTimeout(function(){

            $(".question").hide();
            $("#A").hide();
            $("#B").hide();
            $("#C").hide();
            $("#D").hide();
            $(".gamestatus").hide();
            newQuestion();

        }, 5000);

    }



}


};












