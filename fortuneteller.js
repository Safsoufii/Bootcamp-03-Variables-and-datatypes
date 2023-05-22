//TASK 3 PART 2

//Requests for input from user
let mothersName = prompt("What is your mothers first name?");//Request input from user for their mothers name
let streetName = prompt("What was the name of the street you grew up on?");//Request input from user to enter the name of the street they grew up on
let colour = prompt("What was your favourite colour as a child?");//Request input from user for their favourite colour
let colour1=colour.toLowerCase();//Convert to lower case incase user inputs colour in uppercase. Uppercase would make the sentence grammatically incorrect.  
let age = Number(prompt("How old are you?"));//Request input from user for their age
let range = Number(prompt("Enter a number between 1-10: "));//Request input from user to selected a number between 1-10

//Equations
let tillMarried=(Math.trunc(age/range));//Division equation for years till user is married
let children=(Math.trunc(age%range));//Remainder equation to find out how many children user will have
let tillHairDye=(Math.trunc(age-range));//Subtraction equation for years till user dyes their hair

//Print
console.log(`
In ${range} years you are going to meet your bestfriend named ${mothersName} ${streetName}.
`);//Print bestfriend sentence 
console.log(`
You will get married in ${tillMarried} years and have ${children} children.
`);//Print marriage sentence 
console.log(`
In ${tillHairDye} years you are going to dye your hair ${colour1}.
`);//Print hair dye sentence

/*Sources
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
*/
