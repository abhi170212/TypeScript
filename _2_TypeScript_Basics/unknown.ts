// unknown wala run time pr error se bachata hai
// unknown wala type nrrowing karta hai

function process(val: unknown) {
  if (
    typeof val === "object" &&
    !!val &&
    "log" in val &&
    typeof val.log === "function"
  ) {
     val.log();
  }
} 
