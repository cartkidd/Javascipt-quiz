//global variables
let question_count = 0;
let correct_answer_tag = "";
let right_answer = "";

//listen for quiz start event
startQuiz();

//this function starts the quiz
function startQuiz(){
    const start_button = document.getElementById("start_button")

    start_button.onclick = ()=>{
        question_count = 0;
        console.log("restarted quiz!");
        showQuestions(question_count); 
    }

    answerEngine();    

}

// this function gets questions from questions.js
function showQuestions(index){
    const question_text = document.querySelector(".question_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    question_text.innerHTML = que_tag; //adding new span tag inside que_tag
    
}

//this function listens to clicks and moves the quiz along
function answerEngine(){

    //tag the 'correct' button
    findCorrectAnswer(question_count);

    //tag all the 'wrong' button answers
    wrong_answers = document.getElementsByClassName("button");
        for (var i = 0; i < wrong_answers.length; i++) {
            wrong_answers[i].addEventListener("click", function () {
                console.log("incorrect answer!");
                question_count++;
                showQuestions(question_count);
                resetAnswers();
                findCorrectAnswer(question_count);
                console.log(question_count);
            });
        }

    // tag correct answer uniquely and listen for click   
    right_answer = document.getElementById(correct_answer_tag)
 
    right_answer.onclick = ()=>{
        question_count++;
        console.log("correct answer!");
        showQuestions(question_count); 
        resetAnswers();
        findCorrectAnswer(question_count);
        console.log(question_count);
    }

};

//this function labels the correct answer button with a 'correct' class
function findCorrectAnswer(question_number){

    let correct_answer_number = questions[question_number].answer.toString(); //getting correct answer from array

    correct_answer_tag = "a" + correct_answer_number

    document.getElementById(correct_answer_tag).className =
       document.getElementById(correct_answer_tag).className.replace
          ( /(?:^|\s)button(?!\S)/g , '' )

    document.getElementById(correct_answer_tag).className += "correct_button";

    console.log("the correct answer is:  " + document.getElementById(correct_answer_tag).innerHTML)

    right_answer = document.getElementById(correct_answer_tag)


};

function resetAnswers(){

 document.getElementById(correct_answer_tag).className =
       document.getElementById(correct_answer_tag).className.replace
          ( /(?:^|\s)correct_button(?!\S)/g , '' )

document.getElementById(correct_answer_tag).className += "button";

}

/* must-haves:

1. pull in answer text from questions.js and apply to answer buttons (create new function similar to the showQuestions function)

2. figure out how to 'end' the quiz and display to user "quiz over!" -- should be done with an if statement

3. figure out how to alert the user to 'correct answers' (currently done in console, will need to transition to javascript)

4. create timer and have it running in the top, have it reset when you push 'start quiz'

*** nice-to-haves:

5. subtract time from timer for wrong answer

6. add high score save capability

*/