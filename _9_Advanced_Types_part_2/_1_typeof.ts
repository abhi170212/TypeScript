// JS 
const userName = "Abhishek";
console.log(typeof userName);

// now what if we want to make a type from the given values 
//jaise agar, settings ke basis par object ka type define karo.

const settings = {
     difficulty:'Medium',
     minLevel:10,
     didStart:false,
     players:['John','Jane']
}

// agar hum object ka type pahle wala tareke se karenge to dikkat hogi
type Settings = typeof settings;
function loadData(settings:Settings){
     //...
}
loadData(settings);