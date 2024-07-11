// selecting elements button from the html docs
const radioInputs = document.querySelectorAll('input[name="quiz"]');
const feedback = document.querySelector("#feedback");
const submitButton = document.getElementById("submit-answer");

function checkAnswer() {
    let userAnswer = null;

    // retrieving user's input
    radioInputs.forEach(radio => {
        if (radio.checked) {
            userAnswer = radio.value;
        }
    });

    // comparing user's input with right answer
    let correctAnswer = "4";
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

submitButton.addEventListener("click", checkAnswer);
