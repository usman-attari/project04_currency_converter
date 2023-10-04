import inquirer from "inquirer";
let Convertion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    },
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        massage: "Select Your Currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        massage: "Select Your Convertion Currency: "
    },
    {
        type: "list",
        name: "amount",
        massage: "Enter Your Convertion Amount: "
    },
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = Convertion[from][to] * amount;
    console.log(`'your convertion from ${from} to ${to} is ${result}'`);
}
else {
    console.log(" invalid Inputs");
}
