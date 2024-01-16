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