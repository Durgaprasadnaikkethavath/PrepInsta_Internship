console.log("welcome");

/* 
"The Distance Converter”

Let's create a converter for converting distances between different units.
Follow these steps:

Create a function called metersToFeet:

Store a distance in meters into a variable.

Convert it to feet (1 meter = 3.281 feet) and output "NN meters is equal to
NN feet."

Create a function called feetToMeters:

Store a distance in feet into a variable.

Convert it to meters (1 foot = 0.3048 meters) and output "NN feet is equal
to NN meters."

Call both functions, passing in different distance values each time, to
convert between meters and feet."
**/

// const distances = 100;

function metersToFeet(distanceMeter) {
  const distanceFeet = distanceMeter * 3.281;
  console.log(
    `output ${distanceMeter} meters is equal to ${distanceFeet.toFixed(2)}`
  );
}
metersToFeet(22);
metersToFeet(45);
metersToFeet(68);

function feetToMeters(distanceFeet) {
  const distancesFoot = distanceFeet * 0.3048;
  console.log(
    `output ${distanceFeet} feet is equal to ${distancesFoot.toFixed(2)} meters`
  );
}

feetToMeters(33);
feetToMeters(56);
feetToMeters(15);
