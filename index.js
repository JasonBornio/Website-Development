class Person{
    constructor(age){
        this.age =  age;
    }

    doSomething(){
        console.log(this.age);
    }
}

person = new Person(23);
person.doSomething();