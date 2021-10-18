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
// uk Index : -15.38
console.log(`swiss Index : ${SwissIndex}`);
// swiss Index : 146.58
console.log(`south africa Index: ${SouthAfricaIndex}`);
// south africa Index: 303.19
console.log(`France Index : ${FranceIndex}`);
// France Index : 5.94
console.log(`Sweden Index: ${SwedenIndex}`);
// Sweden Index: 10.44


// challenge1=========================
console.log('challenge 1 =============');


// compare two values
console.log(ukIndex < SwissIndex);
console.log(SwissIndex < FranceIndex);
console.log(SouthAfricaIndex < SwissIndex);
console.log(FranceIndex < SwedenIndex);
console.log(SwedenIndex < SwissIndex);


// challenge2====================
console.log('challenge 2 =============');
let usIndex = 0;

if(usIndex < ukIndex){
    console.log(`Us Dollar is undervalued`);
}else{
    console.log(`pound is undervalued`);
}


if(usIndex < SwissIndex){
    console.log(`Us Dollar is undervalued`);
}else{
    console.log(`franc is undervalued`);
}

if(usIndex < SouthAfricaIndex){
    console.log(`Us Dollar is undervalued`);
}else{
    console.log(`Zar is undervalued`);
}

if(usIndex < FranceIndex){
    console.log(`Us Dollar is undervalued`);
}else{
    console.log(`Euro is undervalued`);
}

if(usIndex < SwedenIndex){
    console.log(`Us Dollar is undervalued`);
}else{
    console.log(`Krona is undervalued`);
}




