let fruits = ['apple', 'orange', 'pear']
console.log(fruits)
console.log(fruits[0])
console.log(fruits[2])

console.log(fruits.length)

fruits.push('grape') // add item to array
console.log(fruits)

fruits.pop() // take off last item in array
console.log(fruits)

fruits.splice(1, 0, 'banana')  // Adds to array - position, number to delete, what to add
console.log(fruits)

// Create cat object with array
let cats = [
    {
        'name': 'Fluffy',
        'age': 2
    },
    {
        'name': 'Whiskers',
        'age': 10
    },
    {
        'name': 'Munchkin',
        'age': 5
    }
]

console.log(cats)

console.log(cats[0])

console.log(cats[1].age)