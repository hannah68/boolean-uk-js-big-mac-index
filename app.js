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

let ukIndex = (((UkCurr - UkIpp)/ UkIpp) * 100).toFixed(2);
let SwissIndex = (((SwissCurr - SwissIpp)/ SwissIpp) * 100).toFixed(2);
let SouthAfricaIndex = (((SouthAfricaCurr - SouthAfricaIpp)/ SouthAfricaIpp) * 100).toFixed(2);
let FranceIndex = (((FranceCurr - FranceIpp)/ FranceIpp) * 100).toFixed(2);
let SwedenIndex = (((swedenCurr - SwedenIpp)/ SwedenIpp) * 100).toFixed(2);

console.log(`uk Index : ${ukIndex}`);
console.log(`swiss Index : ${SwissIndex}`);
console.log(`south africa Index: ${SouthAfricaIndex}`);
console.log(`France Index : ${FranceIndex}`);
console.log(`Sweden Index: ${SwedenIndex}`);

console.log('challenge 1 =============');
let usIndex = 0;

// compare two values
console.log(ukIndex < usIndex);
console.log(SwissIndex < usIndex);
console.log(SouthAfricaIndex < usIndex);
console.log(FranceIndex < usIndex);
console.log(SwedenIndex < usIndex);


if(usIndex < ukIndex){
    console.log(`Us is undervalued`);
}else{
    console.log(`pound is undervalued`);
}


if(usIndex < SwissIndex){
    console.log(`Us is undervalued`);
}else{
    console.log(`franc is undervalued`);
}

if(usIndex < SouthAfricaIndex){
    console.log(`Us is undervalued`);
}else{
    console.log(`Zar is undervalued`);
}

if(usIndex < FranceIndex){
    console.log(`Us is undervalued`);
}else{
    console.log(`Euro is undervalued`);
}

if(usIndex < SwedenIndex){
    console.log(`Us is undervalued`);
}else{
    console.log(`Krona is undervalued`);
}




