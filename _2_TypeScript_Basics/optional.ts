// agar hame param ko optional rakhna hai to kaise hoga 
// ? <----- ye wala operator ka use karte hai 

type user = {
     name:string,
     role:'user' | 'Admin',
     age?:number
};

// nullish coalisng operator
// ??
let input = " ";
const didProvidedAnswer = input ?? false;
// agar idhar par || ye hota to , false le leta aisa issliye kuyki wo falsy values leta hai alekin ?? ye 
// ye , null ya undefined wale case me hi sirf second value lene deta hai , lekin jo hamara string hai wo to empty reh sakta hai 
// uss wale case me hamesha hi ?? useful hoga 