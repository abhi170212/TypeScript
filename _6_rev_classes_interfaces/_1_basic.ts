class UserClass{
     name="Abhsiehk";
     age:number;
     constructor(n:string,a:number){
          this.name = n;
          this.age = a;
     }
}

// another way to do the classes
class userClass{
     #role :"Admin"|"Student"="Student"; // this is how the private is being done in the vanilla js 
     public hobbies:string[] = [];
     constructor(public name:string , private age:number){
     }
     // constructors are functions too , i.e. they can use the same proerties of the functions before.

     // readonly prop  --> access them outside the funcions but can not assign 
     // u can push values into them but can not asisgn them 
     readonly courses :Array<string> = ["Webdev","AI","Docker"];


}

const new_user=new userClass("Abhsiehk",23);
new_user.hobbies=["football","music","video editng"] ;
// new_user.role ="Admin";
new_user.courses.push("Kubernetese"); 

