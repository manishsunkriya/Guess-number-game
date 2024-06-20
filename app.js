let max = prompt(`Enter the max value`);

const random = Math.floor(Math.random() * max + 1);

let guess = prompt(`Guess the number`);

while(true){
    if(guess == `quit`){
        console.log(`user quit the game 🤚`);
        break;
    }
    if(guess == random){
        console.log(`Congratulations. You guess the right number 🎉`);
        break;
    }
    else if(guess < random){
        guess = prompt(`You guess the too small number. Please try again ⬆️`)
    }
    else{
        guess = prompt(`You guess the too large number. Please try again ⬇️`)
    }
}