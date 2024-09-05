function globalFunction() {
  console.log(this);
}

globalFunction();

const obj = {
  method: function() {
    console.log(this);
  }
};

obj.method();

const obj2 = {
  arrowMethod: () => {
    console.log(this);
  }
};

obj2.arrowMethod();


// In a global function, this is set to the global object.

// In an object method, this is set to the object itself.

// In an arrow function inside an object, this is set to the global object, not the object itself.