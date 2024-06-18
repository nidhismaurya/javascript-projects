// Declare and initialize the variables for exercise 1 here:

// BEFORE running the code, predict what will be printed to the console by the following statements:

let engineIndicatorLight = red blinking
VM1691:1 Uncaught SyntaxError: Unexpected identifier 'blinking'
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let ComputerStatusCode = 200;
let shuttleSpeed = 15000;
if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
VM2041:12 engines are off
undefined
if (crewStatus=== true){
    console.log("Crew Ready");
} else {
    console.log("Crew Not Ready");
}    
VM2290:2 Crew Ready
undefined
if (ComputerStatusCode=== 200) {
    console.log("Please stand by. Computer is rebooting.");
} else if (ComputerStatusCode=== 400) {
    console.log("Success! Computer online.")
} else    
VM2825:5 Uncaught SyntaxError: Unexpected end of input
if (ComputerStatusCode=== 200) {
    console.log("Please stand by. Computer is rebooting.");
} else if (ComputerStatusCode=== 400) {
    console.log("Success! Computer online.");
} else {
    console.log("ALERT: Computer offline!");
}               
VM2947:2 Please stand by. Computer is rebooting.
undefined
if ( shuttleSpeed > 17500){
    console.log("ALERT: Cannot maintain orbit!");
} else if (shuttleSpeed < 8000) {
    console.log ("ALERT: Cannot maintain orbit!");
} else {   
    console.log("stableSpeed");
}   
VM3454:6 stableSpeed
undefined
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}
VM3459:1 Uncaught ReferenceError: computerStatusCode is not defined
    at <anonymous>:1:19
(anonymous) @ VM3459:1
let computerStatusCode = 200
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}
VM3527:3 all systems go
undefined
if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}
VM3531:4 all systems go
undefined
if (fuelLevel > 20000 && engineTemperature <= 2500 ) {
    console.log( "Full Tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 50%.Engines good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 3500 || {engineIndicatorLight is " red blinking" ) {
    console.log ("ENGINE FAILURE IMMINENT !");
} else {
    console.log " Fuel and engine status pending..."):
}   
        
VM4779:9 Uncaught SyntaxError: Unexpected identifier 'is'
if (fuelLevel > 20000 && engineTemperature <= 2500 ) {
    console.log( "Full Tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 50%.Engines good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 3500 || {engineIndicatorLight  = " red blinking" ) {
    console.log ("ENGINE FAILURE IMMINENT !");
} else {
    console.log " Fuel and engine status pending..."):
}   
        
VM4790:9 Uncaught SyntaxError: Invalid shorthand property initializer
if (fuelLevel > 20000 && engineTemperature <= 2500 ) {
    console.log( "Full Tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 50%.Engines good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight  ) {
    console.log ("ENGINE FAILURE IMMINENT !");
} else {
    console.log " Fuel and engine status pending..."):
}   
        
VM4814:12 Uncaught SyntaxError: Unexpected string
if (fuelLevel > 20000 && engineTemperature <= 2500 ) {
    console.log( "Full Tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 50%.Engines good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 3500 ||  engineIndicatorLight ) {
    console.log ("ENGINE FAILURE IMMINENT !");
} else {
    console.log " Fuel and engine status pending..."):
}   
        
VM4835:12 Uncaught SyntaxError: Unexpected string
if (fuelLevel > 20000 && engineTemperature <= 2500 ) {
    console.log( "Full Tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 50%.Engines good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 3500 ||  engineIndicatorLight ) {
    console.log ("ENGINE FAILURE IMMINENT !");
} else {
    console.log (" Fuel and engine status pending..."):
}   
        
VM4847:12 Uncaught SyntaxError: Unexpected token ':'
if (fuelLevel > 20000 && engineTemperature <= 2500 ) {
    console.log( "Full Tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 50%.Engines good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight ) {
    console.log ("ENGINE FAILURE IMMINENT !");
} else {
    console.log " Fuel and engine status pending...")
}   
        
VM4859:12 Uncaught SyntaxError: Unexpected string
if (fuelLevel > 20000 && engineTemperature <= 2500 ) {
    console.log( "Full Tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 50%.Engines good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 3500 ||  engineIndicatorLight ) {
    console.log ("ENGINE FAILURE IMMINENT !");
} else {
    console.log ("Fuel and engine status pending..."):
}   
        
VM4889:12 Uncaught SyntaxError: Unexpected token ':'
if (fuelLevel > 20000 && engineTemperature <= 2500 ) {
    console.log( "Full Tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 50%.Engines good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 3500 ||  engineIndicatorLight ) {
    console.log ("ENGINE FAILURE IMMINENT !");
} else {
    console.log (" Fuel and engine status pending...");
}   
        
VM4920:1 Uncaught ReferenceError: fuelLevel is not defined
    at <anonymous>:1:1
(anonymous) @ VM4920:1
let fuelLevel = 21000
if (fuelLevel > 20000 && engineTemperature <= 2500 ) {
    console.log( "Full Tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 50%.Engines good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight ) {
    console.log ("ENGINE FAILURE IMMINENT !");
} else {
    console.log " Fuel and engine status pending...");
}   
        
VM4975:13 Uncaught SyntaxError: Unexpected string
if (fuelLevel > 20000 && engineTemperature <= 2500 ) {
    console.log( "Full Tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 50%.Engines good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight ) {
    console.log ("ENGINE FAILURE IMMINENT !");
} else {
    console.log ("Fuel and engine status pending..."):
}   
        
VM5001:12 Uncaught SyntaxError: Unexpected token ':'
if (fuelLevel > 20000 && engineTemperature <= 2500 ) {
    console.log( "Full Tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 50%.Engines good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight ) {
    console.log ("ENGINE FAILURE IMMINENT !");
} else {
    console.log ("Fuel and engine status pending...");
}   
VM5073:1 Uncaught ReferenceError: fuelLevel is not defined
    at <anonymous>:1:1
(anonymous) @ VM5073:1
let fuelLevel = 21000
if (fuelLevel > 20000 && engineTemperature <= 2500 ) {
    console.log( "Full Tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 50%.Engines good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight ) {
    console.log ("ENGINE FAILURE IMMINENT !");
} else {
    console.log ("Fuel and engine status pending...");
}   
VM5171:2 Uncaught ReferenceError: engineTemperature is not defined
    at <anonymous>:2:26
(anonymous) @ VM5171:2
let fuelLevel = 21000
let engineTemperature = 1200
if (fuelLevel > 20000 && engineTemperature <= 2500 ) {
    console.log( "Full Tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 50%.Engines good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 3500 || !engineIndicatorLight ) {
    console.log ("ENGINE FAILURE IMMINENT !");
} else {
    console.log ("Fuel and engine status pending...");
}   
VM5352:4 Full Tank. Engines good.
undefined
let fuelLevel = 5000
let engineTemperature = 1200
if (fuelLevel > 20000 && engineTemperature <= 2500 ) {
    console.log( "Full Tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 50%.Engines good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 3500 || !engineIndicatorLight ) {
    console.log ("ENGINE FAILURE IMMINENT !");
} else {
    console.log ("Fuel and engine status pending...");
}   

VM5469:10 Check fuel level. Engines running hot.
undefined
let fuelLevel = 100
let engineTemperature = 100
if (fuelLevel > 20000 && engineTemperature <= 2500 ) {
    console.log( "Full Tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 50%.Engines good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log ("Fuel level above 25%. Engines good");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight ) {
    console.log ("ENGINE FAILURE IMMINENT !");
} else {
    console.log ("Fuel and engine status pending...");
}   
VM5633:10 Check fuel level. Engines running hot.
