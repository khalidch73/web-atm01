import inquirer from "inquirer";
import chalk from "chalk"; 
import showBanner from "node-banner"; 
import gradient from "gradient-string";
import { User, generateRandomUserData } from './user.js';
// ATM functionality
console.log(chalk.bold(gradient.rainbow("Welcome to Web ATM"))); 
setTimeout(() => {
    startATM
}, 1000);
export async function startATM() {
  const users = generateRandomUserData();

  const login = await inquirer.prompt([
    {
      type: 'input',
      name: 'id',
      message: 'Enter your user ID:',
    },
    {
      type: 'password',
      name: 'pin',
      message: 'Enter your PIN:',
      mask: '*',
    },
  ]);

  const user = users.find((u) => u.id === login.id && u.pin === login.pin);

  if (!user) {
    console.log(chalk.red('Invalid user ID or PIN. Please try again.'));
    return;
  }

  await showBanner('Web ATM', gradient.rainbow(`Welcome, ${user.id}! Your balance is Rs.${user.balance}.`));

  while (true) {
    const choice = await inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Choose an option:',
      choices: ['Check Balance', 'Deposit', 'Withdraw', 'Exit'],
    });

    switch (choice.option) {
      case 'Check Balance':
        console.log(chalk.green(`Your balance is Rs.${user.balance}.`));
        break;
      case 'Deposit':
        const depositAmount = await inquirer.prompt({
          type: 'number',
          name: 'amount',
          message: 'Enter the deposit amount:',
          validate: (input) => {
            if (isNaN(input) || input <= 0) {
              return 'Please enter a valid amount greater than 0.';
            }
            return true;
          },
        });
        user.balance += depositAmount.amount;
        console.log(chalk.green(`Deposited Rs.${depositAmount.amount}. Your new balance is Rs.${user.balance}.`));
        break;
      case 'Withdraw':
        const withdrawAmount = await inquirer.prompt({
          type: 'number',
          name: 'amount',
          message: 'Enter the withdrawal amount:',
          validate: (input) => {
            if (isNaN(input) || input <= 0 || input > user.balance) {
              return 'Please enter a valid amount greater than 0 and less than your balance.';
            }
            return true;
          },
        });
        user.balance -= withdrawAmount.amount;
        console.log(chalk.green(`Withdrawn Rs.${withdrawAmount.amount}. Your new balance is Rs.${user.balance}.`));
        break;
      case 'Exit':
        console.log(chalk.blue(chalk.bold('Thank you for using our ATM. Goodbye!')));
        return;
    }
  }
}
