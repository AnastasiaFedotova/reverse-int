module.exports = function reverse (number) {
   if (number < 0) {
       let result = String(number).split("").reverse();
       result.pop();
       return result.join("");
   }
   else if (number < 10) return number;
   else return Number(String(number).split("").reverse().join(""));
}
