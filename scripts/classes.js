class Person {
    constructor(name = 'Anonymous', age) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `hi i'm ${this.name}`
    }

}

class Student extends Person {
    constructor(name, age, major){
        super(name, age)
        this.major = major
    }

}