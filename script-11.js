/*
const myArray = [1, 2, 3]
console.log(myArray)

//[number] : number is called index number.
// Index starts at 0. It's called 0-indexed array.
console.log(myArray[0])
console.log(myArray[1])
console.info(myArray[2])

myArray[0] = 99
myArray[1] = 20
myArray[2] = 30

console.log(myArray)
;[(1, 'hello', true, { name: 'socks' }, [1, 2])]

console.log(typeof [1.2])
console.log(Array.isArray([1, 2]))

//Arrays have properties and methods
//Adds value at the end
myArray.push(100)
console.log(myArray)

//Removes value at the end
myArray.splice(1, 1)
myArray.splice(2, 1)
console.log(myArray)
*/

/*
console.log('Use While loop for non-standard loops')
let i = 1
while (i <= 10) {
  console.log(i)
  i++
}

console.log('Use For loop for standard loops')
for (let i = 1; i <= 5; i++) {
  console.log(i)
}
console.log('Non Standar Loop Example.')

let randomNumber = 0
while (randomNumber < 0.5) {
  randomNumber = Math.random()
}

console.log(randomNumber)
*/

/*
// -- Looping through an Array Technique
console.log('looping through an array technique')
const todoList = ['make dinner', 'wash dishes', 'watch youtube']
for (let index = 0; index <= todoList.length - 1; index++) {
  const value = todoList[index]
  console.log(value)
}

console.log('Shortcut method')
for (let i = 0; i < todoList.length; i++) {
  const value1 = todoList[i]
  console.log(value1)
}
*/
//Acumulator variable : 'total'
const nums = [1, 1, 3]
let total = 0

//Accumulator Pattern
for (let i = 0; i < nums.length; i++) {
  //Gets number from each index
  const num = nums[i]
  total += num
}
console.log(total)

//
const numsDoubled = []
for (let i = 0; i < nums.length; i++) {
  const num = nums[i]
  numsDoubled.push(num * 2)
}
console.info(numsDoubled)
console.log(numsDoubled)
