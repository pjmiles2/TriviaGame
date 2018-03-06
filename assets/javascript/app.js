$(document).ready(function(){


//function to display question


var wins = 0;
var losses = 0;
var userChoice;
var current;
var answerArray;
var randomArray;
var interval;

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
        
            else {userChoice = answerD;
            };
        

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
    for (var i = answerArray.length; i > 0; i--) {
 
        answerArray.pop();
        
       }
       console.log(answerArray);
       console.log(randomArray);
};


function newQuestion(){

    console.log('newQuestion');
resetVariables();

current = Math.floor(Math.random() * game.question.length);
console.log(current);
    
answerArray = [game.correctAnswer[current], game.wrongChoice1[current], game.wrongChoice2[current], game.wrongChoice3[current]];

randomArray = answerArray.sort(function() { return 0.5 - Math.random() });

console.log(answerArray);

$(".question").show();

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

/*$("button").on("click", function(){
    
    console.log("onclick");
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
    

     winLoss();


});*/

var count = 15;
interval = setInterval(function(){
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
    console.log('new question 1');
    newQuestion();
  }
}, 1000);








};

function resetGame(){
    console.log('reset');
    var resetCount = 2;
    var resetInterval = setInterval(function(){
      resetCount--;
      if (resetCount === 0){
          console.log('new question 2');
        newQuestion();
      }
    }, 1000);



};

function winLoss() { 

    console.log('winloss');
    if (userChoice === game.correctAnswer[current]) {


        $(".gamestatus").html("Correct! " + game.question[current] + " is the slogan for " + userChoice + ".");
        userChoice = "";
        wins++;
        resetGame();


    } else {

        $(".gamestatus").html("Wrong!!");
        losses++;
        resetGame();

    };



    $(".wins").html("Correct Answers: "+ wins);
    $(".losses").html("Wrong Answers: "+ losses);

}



});









