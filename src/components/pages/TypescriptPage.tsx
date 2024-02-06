'use client';
import * as React from 'react';

// Define an Interfaces

interface TypescriptPageProps {
  id: number;
  title: string;
  subtitle: string;
}

interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // Optional property
}

interface Employee {
  id: number;
  name: string;
  role: string;
}

// Define an Classes

class Shape {
  constructor(public color: string) {}

  // Method to calculate area (to be overridden by subclasses)
  calculateArea(): number {
    return 0;
  }
}

// Subclass 1
class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
  }

  // Override method to calculate area for a circle
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Subclass 2
class Square extends Shape {
  constructor(color: string, public sideLength: number) {
    super(color);
  }

  // Override method to calculate area for a square
  calculateArea(): number {
    return this.sideLength * this.sideLength;
  }
}

// Define an enum
enum Color {
  Red,
  Green,
  Blue,
}

// TODO - This is the most common Type notation for a component on React/NestJs thats includes typescript
const TypescriptPage: React.FC<TypescriptPageProps> = ({
  title = '',
  subtitle = '',
  id,
}) => {
  /* 
    How to Declare variable types 
  */

  const age = 25;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  const name: string = 'John'; //Eslint will help us to avoid type notation if is inferrable
  const isStudent = true;
  const anUntypedVariable: any = 'For now on this will always be a string';

  // what if we try to assign a value that doesn't match
  // name = true;
  // age = 'twenty five';

  // is a good practice to add Interfaces to define objs
  const user: User = {
    name: 'Alice',
    age: 30,
    // Any other property
  };

  // Arrays
  const names: string[] = ['Alice', 'Bob', 'Charlie'];

  /* 
    Defining Functions 
  */
  function printUser(user: User): void {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
  }

  function printArea(shape: Shape): void {
    console.log(`Area of the ${shape.color} shape: ${shape.calculateArea()}`);
  }

  function isEmployee(obj: User | Employee): obj is Employee {
    return (obj as Employee).role !== undefined;
  }

  // Generic function
  function identity<T>(arg: T): T {
    return arg;
  }

  // It will verify the type of the param
  console.log('=========== Functions example ========');
  //TODO -  Use of functions
  printUser(user);

  // We can directly creat obj but it must match with the interface def
  printUser({
    name: 'second User',
    age: 25,
  });

  // Broken: Err should be showed at build time since the obj dont't match
  // printUser({
  //   name: 'second User',
  // });

  //TODO -  Use the clases
  // Create instances of subclasses
  const redCircle = new Circle('red', 5);
  const blueSquare = new Square('blue', 4);

  // Call the function with different shapes
  console.log('=========== Clases example ========');
  printArea(redCircle); // Outputs: Area of the red shape: 78.53981633974483
  printArea(blueSquare); // Outputs: Area of the blue shape: 16

  //TODO -  Use the enum
  const myColor: Color = Color.Blue;
  //const myColor: Color = Color.Cyan;

  //TODO - Use of Generics
  const result: number = identity(10); // result is of type number
  const value: string = identity('Hello'); // value is of type string

  //Todo - Type Assertions
  // Type assertions
  let message: any = 'Hello, TypeScript!'; //NOTE: Never a good practice to use any only use in rare or unknow type cases
  //Note that we define this as any since any can be a string but not necessaryly then we must cast to be able to use the length property of string type
  const length: number = (message as string).length;

  console.log('=========== Type Assertions example ========');
  console.log(length); // Outputs: 20
  message = 1; //
  console.log(message);

  const employeeData: any = {
    id: 1,
    name: 'John Doe',
    role: 'Developer',
    // Note: 'age' is not part of the Employee interface
    age: 30,
  };

  // Using 'as' for type assertion
  const employee: Employee = employeeData as Employee;
  // Accessing properties with confidence after type assertion
  console.log(employee.id); // Outputs: 1
  console.log(employee.name); // Outputs: John Doe
  console.log(employee.role); // Outputs: Developer

  // Note: TypeScript won't catch this error during compilation
  // But using type assertion is a way of telling TypeScript that you know what you're doing

  //console.log(employee.age); // Outputs: 30 (no compilation error, but not recommended)

  // TODO - Union types
  const union: User | Employee = {
    name: 'Jonh Doe',
    age: 11,
    role: 'SuperAdmin',
  };

  console.log('=========== Union example ========');

  // Remember we say that isAdmin was optional?

  console.log(union.name);

  console.log(union.role); //  Gets flagged Property 'role' does not exist on type 'User | Employee'.

  // Solutions

  //1) Typecast
  console.log((union as Employee).role);

  //2) Type guard
  if (isEmployee(union)) {
    console.log(union.role);
  }

  // 3-4) check is property exist
  if ('role' in union) {
    console.log(union.role);
  }

  //console.log(union?.role); // this still gets flagged cause still it can be undefined

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333', marginBottom: '10px' }}>{title}</h1>
      <h3 style={{ color: '#666', marginBottom: '20px' }}>{subtitle}</h3>
      <p>
        This is just a simple component with some functions to show up
        typescript
      </p>
      <p>
        The ID is: <strong>{id}</strong>
      </p>
      {/* Add more content or components as needed */}
    </div>
  );
};

export default TypescriptPage;
