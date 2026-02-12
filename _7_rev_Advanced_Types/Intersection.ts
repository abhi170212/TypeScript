type fileData={
     path:string,
     content:string
}

type DatabaseData = {
     connectionUrl:string,
     credentials:string
}


type AccessedFileData = fileData & DatabaseData ;
