// need to import class that defines Dog
const Dog = require('./classes2.js')  // file is at same level

let myFirstDog = new Dog("Fido", 10)
console.log(myFirstDog)
myFirstDog.woof()
myFirstDog.bark()
console.log(myFirstDog.name)