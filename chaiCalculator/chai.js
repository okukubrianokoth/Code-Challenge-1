const readline = require("readline");

// Setup input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for number of cups
rl.question("Karibu! How many cups of Chai Bora would you like to make? ", function(input) {
  const numberOfCups = Number(input);

  // input
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number of cups.");
    rl.close();
    return;
  }

  // Ingredient amounts per 1 cup
  const waterPerCup = 200; // ml
  const milkPerCup = 50; // ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2; // teaspoons

  // Calculate totals
  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  // Output result
  console.log(`\nTo make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");

  rl.close();
});
