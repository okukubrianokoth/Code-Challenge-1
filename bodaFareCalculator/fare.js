const readline = require("readline");

// Create interface for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for distance
rl.question("Unafika wapi? Hiyo ni km ngapi?: ", function(input) {
  const distanceInKm = Number(input);

  // Validate user input
  if (isNaN(distanceInKm) || distanceInKm < 0) {
    console.log("Weka nambari sahihi ya kilomita.");
    rl.close();
    return;
  }

  calculateBodaFare(distanceInKm);
  rl.close();
});

// Fare calculation 
function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const perKmCharge = 15;
  const distanceFare = distanceInKm * perKmCharge;
  const totalFare = baseFare + distanceFare;

  console.log(`\nUmbali ni ${distanceInKm} km:`);
  console.log(`Kuanza Safari: KES ${baseFare}`);
  console.log(`Kwa ${distanceInKm} km: KES ${distanceFare}`);
  console.log(`Jumla Gharama: KES ${totalFare}`);
  console.log("\nTuwache story, panda boda! 🛵");
}
