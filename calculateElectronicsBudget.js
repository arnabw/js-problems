/* Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required. */

function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobileQuantity
) {
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;

  const totalBudgetLaptop = laptop * laptopQuantity;
  const totalBudgetTablet = tablet * tabletQuantity;
  const totalBudgetMobile = mobile * mobileQuantity;

  const totalBudget = totalBudgetLaptop + totalBudgetTablet + totalBudgetMobile;

  return `${totalBudget} total money required.`;
}

console.log(calculateElectronicsBudget(5, 3, 10));
