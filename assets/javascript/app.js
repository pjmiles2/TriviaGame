$(document).ready(function(){

var wins;
var losses;
var userChoice;
var current;
var answerArray;
var randomArray;
var interval;

var game;


function resetVar(){

    game = {

    question: ['"Just Do It"','"Fly the Friendly Skies"', '"The Ultimate Driving Machine"','"Taste the Rainbow"','"They&#39;re GR-R-REAT!"', '"It Keeps Going, and Going, and Going..."','"Life&#39;s Messy, Clean it Up"','"I&#39;m Lovin it"','"Taste the Feeling"','"Once You Pop, You Can&#39;t Stop"'],
    industry: ["shoe company", "airline", "car maker","candy","cereal","battery brand","vacuum brand","fast food restaurant", "soft drink","snack food"],
    correctAnswer: ["Nike", "United", "BMW","Skittles","Frosted Flakes","Energizer","Bissell","McDonald's","Coca-Cola","Pringles"],
    wrongChoice1: ["Reebok", "Delta", "Lexus", "M&M's", "Rice Krispies","Duracell","Hoover","In-n-Out","Pepsi","Lays"],
    wrongChoice2: ["Adidas", "American", "Ford", "Reese's Pieces", "Cocoa Puffs","Rayovac","Dyson","Burger King","Mountain Dew","Utz"],
    wrongChoice3: ["Converse", "Southwest", "Cadillac", "Starburst", "Fruity Pebbles","Eveready","Eureka","Taco Bell","Dr.Pepper","Ruffles"],
    pix: ["nike.jpg","united.jpg","bmw.png","skittles.jpg","frostedflakes.jpg","energizer.jpg","bissell.png","mcdonalds.png","coke.jpg","pringles.png"]

    }

    wins=0;
    losses=0;


};

$("#A").hide();
$("#B").hide();
$("#C").hide();
$("#D").hide();


$("#start").on("click", function(){
    
    resetVar(); 
    newQuestion();
    $(".wins").html("Correct Answers: "+ wins);
    $(".losses").html("Wrong Answers: "+ losses);
    $("#start").hide();
});
    $(".btn-primary").on("click", function(){
        
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

$(".question").html(game.question[current] + " is the slogan for which " + game.industry[current] + "?");

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
    $(".gamestatus").html("<p2>Time's Up!<br>The correct answer is " + game.correctAnswer[current] + "</p2>");
   // $(".question").hide();
   // $(".question").empty();

    $("#A").hide();
    $("#B").hide();
    $("#C").hide();
    $("#D").hide();
    losses++;
    $(".wins").html("Correct Answers: "+ wins);
    $(".losses").html("Wrong Answers: "+ losses);
    remove();
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
      
        $(".gamestatus").html("<p2>Wrong! The correct answer is " + game.correctAnswer[current] + "</p2>");
        $(".question").html('<img src="assets/images/wrong.png" width="100%" />');
        losses++;
        remove();
        resetGame();
        
    };

    $(".wins").html("Correct Answers: "+ wins);
    $(".losses").html("Wrong Answers: "+ losses);
}
});











