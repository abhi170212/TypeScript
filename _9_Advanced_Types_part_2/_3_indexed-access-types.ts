type AppUser={
     name:string,
     age:number,
     permissions:{
          id:string,
          title:string,
          description:string;
     }[]
};

// manually likhne se to accha hai ki perms ka type aise likh le
type Perms = AppUser['permissions'];
type Perm = Perms[number];


// eg, ab isme names array hai string ka 
// uske baad har ek name ka type chahiye to wo definately string hoga 
// lekin idhar wo Names[number] likhna hai 
type Names= string[];
type Name = Names[number];

