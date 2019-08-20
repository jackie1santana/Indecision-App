class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}`
    }
    getDescription() {
return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age) 
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` there major is ${this.major}`
        }
    }
}

const me = new Student('Jackie', 26, 'Computer Science')


const other = new Student()

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation
    }
    newGreeting(){
        let greeting = super.getGreeting()

        if(!this.homeLocation){
            return greeting
        }
        
    }
}

const travels = new Traveler('Jane', 19, 'Bronx')

console.log(travels.newGreeting())



