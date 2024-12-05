class Student {
    constructor(name, finished){
        this.name = name
        this.finished = finished
    } 
} 

const student = new Student()
student.name = "John"
student.finished = "false"

console.log(student)
