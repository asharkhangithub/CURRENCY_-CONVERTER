#! /usr/bin/env node
import inquirer from "inquirer";
// const currency =["USD:1","PKR:260","INR:74"]
const currency = {
    USD: 1,
    PKR: 260,
    INR: 74.57,
    EUR: 0.19,
    GBP: 0.76
};
const answer = await inquirer.prompt([
    { message: "Enter from currency",
        type: "list",
        name: "from",
        choices: ["USD", "EUR", "GBP", "PKR", "INR"]
    },
    { message: "Enter to currency",
        type: "list",
        name: "to",
        choices: ["USD", "EUR", "GBP", "PKR", "INR"]
    },
    { message: "Enter amount",
        type: "number",
        name: "amount",
    }
]);
let fromamount = currency[answer.from];
let toamount = currency[answer.to];
let amount = [answer.amount];
let baseamount = amount / fromamount;
let convertion = baseamount * toamount;
console.log(fromamount);
console.log(toamount);
console.log(amount);
console.log(convertion);
