// Declare and assign the variables below
let shuttleName = "determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKm = 0.621;
console.log(shuttleName);
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKm);
let milesToMars = distanceToMarsKm * milesPerKm;
console.log(milesToMars);
let hoursToMars = milesToMars / shuttleSpeedMph;
console.log(hoursToMars);
let daysToMars = hoursToMars / 24;
console.log(daysToMars);
console.log('Determination will take 332.67857142857144 days to reach Mars');
let milesToMoon = distanceToMoonKm * milesPerKm;
console.log(milesToMoon); 
let hoursToMoon = milesToMoon / shuttleSpeedMph;
console.log(hoursToMoon);
let daysToMoon = hoursToMoon / 24;
console.log(daysToMoon);
console.log('Determination will take 0.5683628571428571 days to reach the Moon');

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let shuttleName = "determination";