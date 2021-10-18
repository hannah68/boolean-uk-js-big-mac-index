const UsBigMac = 5.65;
const UkBigMac = 3.49;
const SwissBigMac = 12.900;
const SouthAfricaBigMac = 33.50;
const FranceBigMac = 5.16;
const SwedenBigMac = 52;

let UkIpp = UsBigMac / UkBigMac;
let SwissIpp = UsBigMac/ SwissBigMac;
let SouthAfricaIpp = UsBigMac / SouthAfricaBigMac;
let FranceIpp = UsBigMac/ FranceBigMac;
let SwedenIpp = UsBigMac/ SwedenBigMac;

const UkCurr = 1.37;
const SwissCurr = 1.08;
const SouthAfricaCurr = 0.68;
const FranceCurr = 1.16;
const swedenCurr = 0.12;


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




