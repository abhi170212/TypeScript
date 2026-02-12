interface Authentication{
     email:string;
     password:string;

     login(email:String):void;
     logout():void;
}

let userAuth:Authentication;

userAuth={
     email:"test@gmail.com",
     password:'abc1',
     role:"Student",
     login(email:string){},
     logout(){}
}

// why interfaces if we have custom type ?
// because of declaration merging 
// means we cana add the types from  the given type using the same name
interface Authentication{
     role:string;
}

// classes from interfaces
class AuthClass implements Authentication{

     public role:string = "Student";
     constructor(public email:string,public password:string){}
     login(email:String){
     }
     logout(){}
}

// we can extend interface frm other interface too
interface Authinterface extends Authentication{
     role:'Admin'|'SuperAdmin';
     
} 

