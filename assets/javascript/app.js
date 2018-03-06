$(document).ready(function(){


//function to display question


var wins = 0;
var losses = 0;
var userChoice;
var current;
var answerArray;
var windowTimeout = 0;
var resetTimeout = 0;

var game = {


question: ["Just Do It", "Fly the Friendly Skies", "The Ultimate Driving Machine","Taste the Rainbow"],
industry: ["shoe company's", "airline's", "car maker's","candy's"],
correctAnswer: ["Nike", "United", "BMW","Skittles"],
wrongChoice1: ["Reebok", "Delta", "Lexus", "M&M's"],
wrongChoice2: ["Adidas", "American", "Ford", "Reese's Pieces"],
wrongChoice3: ["Converse", "Southwest", "Cadillac", "Starburst"]

}
$("#start").on("click", function(){
    newQuestion();
    $("#start").hide();

});

function newQuestion(){
  

var current = Math.floor(Math.random() * game.question.length);
console.log(current);
    
answerArray = [game.correctAnswer[current], game.wrongChoice1[current], game.wrongChoice2[current], game.wrongChoice3[current]];

var randomArray = answerArray.sort(function() { return 0.5 - Math.random() });

console.log(answerArray);

$(".question").show();

$(".gamestatus").show();

$(".question").html("Which " + game.industry[current] + " slogan is " + game.question[current] +"?");

var answerA = randomArray[0];
var answerB = randomArray[1];
var answerC = randomArray[2];
var answerD = randomArray[3];

$("#A").html(answerA);
$("#B").html(answerB);
$("#C").html(answerC);
$("#D").html(answerD);



var count = 15;
var interval = setInterval(function(){
  $(".gamestatus").html("Time Left: " + count + " seconds.");
  count--;
  if (count === 0){
    clearInterval(interval);
    $(".gamestatus").html("Time's Up");
    $(".question").hide();
    $(".question").empty();

    $("#A").empty();
    $("#B").empty();
    $("#C").empty();
    $("#D").empty();
    losses++;
    resetGame();
  }
}, 1000);




$("button").on("click", function(){
    
    clearInterval(interval);


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

function resetGame(){

    var resetcount = 2;
    var interval = setInterval(function(){
      count--;
      if (count === 0){
      newQuestion();
      }
    }, 1000);



};

function winLoss() { 


    if (userChoice === game.correctAnswer[current]) {


        $(".gamestatus").html("Correct! " + game.question[current] + " is the slogan for " + userChoice + ".");
        resetGame();
        wins++;


    } else {

        $(".gamestatus").html("Wrong!!");
      
        losses++;
    };

    resetGame();


    $(".wins").html("Correct Answers: "+ wins);
    $(".losses").html("Wrong Answers: "+ losses);

}


};



});









