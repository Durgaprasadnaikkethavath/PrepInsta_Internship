/* 
Why spend money on a fortune teller when you can create your own
destiny? Write a JavaScript function called tellFortune with the following
specifications:

i)It should take four arguments: the number of children you'll have, the
name of your future partner, the place you'll live in, and your future job
title.

ii)The function should display your fortune on the screen in the following
format: "You will be a [job title] in [location], and married to [partner's
name] with [number of children] kids."

To complete the task, call the tellFortune function three times, each time
with different values for the arguments to see different fortune predictions.
**/

console.log("welcome to javascript class");

function tellFortune(numberOfChildren, partnerName, jobTitle, Location) {
  console.log(
    `You will be a ${jobTitle} in ${Location}, and married to ${partnerName} with ${numberOfChildren} kids`
  );
}

tellFortune(2, "Chamanthi Bai", "Developer", "Hyderabad");
tellFortune(3, "Hyma", "Software", "Hyderabad");
tellFortune(4, "Raja", "Data Entry", "Hyderabad");
tellFortune(5, "Dhana", "Doctor", "Hyderabad");
