// index types or index signature 
type dataStorage ={
     [props:string]:boolean | number ;
};

// iska matlab hai ki ab tum ab object bna sakte ho 
// aur us wale object me keys ek string rahega aur wo boolean ya nuber ko store akrega 
// iske saath tum kitne bhi number ka key bna sakte ho , no matter what. 

let data:dataStorage ={};
data.id=1; // number
data.paymentDone=false; // boolean 
data.isAmerican=0; // number

//we can do the same from record type
// record type is same as the above dataStorage type  
let someObj:Record<string,number|boolean>;


// constant Type -> const 
// isse ye array ko precise kr deta hai 
// iske bina hum array me push kr sakte the lekin ab nhi 
let roles = ['admin','guest','editor'] as const;
const firstRole = roles[0] ;
console.log(firstRole);

// satisfies keyword
const dataEntries ={
     e1:0.4,
     e2:-8.4
} satisfies Record<string,number>;

dataEntries.e1;
// dataEntries.e3; 
// in this we have the condition that we can not access the e3 as this is not shown in the dataEntries.
