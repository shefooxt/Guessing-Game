const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);

    if (guess === randomNumber) {
        displayMessage('Congratulations! You guessed the correct number.');
        disableInputAndButton();
    } else {
        attempts--;
        if (attempts > 0) {
            const message = guess > randomNumber ? 'Try lower!' : 'Try higher!';
            displayMessage(`Incorrect guess. ${message} ${attempts} attempts left.`);
        } else {
            displayMessage(`Game over! The correct number was ${randomNumber}.`);
            disableInputAndButton();
        }
    }
}

function displayMessage(msg) {
    document.getElementById('message').innerText = msg;
}

function disableInputAndButton() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}