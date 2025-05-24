console.log("Hello world");
// explicit type assignments
// type inference -> jab hum log varible ke aage : string /number ye sab nhi likhte hai aur variable khud he le elta hai first ko dekh kr
var userAge = 22; // isse ye hua ki userAge:Number ho chuka hai .
var username;
username = "Allan";
console.log(username);
//FUNCTIONS
function add(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
// any type -> u cana ssign any value in this
var userLastName = "Messi";
userLastName = false;
userLastName = 10;
userLastName = [];
userLastName = {};
// union type
var unionType = "Abhishek";
unionType = 10;
// Arrays
// :(string | number)[]  <-- iska matlab hai ki, array aur string types ke elements honge array ke
// agar single type ke elements ko store akrna hoga to string[] , aise krte hai
var ArrayTypes;
ArrayTypes = ["abhishek", 10];
var newArray = ["Abhishek", 10, 17, "Messi"];
// array ko aise bhi declare kr sakte hai , isse GENERIC type kehte hai
// TUPLES
var possibleResults; // isme 2 elemets de sakte hai sirf.
// tuples ka size flexible hota hai aur kita bhi rakh sakte hai , koi limit nhi hai.
possibleResults = [-1, 1];
//OBJECTS
var userObject = {
    name: "Abhishek",
    age: 22,
    hobbies: ["Reading", "Football", "Travelling"],
    role: {
        description: "engineer",
        id: 12221461,
    },
};
var valuess = ""; // here , {} does not mean object , rather any non null or undefined value
// agar jab pata na ho ki object me kya kya values ayega to kaise pata karenge ?
var data;
data = {
    entry1: 1,
    entry2: "Abhishek",
};
//ENUM
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["Student"] = 2] = "Student";
})(Role || (Role = {}));
var userRole = 0;
userRole = Role.user;
// alternative of enum ,literal types <--- we uses very specific types to union types. 
var userKaRole = "Admin";
//FUNCTION 
function addvalues(a, b) {
    return a + b;
}
// fxns me type inference nhi krna hota hai, isme :number function ke baad nhi lagae pdte hai, wo automatically le leta hai . 
// functions me void type ka return bhi hota hai . 
function returnOfVoid(a, b) {
    console.log('Hello world , i am best programmer in this world');
    return;
}
// isme ek never type bhi hota hai , wo chatgpt se padh lena. 
function useOfNever(errorMessage) {
    console.log('Hello World');
    throw new Error(errorMessage);
}
// agar function ke paramtere me fucntion lena hoga to ? 
function performJob(cb) {
    // some work 
    cb();
}
// dusra tareka hai ----->>  (m:string) => void
var logMsg = function (msg) {
    console.log(msg);
};
function performJobOf(cb) {
    cb('job done');
}
performJobOf(logMsg);
