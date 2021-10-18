let UsBigMac = 5.65;
let UkBigMac = 3.49;
let SwissBigMac = 12.900;
let SouthAfricaBigMac = 33.50;
let FranceBigMac = 5.16;
let SwedenBigMac = 52;

let UkIpp = UsBigMac / UkBigMac;
let SwissIpp = UsBigMac/ SwissBigMac;
let SouthAfricaIpp = UsBigMac / SouthAfricaBigMac;
let FranceIpp = UsBigMac/ FranceBigMac;
let SwedenIpp = UsBigMac/ SwedenBigMac;

let UkCurr = 1.37;
let SwissCurr = 1.08;
let SouthAfricaCurr = 0.68;
let FranceCurr = 1.16;
let swedenCurr = 0.12;


console.log(`UkIpp: ${UkIpp}`);
console.log(`SwissIpp: ${SwissIpp}`);
console.log(`SouthAfricaIpp: ${SouthAfricaIpp}`);
console.log(`FranceIpp: ${FranceIpp}`);
console.log(`SwedenIpp: ${SwedenIpp}`);


console.log('====================');

console.log(`uk Index : ${((UkCurr - UkIpp)/ UkIpp) * 100}`);
console.log(`swiss Index : ${((SwissCurr - SwissIpp)/ SwissIpp) * 100 }`);
console.log(`south africa Index: ${((SouthAfricaCurr - SouthAfricaIpp)/ SouthAfricaIpp) * 100}`);
console.log(`France Index : ${((FranceCurr - FranceIpp)/ FranceIpp) * 100}`);
console.log(`Sweden Index: ${((swedenCurr - SwedenIpp)/ SwedenIpp) * 100}`);




