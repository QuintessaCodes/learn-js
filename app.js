console.log('Running external js')

// let firstName = 'Quintessa'
// let lastName = 'Kachi'
let age = 55
console.log(age)
let isMarried = false
let isStudent 
let job = "Web Developer"
let salary = 50000
/* double line comment */
console.log(`My name is ${firstName} ${lastName}. I am ${age} years old. I am a ${job}. My salary is ${salary}.`)
console.log('my name is ' + firstName + ' ' + lastName + ' and I am ' + age + ' years old. I am a ' + job + ' who earns '+ salary + '.')
age = 59
console.log(age)
console.log(typeof isStudent)
    
const drink = 'fanta'
console.log(typeof drink)
// drink = 'coke'
// console.log(drink)

let dob = 2024 - age
console.log(dob)

let num1 = 44
let num2 = '44'
let compare = num1 == num2
console.log(compare)

let compare2 = num1 === num2
console.log(compare2)

let std1, std2, std3
std1 = std2 = std3 = "james"
console.log(std1, std2, std3)

// increment
let newAge = age + 1
console.log(newAge)

age = age + 2
console.log(age)

age += 3
console.log(age)

age++
console.log(age)

// decrement



// bmi - mass and height needed

let chukaMass = 80
let chukaHeight = 1.75
let chukaBmi = chukaMass / (chukaHeight * chukaHeight)
console.log(chukaBmi)

let sandraMass = 70
let sandraHeight = 1.4
let sandraBmi = sandraMass / (sandraHeight * sandraHeight)
console.log(sandraBmi)

let higherBmi = sandraBmi > chukaBmi
console.log("Is Sandra BMI higher than Chuka's? " + higherBmi)
console.log(typeof chukaBmi, typeof higherBmi)