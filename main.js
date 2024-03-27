import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "enter your pin"
});
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!");
    let operationAnswer = await inquirer.prompt([{
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdrawl", "check-balance"]
        }]);
    if (operationAnswer.operation === "withdrawl") {
        let passBal = await inquirer.prompt([{
                name: "passAmount",
                type: "list",
                message: "choose amount",
                choices: [1000, 2000, 5000, 10000, "other"]
            }]);
        if (passBal.passAmount === 1000) {
            myBalance -= passBal.passAmount;
            console.log("Your remaining balance is: " + myBalance);
        }
        else if (passBal.passAmount === 2000) {
            myBalance -= passBal.passAmount;
            console.log("Your remaining balance is: " + myBalance);
        }
        else if (passBal.passAmount === 5000) {
            myBalance -= passBal.passAmount;
            console.log("Your remaining balance is: " + myBalance);
        }
        else if (passBal.passAmount === 10000) {
            myBalance -= passBal.passAmount;
            console.log("Your remaining balance is: " + myBalance);
        }
        else if (passBal.passAmount === "other") {
            let amountAns = await inquirer.prompt([{
                    name: "amount",
                    message: "please enter amount",
                    type: "number"
                }]);
            if (amountAns.amount >= myBalance) {
                console.log("your balance is insuffitiant for withdrawl");
            }
            else {
                myBalance -= amountAns.amount;
                console.log("withdraw: " + amountAns.amount);
                console.log("Your remaining balance is: " + myBalance);
            }
        }
    }
    else if (operationAnswer.operation === "check-balance") {
        console.log("your balance is: " + myBalance);
    }
}
else {
    console.log("invalid pin code!");
}
