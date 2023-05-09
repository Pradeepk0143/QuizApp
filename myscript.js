var questions = [{
    question: "What is the baby of a Moth known as?",
    choices: ["baby", "infant", "kit", "larva"],
    correctAnswer: 3
}, {
    question: "What is the adult of a kid called?",
    choices: ["calf", "doe", "goat", "chick"],
    correctAnswer: 2
}, {
    question: "What is the young of bufallo called?",
    choices: ["baby", "infant", "kit", "larva"],
    correctAnswer: 0
}, {
    question: "What a baby aligator called?",
    choices: ["baby", "gator", "kit", "larva"],
    correctAnswer: 2
}, {
    question: "What is a baby goose called?",
    choices: ["gooser", "infant", "kit", "larva"],
    correctAnswer: 1
}, {
    question: "What is a baby Hamster called?",
    choices: ["baby", "infant", "kit", "larva"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswer = 0;
var quizOver = false;

$(document).ready(function()  {
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function() {
        if (!quizOver) {
            value = $ ("input[type='radio']: checked").val();
            if (value == undefined) {
                $(document).find("quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();

            } else {
                $(document).find(".quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    }
}
