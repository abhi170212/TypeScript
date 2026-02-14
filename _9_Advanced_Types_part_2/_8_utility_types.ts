function addFn(a:number,b:number){
     return a+b;
}
type fn = typeof addFn;
type returnValue = ReturnType<fn>
// there are so more built in types snd they are on documentations.
