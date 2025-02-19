#! /usr/bin/env node

import inquirer from "inquirer";


// 1) computer will generate a random number - done

// 2) user input for guessing number - done

// 3) compare user input with computer generated number and show result


const randomNumber =Math.floor(Math.random() * 6+ 1);


const answers = await inquirer.prompt([
    {
         name:"userGuessNumber",
         type:"number",
         message:"please guess a number between 1-6:",
    },
]);

if( answers.userGuessNumber === randomNumber){
    console.log("congtratulation! you guessed right number.")
}else{
    console.log("you guessed wrong number")
}

