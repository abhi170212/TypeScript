type Operations = {
     add:(a:number,b:number) => number;
     subtract:(a:number,b:number) => number;
}
/*
type Results={
     add:number,
     subtract:number
}

*/

type Results<T>={
     [key in keyof T]?:number|string;
}

// lekin isme , jab hum objects ke values ko dkehte hai to , wo hamesha hi change h sakti hai 
// to wo values ko dekhn ahota hai aur uske accoridng values ko add karna hota hai
// ab '?' kar dene se optional ho jata hai.
// '-?' remove the optional case if they have '?' in the operations 

let mathsOperations :Operations={
     add(a:number,b:number){
          return a+b;
     },
     subtract(a:number,b:number){
          return a-b;
     }
}

let mathsResults:Results<Operations> ={
     add:mathsOperations.add(1,2),
     subtract:mathsOperations.subtract(1,2),
}

// ab isme optional kaise hoga properties?
