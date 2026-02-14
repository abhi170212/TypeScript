const mainUserName='Abhishek';

const greetings=`Hi there ${mainUserName}`;
 
type ReadPermissions='no-read' | 'read';
type WritePermissions = 'no-write'|'write';

type FilePermissions = `${ReadPermissions}-${WritePermissions}`;
// upar wale se ek combinations ban jata hai ts me.

type DataFile ={
     data:string;
     permissions:FilePermissions
}

type DataFileEventNames = `${keyof DataFile} Changed`;

type DataFileEvent={
     [key in DataFileEventNames]:()=>void;
}

