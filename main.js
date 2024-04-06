#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    JPY: 111.36, // Japanese Yen
    CAD: 1.25, // Canadian Dollar
    AUD: 1.30, // Australian Dollar
    CNY: 6.45, // Chinese Yuan
    CHF: 0.93, // Swiss Franc
    RUB: 75.12, // Russian Ruble
};
async function runConverter() {
    console.log(chalk.greenBright("Welcome to My Currency Converter"));
    let userAnswer = await inquirer.prompt([
        {
            name: "from",
            message: chalk.greenBright("Choose the Currency you want to convert:"),
            type: "list",
            choices: Object.keys(currency),
        },
        {
            name: "to",
            message: chalk.greenBright("Choose the Currency you want to convert in:"),
            type: "list",
            choices: Object.keys(currency),
        },
        {
            name: "amount",
            type: "number",
            message: chalk.yellowBright("Enter the amount you want to convert:"),
        }
    ]);
    let fromCurrency = userAnswer.from;
    let toCurrency = userAnswer.to;
    let amount = userAnswer.amount;
    let fromRate = currency[fromCurrency];
    let toRate = currency[toCurrency];
    let baseAmount = amount / fromRate; // Convert the amount to base currency (USD)
    let convertedAmount = baseAmount * toRate; // Convert the base amount to the target currency
    //console.log(chalk.green(`Your converted amount is: ${convertedAmount.toFixed(2)} ${toCurrency}`));
    console.log(chalk.green(`Your converted amount is: ${chalk.bold(convertedAmount.toFixed(2))} ${toCurrency}`));
    console.log(chalk.bgGreen("Thank you!"));
}
runConverter();
