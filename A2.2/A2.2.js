"use strict";
// Aufgabe 1a)
function min(numberArray) {
    let minimum = numberArray[0];
    for (let i = 1; i < numberArray.length; i++) {
        if (numberArray[i] < minimum) {
            minimum = numberArray[i];
        }
    }
    return minimum;
}
console.log(min([23, 12, 43, 1]));
// 1b)
function isEven(N) {
    if (N == 0) {
        return true;
    }
    if (N == 1) {
        return false;
    }
    return isEven(N - 2);
}
console.log(isEven(75));
//2.)
let studi1 = { name: "Kevin", studiengang: "MIB", geburtsdatum: "22.02.2000", matrikelnummer: 123456 };
let studi2 = { name: "Hans", studiengang: "MIB", geburtsdatum: "12.12.1997", matrikelnummer: 124356 };
let studi3 = { name: "Kilian", studiengang: "OMB", geburtsdatum: "02.08.2001", matrikelnummer: 654321 };
//3.)
let studiArray = [studi1, studi2, studi3, { name: "Ulrich", studiengang: "MKB", geburtsdatum: "25.10.1999", matrikelnummer: 651234 }];
console.log(studiArray[3].geburtsdatum, studiArray[2].name, studiArray[0].studiengang, studiArray[1].matrikelnummer);
// 4.)
function showInfo(student) {
    console.log("Name: " + student.name + "\nStudiengang: " + student.studiengang + "\nMatrikelnummer: " + student.matrikelnummer + "\nGeburtsdatum: " + student.geburtsdatum);
}
for (let l = 0; l < studiArray.length; l++) {
    showInfo(studiArray[l]);
}
//5.) 
// Aufgabe 2a)
function backwards(numbArray) {
    let xArray = numbArray;
    for (let i = 0; i <= numbArray.length; i++) {
        numbArray[i] = xArray[numbArray.length - i];
    }
    return xArray;
}
console.log(backwards([1, 2, 3, 4, 5]));
//b)
function join(array1, array2) {
    let ergebnisArray = array1;
    for (let i = 0; i < array2.length; i++) {
        ergebnisArray.push(array2[i]);
    }
    return ergebnisArray;
}
//c) 
function split(arr, index1, index2) {
    let ergebnisArray;
    let variable = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i >= index1 && i <= index2) {
            ergebnisArray[variable] += arr[i];
        }
        variable++;
    }
    return ergebnisArray;
}
//# sourceMappingURL=A2.2.js.map