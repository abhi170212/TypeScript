// isme 2 dikkt aati hai , pahle wale me element ho sakta hai null ho ya fir kaise pata chalega kaun sa element hai html ka 
const element = document.getElementById('form-input') as HTMLInputElement | null;

//ise bhi ham null wala case k handle kr sakte hai  
// if(!element){
//      throw new Error('element not found');
// }
// ab null coalising operator ka use krna hi hai ?.
console.log(element?.value);