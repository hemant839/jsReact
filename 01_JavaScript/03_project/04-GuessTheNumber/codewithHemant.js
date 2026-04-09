let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let lowerBound = 1;
let upperBound = 100;
let gameOver = false;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const rangeDisplay = document.getElementById("range");
const statusDisplay = document.getElementById("status");

guessButton.addEventListener("click", playGame);
guessInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        playGame();
    }
});

function playGame() {
    if (gameOver) {
        resetGame();
        return;
    }

    const userInput = parseInt(guessInput.value);
    feedback.className = "";

    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        feedback.textContent = "❌ Please enter a valid number between 1 and 100!";
        feedback.classList.add("invalid");
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userInput === randomNumber) {
        feedback.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempt${attempts > 1 ? 's' : ''}!`;
        feedback.classList.add("correct");
        statusDisplay.textContent = "✅";
        guessButton.textContent = "Play Again";
        guessInput.disabled = true;
        gameOver = true;
    } else if (userInput < randomNumber) {
        feedback.textContent = `📈 Too low! Try a higher number.`;
        feedback.classList.add("too-low");
        lowerBound = Math.max(lowerBound, userInput + 1);
        statusDisplay.textContent = "🔍";
        updateRange();
    } else {
        feedback.textContent = `📉 Too high! Try a lower number.`;
        feedback.classList.add("too-high");
        upperBound = Math.min(upperBound, userInput - 1);
        statusDisplay.textContent = "🔍";
        updateRange();
    }

    guessInput.value = "";
    guessInput.focus();
}

function updateRange() {
    rangeDisplay.textContent = `${lowerBound}-${upperBound}`;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    lowerBound = 1;
    upperBound = 100;
    gameOver = false;
    
    attemptsDisplay.textContent = 0;
    rangeDisplay.textContent = "1-100";
    statusDisplay.textContent = "🎮";
    feedback.textContent = "";
    feedback.className = "empty";
    guessInput.value = "";
    guessInput.disabled = false;
    guessButton.textContent = "Guess";
    guessInput.focus();
}