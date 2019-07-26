class Person {
    constructor(name){
        this.name = name;
    }
    getGreeting(){
        return 
    }
}

class Person2 {
    constructor(name = 'someone', age = 0){
        this.name = name;
        this.age  = age;
    }
    getDescription(){
       return `my name is ${this.name}`
    }
}

const me = new Person('Jackie Santana');

const jackie = new Person2('Jackie', 26)

console.log(jackie.getDescription())