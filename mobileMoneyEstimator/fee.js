const readline = require("readline");

// Set up rfor theeadline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for amount
rl.question("Unatuma Ngapi? (KES): ", function(input) {
  const amountToSend = Number(input);

  // Validate input
  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Tafadhali weka kiasi halali cha kutuma.");
    rl.close();
    return;
  }

  estimateTransactionFee(amountToSend);
  rl.close();
});

// to calculate fee
function estimateTransactionFee(amountToSend) {
  const percentageFee = amountToSend * 0.015;

  // Apply rules
  const transactionFee = Math.min(Math.max(percentageFee, 10), 70);
  const totalDebited = amountToSend + transactionFee;

  // result
  console.log(`\nKutuma KES ${amountToSend}:`);
  console.log(`Ada ya Muamala: KES ${transactionFee}`);
  console.log(`Jumla Itakayokatwa: KES ${totalDebited}`);
  console.log("\nTuma Pesa Kwa Usalama! 📱");
}
