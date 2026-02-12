console.log("Hello world");
// explicit type assignments
// type inference -> jab hum log varible ke aage : string /number ye sab nhi likhte hai aur variable khud he le elta hai first ko dekh kr
var userAge = 22; // isse ye hua ki userAge:Number ho chuka hai .
var username: string;
username = "Allan";
console.log(username);

//FUNCTIONS
function add(a: number, b = 10) {
  return a + b;                                                                                                                                                                                                                                                                                                                          
}

// any type -> u cana ssign any value in this
var userLastName: any = "Messi";
userLastName = false;
userLastName = 10;
userLastName = [];
userLastName = {};

// union type
var unionType: number | string = "Abhishek";
unionType = 10;

// Arrays
// :(string | number)[]  <-- iska matlab hai ki, array aur string types ke elements honge array ke
// agar single type ke elements ko store akrna hoga to string[] , aise krte hai
var ArrayTypes: (string | number)[];
ArrayTypes = ["abhishek", 10];
var newArray: Array<string | number> = ["Abhishek", 10, 17, "Messi"];
// array ko aise bhi declare kr sakte hai , isse GENERIC type kehte hai

// TUPLES
var possibleResults: [number, number]; // isme 2 elemets de sakte hai sirf.
// tuples ka size flexible hota hai aur kita bhi rakh sakte hai , koi limit nhi hai.
possibleResults = [-1, 1];

//OBJECTS
var userObject: {
  name: string;
  age: number | string;
  hobbies: Array<string>;
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Abhishek",
  age: 22,
  hobbies: ["Reading", "Football", "Travelling"],
  role: {
    description: "engineer",
    id: 12221461,
  },
};
let valuess: {} = ""; // here , {} does not mean object , rather any non null or undefined value
// agar jab pata na ho ki object me kya kya values ayega to kaise pata karenge ?
var data: Record<string, number | string>;
data = { 
  entry1: 1,
  entry2: "Abhishek",
};


//ENUM
enum Role{
  Admin,
  user,
  Student,
}
var userRole : Role = 0;
userRole = Role.user;
// alternative of enum ,literal types <--- we uses very specific types to union types. 
var userKaRole : 'Admin' | 'Student' | 'Guest' = "Admin" ;
// lekin iske saath saath ek aur option hota hai jisme ham pahle se hi custom type bana kr use kr sakte hai, usse ham type defination kehte hai ya type alias 
type RoleOfUser = 'Admin'  | 'Student' | 'Guest' | 'newMember' ;


//FUNCTION 
function addvalues(a:number,b:number):number{
     return a+b;
}
// fxns me type inference nhi krna hota hai, isme :number function ke baad nhi lagae pdte hai, wo automatically le leta hai . 
// functions me void type ka return bhi hota hai . 
function returnOfVoid(a:number,b:number):void{
     console.log('Hello world , i am best programmer in this world');
     return;
} 
// isme ek never type bhi hota hai , wo chatgpt se padh lena. 

function useOfNever(errorMessage:string): never{
  console.log('Hello World');
  throw new Error(errorMessage);
}
// agar function ke paramtere me fucntion lena hoga to ? 
function performJob(cb:Function){
  // some work 
  cb();
}
// dusra tareka hai ----->>  (m:string) => void
const logMsg = (msg:string) => {
  console.log(msg);
} ;

function performJobOf(cb:(m:string)=>void){
  cb('job done');
}
performJobOf(logMsg);

type userDetailsFunction = {
  name:string,
  age:number,
  greet:() => string
};

let user:userDetailsFunction={
  name :'Max',
  age:39,
  greet(){
    console.log('HeY There')
    return this.name;
  }
}

// null and undefined are types as well 