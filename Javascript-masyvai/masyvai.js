function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//1.
console.log('1.<----------')
let letterArrayNum = []
let letterArray = []
let letters = 'ABCD';
let countA = 0
let countB = 0
let countC = 0
let countD = 0
for (let i = 0; i < 200; i++) {
    letterArrayNum.push(rand(0, 3))
}
for (let i = 0; i < letterArrayNum.length; i++) {
    if (letterArrayNum[i] === 0) {
        letterArray.push('A')
        countA++;
    }
    if (letterArrayNum[i] === 1) {
        letterArray.push('B')
        countB++;
    }
    if (letterArrayNum[i] === 2) {
        letterArray.push('C')
        countC++;
    }
    if (letterArrayNum[i] === 3) {
        letterArray.push('D')
        countD++;
    }
}
console.log('Raidžių masyvas: ',letterArray)
console.log('Raidžių A yra: ', countA)
console.log('Raidžių B yra: ', countB)
console.log('Raidžių C yra: ', countC)
console.log('Raidžių D yra: ', countD)
//2.
console.log('2.<----------')
letterArray.sort();
console.log(letterArray);
//3.
console.log('3.<----------')
let masyvas1a = [];
let masyvas2b = [];
let masyvas3c = [];

for (let i = 0; i < 200; i++) {
    letter = letters[rand(0, 3)];
    masyvas1a.push(letter);

    letter = letters[rand(0, 3)];
    masyvas2b.push(letter);

    letter = letters[rand(0, 3)];
    masyvas3c.push(letter);
}
console.log(masyvas1a);
console.log(masyvas2b);
console.log(masyvas3c);

let masyvas4d = [];
let unikalios = 0;
let unikaliosKombi = 0;

for (let i = 0; i <masyvas1a.length; i++) {
    masyvas4d.push(masyvas2b[i] + masyvas2b[i] + masyvas3c[i]);

    if(masyvas1a[i] !== masyvas2b[i] && masyvas1a[i] !== masyvas3c[i] && masyvas2b[i] !== masyvas3c[i]) {
        unikalios++;
    }

    if(masyvas1a[i] === masyvas2b[i] && masyvas1a[i] === masyvas3c[i] & masyvas2b[i] === masyvas3c[i]) {
        unikaliosKombi++;
    }
}
console.log('Sudeti masyvai:',masyvas4d);
console.log('Unikalios reiksmes:',unikalios);
console.log('Unikalios kombinacijos:',unikaliosKombi);
//4.
console.log('4.<----------')
let masyvas1 = []
let masyvas2 = []

const masyvas = [];

for (let i = 0; i < 100; i++) {
    let number = rand(100, 999)
    let check = masyvas1.includes(number)
    if (check === false) {
        masyvas1.push(number);
    } else {
        while (check === true) {
            number = rand(100, 999)
            check = masyvas1.includes(number)
            if (check === false) {
                masyvas1.push(number)
            }
        }
    }
}
for (let i = 0; i < 100; i++) {
    let number = rand(100, 999)
    let check = masyvas2.includes(number)
    if (check === false) {
        masyvas2.push(number);
    } else {
        while (check === true) {
            number = rand(100, 999)
            check = masyvas2.includes(number)
            if (check === false) {
                masyvas2.push(number)
            }
        }
    }
}
console.log('masyvas1 su unikaliomis reikšmėmis:',masyvas1)
console.log('masyvas2 su unikaliomis reikšmėmis:',masyvas2)
//5.
console.log('5.<----------')
let masyvas3 = [];

        for (let i = 0; i < masyvas1.length; i++) {
            let number = masyvas1[i];
            let check = masyvas2.includes(number);
            if (check === false) {
                masyvas3.push(number);
            }
        }

        console.log(masyvas3);
//6.
console.log('6.<----------')
let kartojantis = [];

        for (let i = 0; i < masyvas1.length; i++) {
            let number = masyvas1[i];
            let check = masyvas2.includes(number);
            if (check === true) {
                kartojantis.push(number);
            }
        }

        console.log(kartojantis);




