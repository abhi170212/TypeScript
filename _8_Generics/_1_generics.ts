let names = ["max","Anna"];
let sir_name:Array<string>=["Singh","Lincoln"]

type DataStore ={
     [key:string|number]:string|number
}
// upar wale me tum data types ko define kr diye ho
// data ka type hai wo, 
// agar isme ek object rahe aur boolean store kre to error show hoga

type Ds<T>={
     [key:string] :T
};

let st:Ds<boolean|string|number> ={} ;
st.name="Abhishek";
st.isPassed=true;
st.marks=99;

// ab isme hum, objects bna skte hai aur har ek tareke ka 
// ab values boolean ya string bhi ho sakta hai , depend on object types 

// GENERIC FUNCTIONS
function merge<T,U> (a:T,b:U){
     return [a,b];
}
const ids0 = merge<number,number>(1,4)
const ids1 = merge<number,string>(1,"Abhishek")

// ex-2 :where the user merges the two and then use them.
function mergeObject<T extends object,U extends object>(a:T,b:U){
     return {...a,...b};
}

const merged = mergeObject({name:"Abhishek"},{age:30})
console.log(merged);

// GENERIC CLASSE
class GenericClass<K>{
     constructor(public id:K){}
}
const ur=new GenericClass('li');
console.log(ur.id);