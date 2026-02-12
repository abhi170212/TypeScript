// GETTERS

class user{
     constructor(protected fName:string,private lName:string){

     }
     get fullName():string{
          return this.fName+" " +this.lName;
     }
}

var newUser = new user("Abhishek","Singh");
console.log("getters ka example se >>>>>>>  "+newUser.fullName);
// do not execute the fullname() , t is already decided to use only fullName;



// SETTERS & STATIC

class NewUserClass{
     private _firstName:string = '';
     private _lastName:string='';

     set firstName(name:string){
          if (name.trim() === "") throw new Error("Inavlid name");
          this._firstName = name
     }

     set lastName(name:string){
          if(name.trim() === ""){
               throw new Error("Invalid name");
          }
          this._lastName = name;
     }

     get getFullName():String{
          return this._firstName+" "+this._lastName;
     }

     static eid = "User";
     static greet():void{
          console.log("Hellow !")
     }
     // u do not need an instace of the class to call them or run them.
}

NewUserClass.greet();
console.log(NewUserClass.eid);


const newUserLoggedIn = new NewUserClass()
newUserLoggedIn.firstName= "Abhishek";
newUserLoggedIn.lastName="Singh";
console.log(newUserLoggedIn.getFullName);


// Inheritance 

class Employee extends user{
     constructor(public jobTitle:string,fname:string,lname:string){
          super(fname,lname);
     }
}

const emp = new Employee("Software Developer","Abhishek","Singh");
console.log(emp.fullName);


// Abstract Class >>>> only ts and not js 
abstract class UIElements{
     constructor(public identifier:string){}
     clone(location:string|Array<string>){}
}

class Navbar extends UIElements{
     constructor(public identifier:string,public position:'left' |'right'|'top'|'bottom'){
          super(identifier);
     }
}
