interface Authenticatable {
  email: string;
  password: String;

  logout(): void;
  login(): void;
}

console.log("--- OBJECT TYPE ---");

let userDetails: Authenticatable;
userDetails = {
  email: "test@gmail.com",
  password: "123v",

  logout() {},
  login() {},
};

// declaration mergin => jo kaam hum log type alias feature se kar sakte hai wo kaam hum interface se bhi kr sakte hai 
// lekin jab hame , interface me naya property add karna hoga to interface me kr sakte 

// interface in function types 
interface funSum{
     (a:number,b:number):number;
}
type _funSum=(a:number,b:number) => number ; 

// ------------------------------ CLASSES AS CONTRACT TYPE --------------------------------

class Authenticatableuser implements Authenticatable {

     constructor(public email:string,public password:String){}
     login(): void {
         
     }
     logout(): void {
         
     }
}

// isme bhi extends keyword ka use kr sakte hai 