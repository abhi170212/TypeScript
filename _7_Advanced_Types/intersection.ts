type fileData = {
     path:string;
     content:string;
}


type DatabaseData = {
     connectionUrl:string;
     credentials:string;
}

type Status ={
     isOpen:true;
     errorMessage?:string;
}

type AccessFile = fileData & Status;
type DatabaseDataStatus = DatabaseData & Status;

// above is called Intersection type feature.