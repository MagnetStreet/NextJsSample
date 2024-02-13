/* eslint-disable no-constant-condition */
/* eslint-disable no-var */

// Array function notation similar to function notation
//function variableExample() {
//TODO Arrow vrs Functions
/*   The main differences between these two declarations lie in their syntax and behavior:

    1) Function Declaration vs. Arrow Function:

    function variableExample() { ... }: This is a function declaration. It defines a named function variableExample.
    const variableExample = () => { ... }: This is an arrow function assigned to a variable variableExample.
    Scope and Hoisting:

    2) Function declarations are hoisted to the top of their scope, meaning they can be invoked before they are declared in the code.
    Arrow functions are not hoisted. They must be declared before they are used, similar to other variables declared with const or let.
    this Binding:

   3)  In a function declaration, the value of this inside the function depends on how the function is called. It can be dynamically bound based on the caller.
    In an arrow function, the value of this is lexically scoped, meaning it retains the value of this from its enclosing lexical context (the context in which it was defined). Arrow functions do not have their own this context.
    arguments Object:

    4) Function declarations have access to the arguments object, which contains all arguments passed to the function.
    Arrow functions do not have their own arguments object. Instead, they inherit the arguments object from their parent scope.
    Constructor Function:

    5) Function declarations can be used as constructor functions with the new keyword to create instances of objects.
    Arrow functions cannot be used as constructor functions. Attempting to use an arrow function with new will result in a TypeError.

  */

export const variableExample = () => {
  // ESlint will help us alot with this
  // Using var
  var x = 10; //TODO Never use var again
  if (true) {
    var x = 20; // This re-declares the variable x
    console.log('Inside if block - var x:', x); // Output: Inside if block - var x: 20
  }
  console.log('Outside if block - var x:', x); // Output: Outside if block - var x: 20

  // Using let
  const y = 30;
  if (true) {
    const y = 40; // This creates a new variable y local to the if block
    // TODO bad practice use different namesits juts a example on scope and how let avoid errors
    console.log('Inside if block - let y:', y); // Output: Inside if block - let y: 40
  }
  console.log('Outside if block - let y:', y); // Output: Outside if block - let y: 30

  // Using const
  const z = 50;
  if (true) {
    // const z = 60; // Uncommenting this line will result in a SyntaxError: Identifier 'z' has already been declared
    console.log('Inside if block - const z:', z); // Output: Inside if block - const z: 50
  }
  console.log('Outside if block - const z:', z); // Output: Outside if block - const z: 50
};
