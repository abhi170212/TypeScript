type StringArray = string[] ;
// type ElementType = StringArray[number];
type ElementType<T extends any[]> = T[number];
type Example1 = ElementType<StringArray> ;

type GetElementType<T> = T extends any[] ? T[number] : never; // or T 

