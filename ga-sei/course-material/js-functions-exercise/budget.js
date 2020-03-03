const fs = require('fs');

function transactionsTotal(transactions) {
  let total = 0;

  for(let i = 0; i < transactions.length; i++) {
    //total = total + transactions[i]
    total += transactions[i];
  }

  return total;
}


/* Step 1
 *
 * Write the definition of showBudget to 
 * print the budget in the following manner.
 *
 *   Budget: $123.45
 *
 *   Amnt Total
 *   100  100
 *   10   110
 *   -5   105
 *
 * Use getBudgetAmount to get the amount of the budget
 * Use getTransactions to get the array of transactions
 *
 */
function showBudget(budget) {
  //100.02
  let budgetAmount = getBudgetAmount(budget);

  //[100, 10, -5, 70, -30]
  let transactions = getTransactions(budget);

  console.log(`Budget: $ ${budgetAmount}`)

  let total = 0;

  console.log(`Transaction Amnt, Total`)
  for(let i = 0; i < transactions.length; i++) {

    //total = total + transactions[i]
    total += transactions[i];

    console.log(`${transactions[i]}, ${total}`)
  }

}

/* Step 2
 *
 * Write a function called checkBudgetBalance using the following
 * block diagram:
 *
 * budget  |--------------------| true/false
 * =======>| checkBudgetBalance | ============>
 *         |                    |
 *         |--------------------|
 *
 * Use getBudgetAmount to get the amount of the budget
 * Use getTransactions to get the array of transactions
 *
 */
function checkBudgetBalance(budget) {
  let budgetAmount = getBudgetAmount(budget);
  let transactions = getTransactions(budget);

  return budgetAmount > transactionsTotal(transactions);
}

/* Step 3
 *
 * Write a function called addTransaction using the following
 * block diagram:
 *
 * budget  |-----------------| budget
 * =======>| addTransaction  | ============>
 *         |                 |
 * number  |                 |
 * =======>|-----------------|
 *
 * number is the amount of the new transaction
 *
 * Use `return updateTransactions(budget, ...)` to save the list of
 * transactions
 * Use getTransactions to get the array of transactions
 *
 */
function addTransaction(budget, amount) {
  let transactions = getTransactions(budget);
  transactions.push(amount);

  return updateTransactions(budget, transactions);
}

/* Step 4
 *
 * Write a function called setBudgetAmount using the following
 * block diagram:
 *
 * budget  |-----------------| budget
 * =======>| setBudgetAmount | ============>
 *         |                 |
 * number  |                 |
 * =======>|-----------------|
 *
 * number is the amount to add to the current budget amount
 *
 * Use getBudgetAmount to get the amount of the budget
 * Use getTransactions to get the array of transactions
 * Use updateTransactions to save the list of transactions
 * Use updateBudgetAmount to save the list of transactions
 *
 */
function setBudgetAmount(budget, amount) {
  return updateBudgetAmount(budget, amount);
}

function updateBudgetAmount(budget, amount) {
  budget.budgetAmount = amount;
  return budget;
}

function updateTransactions(budget, transactions) {
  budget.transactions = transactions;
  return budget;
}

const getBudgetAmount = (budget) => budget.budgetAmount | 0;
const getTransactions = (budget) => budget ?  budget.transactions : [];

const TRANSFP = 'budget.json'

const saveBudget = (budget) => 
  fs.writeFileSync(TRANSFP, JSON.stringify(budget))

const importJSONFile = (filePath) =>
  new Promise((resolve, reject) =>
    fs.readFile(filePath, (err, data) =>
        err 
        ? reject(err)
        : resolve(JSON.parse(data))
    )
  )

const toNumber = (string) => Number.parseInt(string)

if(process.argv[2] === '-h') {
  console.log('Usage: node ./budget.js CMD')
  console.log('')
  console.log('CMD is one of:')
  console.log('')
  console.log('show')
  console.log('  show the budget')
  console.log('add NUMBER')
  console.log('  add a transaction with the amount NUMBER')
  console.log('set NUMBER')
  console.log('  set the budget amount by adding NUMBER to the current budget amount')
  console.log('check')
  console.log('  check whether the sum of the transactions is over or under the current budget amount')
  console.log('')
  console.log('Examples')
  console.log('')
  console.log('node ./budget.js add 10')
  console.log('  add a transaction of 10')
  console.log('')
  console.log('node ./budget.js check')
  console.log('  check the current budget amount')

  process.exit(0)
}

importJSONFile(TRANSFP)
.then((budget) => {
  switch(process.argv[2]) {
    case 'show':
      showBudget(budget);
      break;
    case 'add':
      saveBudget(addTransaction(budget, toNumber(process.argv[3])))
      break;
    case 'set':
      saveBudget(updateBudgetAmount(budget, toNumber(process.argv[3])))
      break;
    case 'check':
      checkBudgetBalance(budget)
        ? console.log('You are underbudget')
        : console.log('You are overbudget')
      break;
    default:
      console.log(`${process.argv[2]} is not a valid command`);
  }
})
