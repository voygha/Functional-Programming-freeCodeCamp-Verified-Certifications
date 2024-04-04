/*
Implement the filter Method on a Prototype
You might learn a lot about the filter method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.

*/

Array.prototype.myFilter = function (callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
      if (Boolean(callback(this[i], i, this)) === true) {
        newArray.push(this[i]);
      }
    }
    // Only change code above this line
    return newArray;
  };
  
  
  console.log([23, 65, 98, 5, 13].myFilter(item => item % 2));
  
  //let prueba = [23, 65, 98, 5, 13].filter(item => item % 2);
  
  //console.log(prueba);