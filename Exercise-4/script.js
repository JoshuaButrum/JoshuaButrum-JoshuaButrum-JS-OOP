class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Static method
  static info() {
    return "This is a Person class";

    console.log(Person.info()); // Output: "This is a Person class"

    const person = new Person("John Doe", 30);
    console.log(person.constructor.info()); // Output: "This is a Person class"
  }
}

// Accessing the info() method from the Person class itself returns the expected statement.

// Accessing the info() method from an instance of the class throws an error because static methods are not inherited by instances.

// You can still access the static method from an instance by using the constructor property to access the class.