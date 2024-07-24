console.log("welcome to javascript class");

/* 

"The Pet Age Calculator"

Ever wondered how old your cat is in human years? Let's calculate it!
Create a JavaScript function called calculatePetAge with the following
specifications:

i) It should take one argument: your pet's age.

ii) Calculate your pet's age based on the conversion rate of 1 human year to 7 pet
years (for example, for a cat).

iii) Display the result on the screen in the format: "Your kitty is NN years old in
cat years!"

To make it more interesting, let's consider a bonus feature:
Bonus: Add an additional argument to the function that allows you to specify the
conversion rate of human years to pet years, accommodating different types of
animals.

Now, call the calculatePetAge function three times with various pet ages and
conversion rates to see the pet's age in different contexts.

**/

function calculatePetAge(petAge, conversion = 7) {
  const humanAge = petAge * conversion;
  console.log(`Your kitty is ${humanAge} years old in cat years!`);
}

calculatePetAge(2);
calculatePetAge(2, 4);
calculatePetAge(5, 8);
calculatePetAge(3, 7);
