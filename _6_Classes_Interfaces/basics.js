"use strict";
/*
class User {
     name:string;
     age:number;
     constructor(n:string,a:number){
          this.name = n;
          this.age=a;
     }
}
*/
// ----------------------------------------------------------------------------------------------------------------------------
class User {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('my age is' + this.age);
    }
}
const max = new User('Max', 33);
const fred = new User('Fred', 22);
