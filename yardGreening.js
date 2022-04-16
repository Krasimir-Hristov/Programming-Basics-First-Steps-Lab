function yardGreening(input){

let kv = Number(input[0]);
let price = kv * 7.61;
let discountPrice  = price * 0.18;
let discount = price  - discountPrice;
  

console.log(`The final price is: ${discount} lv.`);
console.log(`The discount is: ${discountPrice} lv.`);
}
yardGreening(["550"])