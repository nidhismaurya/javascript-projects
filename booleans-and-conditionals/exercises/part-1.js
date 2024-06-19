// Declare and initialize the variables for exercise 1 here:

// BEFORE running the code, predict what will be printed to the console by the following statements:

let engineIndicatorLight ="red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
if (engineIndicatorLight === "green") {
   console.log("engines have started");
}  else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
} else {
    console.log("engines are off");
}
if (crewStatus=== true){
    console.log("Crew Ready");
} else {
    console.log("Crew Not Ready");
}    
if (computerStatusCode=== 200) {
    console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode=== 400) {
    console.log("Success! Computer online.")
} else if (computerStatusCode=== 200) {
    console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode=== 400) {
    console.log("Success! Computer online.");
} else {
    console.log("ALERT: Computer offline!");
}               
if ( shuttleSpeed > 17500){
    console.log("ALERT: Cannot maintain orbit!");
} else if (shuttleSpeed < 8000) {
    console.log ("ALERT: Cannot maintain orbit!");
} else {   
    console.log("stableSpeed");
}   
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
 } else {
    console.log("WARNING. Not ready");
 }  
 let fuelLevel = "Any"; 
 let engineTemperature = "Any";
 if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel > 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }
  fuelLevel = 21000;
  engineTemperature = 1200;
  if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "!red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel > 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }
  fuelLevel = 900;
  engineTemperature = "Any";
  engineIndicatorLight = "Any";
  if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel > 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }
  fuelLevel = 5000;
  engineTemperature = 1200;
  if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "!red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel > 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }
  fuelLevel = 12000;
  engineTemperature = 2600;
  if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "!red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel > 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }
  fuelLevel = 18000;
  engineTemperature = 2500;
  if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "!red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel > 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }
let commandOverride = true || false
fuelLevel = "full"
if ((fuelLevel > 20000 && engineIndicatorLight === "!Red Blinking") || (commandOverride === true)) {
    console.log("Cleared to Launch!");
} else {
    console.log("Launch scrubbed!");
}   