const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function playAgain() {
    rl.question('\nDo you want to play again? \n 1. Yes \n 2. No \n Enter your choice :', (choice) => {
        switch (choice) {
            case '1':
                difficulty();
                break;
            case '2':
                console.log('Thank you for playing the game!');
                rl.close();
                break;
            default:
                console.log('Invalid choice');
                playAgain();
        }
    });
}

function randomNum() {
    return Math.floor(Math.random() * 100) + 1;
}

function easy() {
    const num = randomNum();
    let maxAttempts = 10;
    let attempts = 0;
    function guessing() {

        rl.question('Enter your guess: ', (guess) => {
            guess = parseInt(guess);
            attempts++;
            if (attempts < maxAttempts) {
                if (guess < num) {
                    console.log(`Incorrect! The number is greater than ${guess}.\n`);
                    guessing();
                } else if (guess > num) {
                    console.log(`Incorrect! The number is less than ${guess}.\n`);
                    guessing();
                } else if (guess === num) {
                    console.log(`Congratulations! You have guessed the correct number in ${attempts} attempts.`);
                    playAgain();
                }
            } else {
                console.log(`Sorry! You have exhausted all your attempts. The correct number is ${num}.`);
                playAgain();
            }
        });
    }

    guessing();
}

function medium() {
    const num = randomNum();
    let maxAttempts = 5;
    let attempts = 0;
    function guessing() {

        rl.question('Enter your guess: ', (guess) => {
            guess = parseInt(guess);
            attempts++;
            if (attempts < maxAttempts) {
                if (guess < num) {
                    console.log(`Incorrect! The number is greater than ${guess}.\n`);
                    guessing();
                } else if (guess > num) {
                    console.log(`Incorrect! The number is less than ${guess}.\n`);
                    guessing();
                } else if (guess === num) {
                    console.log(`Congratulations! You have guessed the correct number in ${attempts} attempts.`);
                    playAgain();
                }
            } else {
                console.log(`Sorry! You have exhausted all your attempts. The correct number is ${num}.`);
                playAgain();
            }
        });
    }

    guessing();
}

function hard() {
    const num = randomNum();
    let maxAttempts = 3;
    let attempts = 0;
    function guessing() {

        rl.question('Enter your guess: ', (guess) => {
            guess = parseInt(guess);
            attempts++;
            if (attempts < maxAttempts) {
                if (guess < num) {
                    console.log(`Incorrect! The number is greater than ${guess}.\n`);
                    guessing();
                } else if (guess > num) {
                    console.log(`Incorrect! The number is less than ${guess}.\n`);
                    guessing();
                } else if (guess === num) {
                    console.log(`Congratulations! You have guessed the correct number in ${attempts} attempts.`);
                    playAgain();
                }
            } else {
                console.log(`Sorry! You have exhausted all your attempts. The correct number is ${num}.`);
                playAgain();
            }
        });
    }

    guessing();

}



function difficulty() {
    const msg = `Please select the difficulty level: \n 1. Easy (10 chances)  \n 2. Medium (5 chances) \n 3. Hard (3 chances) \n`
    console.log(msg);

    rl.question('Enter your choice: ', (choice) => {
        switch (choice) {
            case '1':
                console.log(`\nGreat! You have selected the Easy difficulty level. \nLet's start the game!\n`);
                easy();
                break;
            case '2':
                console.log(`\nGreat! You have selected the Medium difficulty level. \nLet's start the game!\n`);
                medium();
                break;
            case '3':
                console.log(`\nGreat! You have selected the Hard difficulty level. \nLet's start the game!\n`);
                hard();
                break;
            default:
                console.log('Invalid choice');
                difficulty();
        }
    });
}


function start() {
    const msg = `Welcome to the Number Guessing Game! \nI'm thinking of a number between 1 and 100. \n`
    console.log(msg);
    difficulty();
}

start();
