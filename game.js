import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10 + 1);
let guessingNumber = await inquirer.prompt([
    {
        message: "Enter Your Number Between 1-10:",
        type: "number",
        name: "YourGuess",
    },
]);
//conditional test
if (guessingNumber.YourGuess === randomNumber) {
    console.log("congtratulations! You Guess Is Right...........");
}
else {
    console.log("Oops! You Guess Is Wrong....");
}
