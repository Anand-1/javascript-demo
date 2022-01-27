/* Arrow function provides a shorter syntax to write more concise function expression
  - if block syntax is used return keyword is needed else not
  - No function keyword is used 
*/
const lunchMenu = pizza=> `I'm going to eat a ${pizza} for lunch`;
console.log( lunchMenu("onion") );

/*--------------------------------------------------------------------------------------*/
/* Template Literals : String literals with embedded expressions are called template literals . */

let num1 = 2;
let num2 = 3;
const fullName = `${num1 + num2}`;
console.log(fullName);

/*--------------------------------------------------------------------------------------*/
/* The object destructuring is a feature to extract properties from objects and bind them to variables.
object destructuring can extract multiple properties in one statement, can access properties from nested 
objects, and can set a default value if the property doesn't exist. 
*/

