#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 100000; //dollar
let myPin = 1234;
console.log(chalk.yellow(`\b-------------- MY ATM ---------------\n `));
console.log(chalk.cyan(`   Welcome to ATM!   `));
console.log(chalk.bgYellow(`Your account is current account: `));
let pinAnswer = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "enter your pin"
});
if (pinAnswer.pin === myPin) {
    console.log(chalk.bold("correct pin code!"));
    let operationAnswer = await inquirer.prompt([{
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdrawl", "check-balance", "fast-cash"]
        }]);
    if (operationAnswer.operation === "fast-cash") {
        let fast = await inquirer.prompt([{
                name: "cash",
                type: "list",
                message: "select your fast cash amount",
                choices: [1000, 2000, 5000, 10000, "other"]
            }]);
        if (fast.cash === 1000) {
            myBalance -= fast.cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else if (fast.cash === 2000) {
            myBalance -= fast.cash;
            console.log(chalk.bgBlueBright(`Your remaining balance is: ${myBalance}`));
        }
        else if (fast.cash === 5000) {
            myBalance -= fast.cash;
            console.log(chalk.bgBlueBright(`Your remaining balance is: ${myBalance}`));
        }
        else if (fast.cash === 10000) {
            myBalance -= fast.cash;
            console.log(chalk.bgBlueBright(`Your remaining balance is: ${myBalance}`));
        }
        else if (fast.cash === "other") {
            let amountAns = await inquirer.prompt([{
                    name: "amount",
                    message: "please enter amount",
                    type: "number"
                }]);
            if (amountAns.amount >= myBalance) {
                console.log("your balance is insuffitiant for withdrawl");
                console.log(`\n please select between 1 to ${myBalance}`);
            }
            else {
                myBalance -= amountAns.amount;
                console.log("withdraw: " + amountAns.amount);
                console.log(chalk.bgBlueBright(`Your remaining balance is: ${myBalance}`));
            }
        }
    }
    if (operationAnswer.operation === "withdrawl") {
        let passBal = await inquirer.prompt([{
                name: "passAmount",
                type: "list",
                message: "choose amount",
                choices: [1000, 2000, 5000, 10000, "other"]
            }]);
        if (passBal.passAmount === 1000) {
            myBalance -= passBal.passAmount;
            console.log(chalk.bgBlueBright(`Your remaining balance is: ${myBalance}`));
        }
        else if (passBal.passAmount === 2000) {
            myBalance -= passBal.passAmount;
            console.log(chalk.bgBlueBright(`Your remaining balance is: ${myBalance}`));
        }
        else if (passBal.passAmount === 5000) {
            myBalance -= passBal.passAmount;
            console.log(chalk.bgBlueBright(`Your remaining balance is: ${myBalance}`));
        }
        else if (passBal.passAmount === 10000) {
            myBalance -= passBal.passAmount;
            console.log(chalk.bgBlueBright(`Your remaining balance is: ${myBalance}`));
        }
        else if (passBal.passAmount === "other") {
            let amountAns = await inquirer.prompt([{
                    name: "amount",
                    message: "please enter amount",
                    type: "number"
                }]);
            if (amountAns.amount >= myBalance) {
                console.log("your balance is insuffitiant for withdrawl");
                console.log(`\n please select between 1 to ${myBalance}`);
            }
            else {
                myBalance -= amountAns.amount;
                console.log("withdraw: " + amountAns.amount);
                console.log(chalk.bgBlueBright(`Your remaining balance is: ${myBalance}`));
            }
        }
    }
    else if (operationAnswer.operation === "check-balance") {
        console.log(chalk.green(`your balance is: ${myBalance}`));
    }
}
else {
    console.log(chalk.red("invalid pin code!"));
}
