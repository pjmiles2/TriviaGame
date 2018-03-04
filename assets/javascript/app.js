//function to display question


var counter = 0;
var wins = 0;
var losses =0;
var game = {

question: ["Arizona", "California", "Illinois"],
correctAnswer: ["Phoenix", "Sacramento", "Springfield"],
wrongChoice1: ["Flagstaff", "San Diego", "Chicago"],
wrongChoice2: ["Tucson", "San Francisco", "Champaign"],
wrongChoice3: ["Mesa", "Los Angeles", "Peoria"]

}



var current = Math.floor(Math.random() * game.question.length);
console.log(current);

function newQuestion(){

answerArray = [game.correctAnswer[current], game.wrongChoice1[current], game.wrongChoice2[current], game.wrongChoice3[current]];


var randomArray = answerArray.sort(function() { return 0.5 - Math.random() });

console.log(answerArray);


$(".question").html("What is the capital of " + game.question[current] +"?");

$("#A").append("A. " + randomArray[0]);
$("#B").append("B. " + randomArray[1]);
$("#C").append("C. " + randomArray[2]);
$("#D").append("D. " + randomArray[3]);

}

newQuestion();
