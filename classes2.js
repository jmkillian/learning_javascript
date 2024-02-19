const colors = require('colors')

class Dog {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    woof() {
        console.log("Woof!".red)
    }
    bark() {
            console.log("Bark!".green)
        }
 }

module.exports = Dog // export class