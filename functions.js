// Functions

function myFirstFunction() {
    console.log('This is my function')
}

myFirstFunction()

// Add variable to a function
function mySecondFunction(name) {
    console.log('Hi, ' + name + '!')
}

mySecondFunction('Fred')
mySecondFunction('Kristin')

function addTwoNumbers(x, y) {
    return x + y // won't return anything since we are not logging it
}

addTwoNumbers(4, 9) // won't do anything alone

console.log(addTwoNumbers(4, 9))