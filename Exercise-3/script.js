class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Create two Person instances
let person1 = new Person("John Doe", 30);
let person2 = new Person("Jane Doe", 25);

// Verify the instances
console.log(person1.name);  // Output: John Doe
console.log(person1.age);   // Output: 30
console.log(person2.name);  // Output: Jane Doe
console.log(person2.age);   // Output: 25