// conditional statements with if
// Dec 26 lesson

// Add stuff for Jan 1 lesson
const prompt = require('prompt-sync')()


let x = 4
let y = 5

if(y > x) {
    console.log("y is greater than x!")
}

// won't be executed since it is false
if(x > y) {
    console.log("x is greater than y!")
}

if(x > y) {
    console.log("x is greater than y!")
}
else {
    console.log("Nope, x is not greater than y.")
}

// A program to determine whether it is time to get up
// Jan 1 lesson - uses prompt-sync

// Ask user what time it is
let hour = prompt("What time is it? ")
if(hour < 4) {
    console.log("It's the middle of the night, keep sleeping.")
} else if(hour > 4 && hour < 7) {
    console.log("You can sleep a little longer.")
} else {
    console.log("Time to get up.")
}

