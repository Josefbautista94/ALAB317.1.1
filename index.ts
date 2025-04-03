// @ts-check 

class Vehicle {
  status: "started" | "stopped";

  constructor(
    public make: string,
    public model: string,
    public wheels: number) {

    this.make = make;
    this.model = model;
    this.wheels = wheels;
    this.status = "stopped";

  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

function printStatus(vehicle: Vehicle) {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);


class NCycle<T>{ // declaring a new generic class,<T> means this class can work with any type you specify
  make: T | T[]; // can make a single value of type T like "BMW" or an array of type T[] like ["BMW", Benz]
  model: T | T[];// works the same way as make
  wheels: number; // takes regular numbers
  constructor(make: T | T[], model: T | T[], wheels: number) {// Initializes a new NCycle with flexible make/model types and sets its wheel count

    this.make = make; // refers to the property of the class declared earlier and then setting it to the argument passed in.
    this.model = model; // same as make
    this.wheels = wheels; //..

  }
  print(index: number = 0): void { // index : number = 0 means it takes one optional argument if nothing is passed in, it defaults to 0
    // void  means the method doesnt return anything, it would log to the console

    if (!Array.isArray(this.make) && !Array.isArray(this.model)) { // Type guard
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else if (  // runs if both make and model are arrays
      Array.isArray(this.make) && Array.isArray(this.model)
    ) {
      const makeAtIndex = this.make[index]; // pulls the values from each array at the given index
      const modelAtIndex = this.model[index];

      if (makeAtIndex !== undefined && modelAtIndex !== undefined) { //Checks that both values exist at that index.

        console.log(`This NCycle has a ${makeAtIndex} ${modelAtIndex} at ${index}.`);
      } else { //This block runs if one or both values were undefined.
        console.log("This NCycle was not created properly.");
      }
    } else { // This final else runs if make and model are not both arrays, but also not both single values
      console.log("This NCycle was not created properly.");
    }
  }

  printAll(): void { // void means this method doesn’t return anything it just logs to the console.
    if (Array.isArray(this.make) && Array.isArray(this.model)) { // type guard , if true, we treat both as arrays and proceed to loop through them.

      const minLength = Math.min(this.make.length, this.model.length); // Finds the shortest length between the make and model arrays.
      //prevents errors from trying to access an index that might not exist in the shorter array

      for (let i = 0; i < minLength; i++) {

        console.log(`This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.`);
      }
    }
    else if (!Array.isArray(this.make) && !Array.isArray(this.model)) { //If make and model are not arrays (they’re just single values), this block runs.
      console.log(`This is a ${this.make} ${this.model} NCycle.`);

    }
    else { //Runs if one is an array and the other is not — or if something doesn’t match.
      console.log("This NCycle was not created properly.");
    }
  }

}
