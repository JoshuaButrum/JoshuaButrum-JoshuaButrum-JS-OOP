class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  }
}

// Instantiate a Person object
const person = new Person("John Doe", 30);

// Try setting a negative age
try {
  person.age = -5;
} catch (error) {
  console.log(error.message); // Output: Age cannot be negative
}

// Observe the results
console.log(person.age); // Output: 30 (age remains unchanged)