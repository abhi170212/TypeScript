function getLength(val:any[]):number;
function getLength(val:string):string;

function getLength(val:string|any[]){
     if(typeof val === 'string') {
          const numberOfWords = val.split(' ').length;
          return `${numberOfWords} words`;
     }
     return val.length;
}

const numberOfWords = getLength('does this work?');
// numberOfWords.length ;
const numItems = getLength(['sports','cookies']);
// this is called as function overloading 
// u do not know what will be the output of the function when the value is 
//      value is any then number or val is string then output is string
 