class Cat {
   constructor(name, age) {
    this.name = name
    this.age = age
   }   // use a constructor to create the cat class
    meow() { // Add a method
        console.log('Meow')
    }
    scratch(numberOfTimes) {
        for(let x = 1; x <= numberOfTimes; x++)
            console.log('Scratch!')
    }
}

// Use class to instantiate an instance of a cat
const myFirstCat = new Cat('Fluffy', 5)

console.log(myFirstCat)

console.log(myFirstCat.name)

const mySecondCat = new Cat('Snowball', 3)

console.log(mySecondCat)
console.log(mySecondCat.age)

// Call the meow method with your class
myFirstCat.meow()
mySecondCat.meow()