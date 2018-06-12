/* verbose way */
const vehicle = {
  make: 'Chevrolet', 
  model: 'Corvette', 
  topSpeed: 200
};
const modelPrices = [60000, 70000];
function calculateSalesPrice(price, reduction) {
  return price - reduction;
}

const carAd = {
  vehicle: vehicle,
  modelPrices: modelPrices,
  calculateSalesPrice: calculateSalesPrice,
};

console.log(carAd);

/* 
    shorthand 
    key names implied 
    from variable declarations
*/
console.log(
  {
    vehicle,
    modelPrices,
    calculateSalesPrice,
  }
);
