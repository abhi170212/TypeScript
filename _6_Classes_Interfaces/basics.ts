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
class User{
     readonly hobbies:string[] =[];
     constructor(public name:string,private readonly age:number){}
     greet(){
          console.log('my age is' + this.age);
     } 
}

const max = new User('Max',33);
const fred = new User('Fred',22);
// readonly wale me sirf aur sirf access kar sajte hai aur kuch nhi . 
