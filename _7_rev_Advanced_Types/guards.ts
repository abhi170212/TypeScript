type FileSource = {type:'file', path: string };
const fileSource: FileSource = {
     type:'file',
  path: 'some/path/to/file.csv',
};

type DBSource = { connectionUrl: string ,type:'db'};
const dbSource: DBSource = {
  connectionUrl: 'some-connection-url',
  type:'db'
};

type Source = FileSource | DBSource;

function isFile(source:Source){
     return source.type === 'file';
     // here it iwll return boolean but under the hood and it will 
     // show the "source is FileSource"

}
function loadData(source: Source) {
//   if('path' in source){
//      // source.path; => use that to open the file
//      return;
//   }
//   // source.connectionUrl  

     if(isFile(source)){
          // do something this is the file 
     }
     
     if(source.type ==='file'){
          // then we can do our works in the file 
          return;
     }
     // source.connectionUrl ---> kuki file wala to accessed ho gya.
}


// DESCRIMINATED UNION => ek shared property lga dete hai uske baad usko use krte hai 
// eg, jaise ki hamne type:'file' aur type:'db', kr rakha hai , to wo wala ho jayega descriminated union ka example.





class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
     if(entity instanceof User){
          entity.join();
          return;
     }
     entity.scan();
}
