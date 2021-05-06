"use strict";
// Aufgabe 1a)
function min(...numberArray) {
    let minimum = numberArray[0];
    for (let i = 1; i < numberArray.length; i++) {
        if (numberArray[i] < minimum) {
            minimum = numberArray[i];
        }
    }
    return minimum;
}
console.log(min(23, 12, 43, 1));
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
            ergebnisArray[variable] = arr[i];
            variable++;
        }
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
console.log(split(arr, 2, 3));
//console.log(split(arr, 2, 0));     // Bonus c)
//console.log(split(arr, -1, 2));    // Bonus c)
//console.log(split(arr, 0, 7));     // Bonus c)
//Aufgabe 3a)
let canvas1 = document.getElementById("canvas1");
let context1 = canvas1.getContext("2d");
//Gras
context1.fillStyle = "green";
context1.fillRect(0, 250, 500, 500);
//Himmel
context1.fillStyle = "lightblue";
context1.fillRect(0, 0, 500, 250);
//Haus
context1.lineWidth = 10;
context1.fillStyle = "brown";
context1.fillRect(75, 140, 150, 110);
context1.fillStyle = "black";
context1.fillRect(130, 190, 40, 60);
context1.beginPath();
context1.moveTo(50, 140);
context1.lineTo(150, 60);
context1.lineTo(250, 140);
context1.closePath();
context1.lineWidth = 5;
context1.fillStyle = "red";
context1.fill();
//Baum
context1.fillStyle = "brown";
context1.fillRect(380, 100, 30, 200);
context1.fillStyle = "green";
context1.beginPath();
context1.arc(395, 115, 100, 0, 2 * Math.PI, false);
context1.fillStyle = "green";
context1.fill();
//wolke
context1.beginPath();
context1.moveTo(10, 80);
context1.bezierCurveTo(30, 50, 100, 50, 80, 80);
context1.closePath();
context1.fillStyle = "white";
context1.fill();
//c)
function createRect() {
    let x = Math.random() * 500;
    let y = Math.random() * 500;
    let w = Math.random() * (500 - 50) + 50;
    let h = Math.random() * (500 - 50) + 50;
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    return {
        posX: x,
        posY: y,
        breite: w,
        höhe: h,
        color: `rgb(${r}, ${g}, ${b})`
    };
}
//d)
let canvas2 = document.getElementById("canvas2");
let context2 = canvas2.getContext("2d");
function drawRect(rechteck) {
    context2.fillStyle = rechteck.color;
    context2.fillRect(rechteck.posX, rechteck.posY, rechteck.breite, rechteck.höhe);
}
//e)
let rechtecke = [];
for (let i = 0; i < 8; i++) {
    rechtecke.push(createRect());
}
for (let rect = 0; rect < rechtecke.length; rect++) {
    drawRect(rechtecke[rect]);
}
//# sourceMappingURL=A2.2.js.map