class Student {
  constructor(name) {
    this.name = name;
    this.grades = [];
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  computeAverage() {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }
}


class Student {
  constructor(name) {
    this.name = name;
    this.grades = [];
  }

  addGrade = (grade) => { // arrow function
    console.log(this); // logs the global object (window or global)
    this.grades.push(grade); // error: cannot access grades property
  }
}


// In regular functions, the this keyword is bound to the context in which the function is called. This means that the value of this can change depending on how the function is invoked.

// In arrow functions, the this keyword is bound to the context in which the function is defined. This means that the value of this is fixed and cannot be changed.

// In the context of the Student class, using arrow functions for the methods would not work as expected, since the this keyword would not be bound to the instance of the class. Therefore, regular functions are used to define the methods.