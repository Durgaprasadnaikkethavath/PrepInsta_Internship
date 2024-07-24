console.log("welcome");

/*
"The Coffee Consumption Estimator”

Are you curious about how much coffee you'll need to last you through
your coffee-drinking years? Let's create a function to estimate that!
Write a function named calculateCoffeeSupply that:

Takes 2 arguments: age and cups per day.

Calculates the total number of cups of coffee you'll consume for the rest of
your life (based on a constant max age).

Outputs the result to the screen as: "You will need NN cups of coffee to keep
you awake until the age of X."

Call that function three times, passing in different values each time to
estimate your coffee consumption.

Bonus: Accept floating-point values for cups per day, and round the result
to the nearest whole number."

 **/

function calculateCoffeeSupply(age, cups) {
  const maxAge = 90;
  const remainingAge = maxAge - age;

  const numberOfCoffee = Math.round(remainingAge * cups * 365);
  console.log(
    `You will need ${numberOfCoffee} cups of coffee to keep you awake until the age of ${maxAge}`
  );
}

calculateCoffeeSupply(22, 5.3);
calculateCoffeeSupply(23, 6.3);
calculateCoffeeSupply(24, 1.3);
