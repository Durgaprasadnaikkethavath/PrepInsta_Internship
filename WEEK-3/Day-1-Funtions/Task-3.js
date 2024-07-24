console.log("welcome");

/** 
 * “The Rectangler”

Create 2 functions that calculate properties of a rectangle, using the
definitions here.

i) Create a function called calcPerimeter:
Pass the length and width of the rectangle to the function.
Calculate the perimeter of the rectangle based on its length and
width, and output "The perimeter is NN".

ii) Create a function called calcArea:
Pass the length and width of the rectangle to the function.

Calculate the area of the rectangle based on its length and width,
and output "The area is NN”. 
*/

function calcPerimeter(length, width) {
  const perimeter = 2 * (length + width);
  console.log(`The perimeter is ${perimeter}`);
}
calcPerimeter(10, 7);
calcPerimeter(5, 3);
calcPerimeter(8, 4);

function calcArea(length, width) {
  const area = length * width;
  console.log(`The area is ${area}`);
}
calcArea(8, 9);
calcArea(7, 7);
calcArea(10, 4);
