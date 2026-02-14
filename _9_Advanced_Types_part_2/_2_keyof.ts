type user={name:string,age:number};
type UserKeys=keyof user;

let validKey:UserKeys;
validKey="age"
validKey="name";



function getProp<T extends object,U extends keyof T>(obj:T,key:U){
     const val = obj[key];

     if(val === undefined || val === null){
          throw new Error('Accessing undefined or null values.')
     }

     return val;
}