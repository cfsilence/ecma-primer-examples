/* verbose way */
const vehicle = {make: 'Chevrolet', model: 'Corvette', topSpeed: 200};
const modelPrices = [60000, 70000];

const carAd = {
    vehicle: vehicle,
    modelPrices: modelPrices,
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
    }
)
