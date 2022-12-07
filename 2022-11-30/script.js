function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

//1.
const FirstActor = 'Zach_Galifianakis';
const SecondActor = 'Seth_Rogen';
console.log(FirstActor,SecondActor);
if(FirstActor.length > SecondActor.length){
   console.log('Pirmo aktoriaus vardas pavarde ilgesnis');
}
else{
    console.log('Antro aktoriaus vardas pavarde ilgesnis');
}
//2.
const Vardas = 'Tomas';
const Pavarde = 'Meska';
const GimimoMetai = '1980';
const SieMetai = '2022';
const Amzius = SieMetai - GimimoMetai;

console.log('As esu',Vardas,Pavarde,'Man yra',Amzius,'metai');
//3.
const FirstActor1 = 'Zach_Galifianakis';
const SecondActor2 = 'Seth_Rogen';
console.log(FirstActor1,SecondActor2);
const Mix = FirstActor1[1]+FirstActor1[2]+FirstActor1[3]+FirstActor1[14]+FirstActor1[15]+FirstActor1[16]+SecondActor2[1]+SecondActor2[2]+SecondActor2[3]+SecondActor2[7]+SecondActor2[8]+SecondActor2[9];
console.log(Mix);
//4.
const Pavadinimas = 'Once upon a time in hollywood';
console.log(Pavadinimas);
const PakeistosRaides =(Pavadinimas.replaceAll('o', '*').replaceAll('O', '*'));
console.log(PakeistosRaides);
//5.
let random1 = random(0, 2);
let random2 = random(0, 2);
let random3 = random(0, 2);
let random4 = random(0, 2); 
let Nuliai = 0;
let Vienetai = 0;
let Dvejetai = 0;

console.log(random1, random2, random3, random4);

if (random1==0){
    Nuliai++;
}else if(random1==1){
    Vienetai++;
}else{
    Dvejetai++;
}
if (random2==0){
    Nuliai++;
}else if(random2==1){
    Vienetai++;
}else{
    Dvejetai++;
}
if (random3==0){
    Nuliai++;
}else if(random3==1){
    Vienetai++;
}else{
    Dvejetai++;
}
if (random4==0){
    Nuliai++;
}else if(random4==1){
    Vienetai++;
}else{
    Dvejetai++;
}

console.log('Nuliai', Nuliai++,'Vienetai',Vienetai,'Dvejetai',Dvejetai);





