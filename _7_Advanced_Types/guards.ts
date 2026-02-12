type FileSource = { type: string; path: string };
type DBSource = { connection: string; type: string };

const fileSource: FileSource = {
  path: "localDisc C://Abhishek",
  type: "file",
};
const dbSource: DBSource = {
  connection: "localhost:3000/user/data",
  type: "db",
};

type source = FileSource | DBSource;
function loadData(Source: source) {
  if (typeof Source === "object" && "path" in Source) {
    return;
  }

  if (Source.type == "file") {
    console.log(" file se aya hai  ");
    return;
  }
  // ab ts ko patra chal jayega ki ab Source jo hai wo DBSource se aya hai , if not returned
}
// descriminated union pattern me type laga kar check krte hai ki kaun sa destination se call aya hai
// instanceof se bhi pata kar sakte hai 
 /*type */ 
// entity.join() [agar instance hoga to] aur entity.scan()[agar instance nhi hoga to] 
