let billAmount = 100; // Creates a variable called billAmount that can be changed. It equals a number.
let numberDiners = 4; // Creates a variable called numberDiners that can be changed. It equals a number.
let serviceQuality = 'Great'; // Creates a variable called serviceQuality that can be changed. It equals a string.

function calculateTip(){
  let tipPercent;
  switch (serviceQuality) {
    case 'Great':
      tipPercent = 0.20;
      break;
    case 'Good':
      tipPercent = 0.15;
      break;
    case 'Terrible':
      tipPercent = 0.10;
      break;
  }
  return tipPercent * billAmount;
} // This function is calculateTip. It starts by declaring the variable tipPercent. If the serviceQuality variable equals Great, tipPercent would equal 0.20. If it is Good, it would equal 0.15. If it is Terrible it would equal 0.10.

function calculateBill() {
  return calculateTip() + billAmount;
} // This function is called calculateBill and it returns the tip amount multiplied by the bill amount.

function divideBill() {
  return calculateBill() / numberDiners;
} // This function is called divideBill and it returns the bill total with tip by the number of diners.

console.log('Total Tip: $' + calculateTip()); // This logs a string that says total tip and the function that calculates the total tip.
console.log('Total Bill: $' + calculateBill()); // This logs a string that says the total bill and the function that calculates the total bill.
console.log('Each Person Owes: $' + divideBill()); // This logs a string that says each person owes and the function that calculates the divided bill.