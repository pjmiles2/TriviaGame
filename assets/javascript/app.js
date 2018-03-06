$(document).ready(function(){


//set global variables
var wins;
var losses;
var userChoice;
var current;
var answerArray;
var randomArray;
var interval;
var count;
var game;

// game object and score in a function so it can be reset at the end of the game.
function resetVar(){

    game = {

    question: ['"Just Do It"','"Fly the Friendly Skies"', '"The Ultimate Driving Machine"','"Taste the Rainbow"','"They&#39;re GR-R-REAT!"', '"It Keeps Going, and Going, and Going..."','"Life&#39;s Messy, Clean it Up"','"I&#39;m Lovin it"','"Taste the Feeling"','"Once You Pop, You Can&#39;t Stop"'],
    industry: ["shoe company", "airline", "car maker","candy","cereal","battery brand","vacuum brand","fast food restaurant", "soft drink","snack food"],
    correctAnswer: ["Nike", "United", "BMW","Skittles","Frosted Flakes","Energizer","Bissell","McDonald's","Coca-Cola","Pringles"],
    wrongChoice1: ["Reebok", "Delta", "Lexus", "M&M's", "Rice Krispies","Duracell","Hoover","In-n-Out","Pepsi","Lays"],
    wrongChoice2: ["Adidas", "American", "Ford", "Reese's Pieces", "Cocoa Puffs","Rayovac","Dyson","Burger King","Mountain Dew","Utz"],
    wrongChoice3: ["Converse", "Southwest", "Cadillac", "Starburst", "Fruity Pebbles","Eveready","Eureka","Taco Bell","Dr.Pepper","Ruffles"],
    pix: ["nike.jpg","united.jpg","bmw.png","skittles.jpg","frostedflakes.jpg","energizer.jpg","bissell.jpg","mcdonalds.svg","coke.svg","pringles.png"]

    }

    wins=0;
    losses=0;


};

//hiding answer buttons until a question is posted
$("#A").hide();
$("#B").hide();
$("#C").hide();
$("#D").hide();

//start button to start the game, then it disappears
$("#start").on("click", function(){
    
    resetVar(); 
    newQuestion();
    $(".wins").html("Correct Answers: "+ wins);
    $(".losses").html("Wrong Answers: "+ losses);
    $("#start").hide();
});

//event listeners for answer buttons
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


//function to reset all the variables between questions (i put this here because i was having issues with restarting the game but im not sure if it is necessary)

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

//function to pull up a new question
function newQuestion(){
    
    $(".gamestatus").hide();
    $(".clock").html("");
    $(".clock").show();

    resetVariables();
    clearInterval(interval);
//test to see if there are any questions left, if not the game is over and there is a button to restart    
if (game.question.length === 0) { 
    
    $(".question").html('<img src="assets/images/gameover.jpg" width="100%" />');
    $("#A").hide();
    $("#B").hide();
    $("#C").hide();
    $("#D").hide();
    $("#start").show();

    
}
//if there are still questions left, the answer buttons will show
else {

    $("#A").show();
    $("#B").show();
    $("#C").show();
    $("#D").show();
//assigns a random number based on the number of questions
current = Math.floor(Math.random() * game.question.length);
console.log(current);

//uses the random number from above to get the guesses
answerArray = [game.correctAnswer[current], game.wrongChoice1[current], game.wrongChoice2[current], game.wrongChoice3[current]];

//randomizes guesses so the answer isnt always A
randomArray = answerArray.sort(function() { return 0.5 - Math.random() });

console.log(answerArray);

//displays question based on the current variable assigned above
$(".question").html(game.question[current] + " is the slogan for which " + game.industry[current] + "?");

//assigns variables to the randomized guesses in the array
answerA = randomArray[0];
answerB = randomArray[1];
answerC = randomArray[2];
answerD = randomArray[3];

//attaches the text from the variables to the buttons
$("#A").html(answerA);
$("#B").html(answerB);
$("#C").html(answerC);
$("#D").html(answerD);

//countdown clock for each question. when the time runs out a message displays the time is up and the correct answer. the buttons disappear and the losses variable is increased. 
count = 15;
interval = setInterval(function(){
  $(".clock").html("<p3>" + count + "</p3>");
  count--;
  if (count === -1){
    clearInterval(interval);
    $(".clock").hide();
    $(".gamestatus").show();

    $(".gamestatus").html("<p2>Time's Up!<br>The correct answer is " + game.correctAnswer[current] + "</p2>");

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

//removes the last set of variables from the arrays in the game object so they are not repeated in the game
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


//resets the game after a 2 second delay so the user has a chance to view the correct answer.
function resetGame(){
    var resetCount = 2;
    
    var resetInterval = setInterval(function(){
      resetCount--;
      if (resetCount === 0){
        newQuestion();
      }
    }, 1000);
};


//after the user clicks their guess, the buttons are hidden, the function uses an if else statement to determine if the user's choice matched the correctAnswer array in the game object.
function winLoss() { 

    $("#A").hide();
    $("#B").hide();
    $("#C").hide();
    $("#D").hide();

    if (userChoice === game.correctAnswer[current]) {
        $(".gamestatus").show();

        $(".gamestatus").html("<p2>Correct! " + game.question[current] + " is the slogan for " + userChoice + ".</p2>");
        $(".question").html('<img src="assets/images/' + game.pix[current] + '" width="100%" />');
        $(".clock").hide();
        wins++;
        remove();
        resetGame();

    } else {
        $(".gamestatus").show();

        $(".gamestatus").html("<p2>Wrong! The correct answer is " + game.correctAnswer[current] + "</p2>");
        $(".question").html('<img src="assets/images/wrong.png" width="100%" />');
        $(".clock").hide();
        losses++;
        remove();
        resetGame();
        
    };
//tallys wins and losses
    $(".wins").html("Correct Answers: "+ wins);
    $(".losses").html("Wrong Answers: "+ losses);
}
});











