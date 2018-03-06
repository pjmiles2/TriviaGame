$(document).ready(function(){

var wins = 0;
var losses = 0;
var userChoice;
var current;
var answerArray;
var randomArray;
var interval;

var game;


function resetVar(){

    game = {

    question: ["Just Do It", "Fly the Friendly Skies", "The Ultimate Driving Machine","Taste the Rainbow"],
    industry: ["shoe company's", "airline's", "car maker's","candy's"],
    correctAnswer: ["Nike", "United", "BMW","Skittles"],
    wrongChoice1: ["Reebok", "Delta", "Lexus", "M&M's"],
    wrongChoice2: ["Adidas", "American", "Ford", "Reese's Pieces"],
    wrongChoice3: ["Converse", "Southwest", "Cadillac", "Starburst"],
    pix: ["nike.jpg","united.jpg","bmw.png","skittles.jpg"]

    }};

$("#A").hide();
$("#B").hide();
$("#C").hide();
$("#D").hide();


$("#start").on("click", function(){
    
    resetVar(); 
    newQuestion();
    
    $("#start").hide();

    $("button").on("click", function(){
        
        console.log("onclick");
        clearInterval(interval);

        if (this.id === "A") {

            userChoice = answerA;

        } else if (this.id === "B") {
        
            userChoice = answerB;

        } else if (this.id === "C"){

            userChoice = answerC;
        }
        
        else {userChoice = answerD;};
        
        winLoss();
    });
});



function resetVariables(){

    userChoice = "";
    current = "";
    answerArray = [];
    randomArray = [];
    var answerA = "";
    var answerB = "";
    var answerC = "";
    var answerD = "";

};

function newQuestion(){

    resetVariables();

if (game.question.length === 0) { 
    
    $(".question").html('<img src="assets/images/gameover.jpg" width="100%" />');
    $("#A").hide();
    $("#B").hide();
    $("#C").hide();
    $("#D").hide();
    $(".gamestatus").hide();
    $("#start").show();

    
}

else {

    $("#A").show();
    $("#B").show();
    $("#C").show();
    $("#D").show();

current = Math.floor(Math.random() * game.question.length);
console.log(current);


answerArray = [game.correctAnswer[current], game.wrongChoice1[current], game.wrongChoice2[current], game.wrongChoice3[current]];

randomArray = answerArray.sort(function() { return 0.5 - Math.random() });

console.log(answerArray);

//$(".question").show();

$(".gamestatus").show();

$(".question").html("Which " + game.industry[current] + " slogan is " + game.question[current] +"?");

answerA = randomArray[0];
answerB = randomArray[1];
answerC = randomArray[2];
answerD = randomArray[3];

$("#A").html(answerA);
$("#B").html(answerB);
$("#C").html(answerC);
$("#D").html(answerD);

var count = 15;
interval = setInterval(function(){
  $(".gamestatus").html("<p3>" + count + "</p3>");
  count--;
  if (count === 0){
    clearInterval(interval);
    $(".gamestatus").html("<p3>Time's Up!</p3>");
    $(".question").hide();
    $(".question").empty();

    $("#A").hide();
    $("#B").hide();
    $("#C").hide();
    $("#D").hide();
    losses++;
    $(".wins").html("Correct Answers: "+ wins);
    $(".losses").html("Wrong Answers: "+ losses);
    resetGame();

}
}, 1000);
}
};

function remove() {
    console.log(game.question);

    game.question.splice((current),1);
    game.industry.splice((current),1);
    game.correctAnswer.splice((current),1);
    game.wrongChoice1.splice((current),1);
    game.wrongChoice2.splice((current),1);
    game.wrongChoice3.splice((current),1);
    game.pix.splice((current),1);
    console.log(game.question);

};

function resetGame(){
    var resetCount = 2;
    var resetInterval = setInterval(function(){
      resetCount--;
      if (resetCount === 0){
        newQuestion();
      }
    }, 1000);
};

function winLoss() { 

    $("#A").hide();
    $("#B").hide();
    $("#C").hide();
    $("#D").hide();

    if (userChoice === game.correctAnswer[current]) {

        $(".gamestatus").html("<p2>Correct! " + game.question[current] + " is the slogan for " + userChoice + ".</p2>");
        $(".question").html('<img src="assets/images/' + game.pix[current] + '" width="100%" />');
        wins++;
        remove();
        resetGame();

    } else {
      
        $(".gamestatus").html("<p3>Wrong Answer!</p3>");
        $(".question").html('<img src="assets/images/wrong.png" width="100%" />');
        losses++;
        remove();
        resetGame();
        
    };

    $(".wins").html("Correct Answers: "+ wins);
    $(".losses").html("Wrong Answers: "+ losses);
}
});











