class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Instantiate two different Person objects
let person1 = new Person("John Doe", 30);
let person2 = new Person("Jane Doe", 25);

// Invoke their greet methods
person1.greet();
person2.greet();