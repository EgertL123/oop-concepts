class Student{
    #name
    #id
    #status 

    constructor(name, id){ 
        this.#id = id
        this.#name = name
    } 

    getName() {
        return this.#name
    } 

    setName(name) {
        this.#name = name
    } 

    setStatus(status) {
        const statuses = ['Active', 'Expelled', 'Finished', 'Inactive',] 
        if(statuses.includes(status)){
            this.#status = status
        }
    }  

        getStatus() {
            return this.#status
        } 
    } 

const student = new Student('John', 1)
console.log(student.getName())
student.setName = 'Mary'
console.log(student.getName())
student.setStatus('Finished')
console.log(student.getStatus())
