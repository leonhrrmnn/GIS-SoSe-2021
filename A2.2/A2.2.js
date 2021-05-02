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
    let xArray = [];
    for (let i = 0; i < numbArray.length; i++) {
        xArray[i] = numbArray[numbArray.length - 1 - i];
    }
    return xArray;
}
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
    let ergebnisArray = [];
    let variable = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i >= index1 && i <= index2) {
            ergebnisArray[variable] += arr[i];
        }
        variable++;
    }
    return ergebnisArray;
}
let arr = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440]));
//console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024] )); // Bonus b)
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
//console.log(split(arr, 2, 0));     // Bonus c)
//console.log(split(arr, -1, 2));    // Bonus c)
//console.log(split(arr, 0, 7));     // Bonus c)
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
//Gras
context.fillStyle = "green";
context.fillRect(0, 250, 500, 500);
//Himmel
context.fillStyle = "lightblue";
context.fillRect(0, 0, 500, 250);
//Haus
context.lineWidth = 10;
context.fillStyle = "brown";
context.fillRect(75, 140, 150, 110);
context.fillStyle = "black";
context.fillRect(130, 190, 40, 60);
context.beginPath();
context.moveTo(50, 140);
context.lineTo(150, 60);
context.lineTo(250, 140);
context.closePath();
context.lineWidth = 5;
context.fillStyle = "red";
context.fill();
//Baum
context.fillStyle = "brown";
context.fillRect(380, 100, 30, 200);
context.fillStyle = "green";
context.beginPath();
context.arc(395, 115, 100, 0, 2 * Math.PI, false);
context.fillStyle = 'green';
context.fill();
//wolke
context.beginPath();
context.moveTo(10, 80);
context.bezierCurveTo(30, 50, 100, 50, 80, 80);
context.closePath();
context.fillStyle = "white";
context.fill();
//# sourceMappingURL=A2.2.js.map