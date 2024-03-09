const randomNumber = Math.floor(Math.random() * 100) + 1;
let chances = 5;

function checkGuess() {
    // Decrement chances on each guess
    chances--;

    // Get user's guess from input field
    const userGuess = parseInt(document.getElementById('number').value);

    // Get message paragraph element
    const messageElement = document.getElementById('message');

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        messageElement.textContent = 'Congratulations! You guessed the correct number!';
        // Change button color to green for correct guesses
        buttonElement.style.backgroundColor = 'green';
    } else if (chances === 0) {
        messageElement.textContent = 'Sorry, you have run out of chances. The correct number was ' + randomNumber + '.';
        // Disable the input and button after running out of chances
        document.getElementById('number').disabled = true;
        document.querySelector('button').disabled = true;
    } else if (userGuess > randomNumber) {
        messageElement.textContent = 'Your guess is too high. Try again!';
    } else {
        messageElement.textContent = 'Your guess is too low. Try again!';
        // Change button color to black for wrong guesses
        buttonElement.style.backgroundColor = 'black';
    }
}