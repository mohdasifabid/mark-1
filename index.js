var readlineSync = require("readline-sync");

score = 0;

var userName = readlineSync.question("Hey! tell me your name? ");

console.log("______");

console.log("Okay dear " + userName + "!  You are here! So let me welcome you. ");

console.log("______");

console.log("My name is Asif, if you are my friend lets check, how well do you know me! ")
console.log("______");

function play(question, answer) {
    var userAns = readlineSync.question(question);

    if (userAns.toLowerCase() === answer.toLowerCase()) {
        console.log(" Right Answer ")
        score = score + 1;
    } else {
        console.log("uff!, its a wrong answer and the right answer is " + answer)
        score = score - 1;
    }
    console.log(score + " is your current score! ");
    console.log("______");
}


var questions = [{
    question: "From which city of UP I'm? ",
    answer: "Muzaffarnagar"
}, {
    question: "Which university, I went for my undergraduate study? ",
    answer: "Delhi University"
}, {
    question: "What is my favarite place to travel? ",
    answer: "Uttrakhand"
}, {
    question: "Do you think I'm wasting your time? ",
    answer: "Yes"

}];


for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
}

if (score <= 0) {
    console.log("you fool, get the hell out of here! you did bad and scored " + score)
} else {
    console.log(userName + " it was really fun, we should do it again. You did well and scored " + score)
}


