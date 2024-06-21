const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
newStr= str.slice(3)+ 'Lau';
console.log(newStr);
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${newStr} is the output of slicing and concatenating ${str}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let answer = input.question("Enter the number of letters to be relocated:");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (answer > str.length) {
    str.slice(3)+"";
    console.log(`ERROR: ${answer} is invalid ! - 3 characters moved by default.`)
} else {
    let myNewStr = str.slice(answer)+str.slice(answer)+str.slice(0,answer);
    console.log(myNewStr);
}    