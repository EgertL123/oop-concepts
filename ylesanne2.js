class Person {
    constructor(firstname, lastname, age){
        this.firstname = ""
        this.lastname = ""
        this.age = ""
    } 
} 

class Student {
    constructor(firstname, lastname, age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    } 
} 

const person1 = new Person()
person1.firstname = 'Elara'
person1.lastname = 'Quinn'
person1.age = '19'

const person2 = new Person()
person2.firstname = 'Jaxon'
person2.lastname = 'Wren'
person2.age = '43'

const person3 = new Person()
person3.firstname = 'Isla'
person3.lastname = 'Montgomery'
person3.age = '23'

const student1 = new Student('Rowan', 'Pierce', 29)
const student2 = new Student('Lyla', 'Bennett', 46)
const student3 = new Student('Elias', 'Stone', 62)

console.log(person1)
console.log(person2)
console.log(person3)

console.log(student1)
console.log(student2)
console.log(student3)
