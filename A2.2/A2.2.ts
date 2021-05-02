// Aufgabe 1a)

function min(numberArray: number[]): number {
    let minimum: number = numberArray[0];
    for (let i: number = 1; i < numberArray.length; i++) {
        if (numberArray[i] < minimum) {
            minimum = numberArray[i];
        }
    }
    return minimum;
}
console.log(min([23, 12, 43, 1]));
// 1b)
function isEven(N: number): boolean {
    if (N == 0) {

        return true;
    }
    if (N == 1) {
        return false;
    }
    return isEven(N - 2);
}

console.log(isEven(75));
/* 
Bei -1 wird immer weiter nach unten gerechnet mit N - 2, somit kommt die Funktion nie auf den Wert 0 oder 1. 
man müsste bei negativen Zahlen das ganze umgekehrt machen also nicht n -2 sondern n +2.
*/
//1c 1.)

interface Student {
    name: string;
    studiengang: string;
    geburtsdatum: string;
    matrikelnummer: number;
}

//2.)

let studi1: Student = { name: "Kevin", studiengang: "MIB", geburtsdatum: "22.02.2000", matrikelnummer: 123456 };
let studi2: Student = { name: "Hans", studiengang: "MIB", geburtsdatum: "12.12.1997", matrikelnummer: 124356 };
let studi3: Student = { name: "Kilian", studiengang: "OMB", geburtsdatum: "02.08.2001", matrikelnummer: 654321 };

//3.)

let studiArray: Student[] = [studi1, studi2, studi3, { name: "Ulrich", studiengang: "MKB", geburtsdatum: "25.10.1999", matrikelnummer: 651234 }];
console.log(studiArray[3].geburtsdatum, studiArray[2].name, studiArray[0].studiengang, studiArray[1].matrikelnummer);

// 4.)
function showInfo(student: Student): void {

    console.log("Name: " + student.name + "\nStudiengang: " + student.studiengang + "\nMatrikelnummer: " + student.matrikelnummer + "\nGeburtsdatum: " + student.geburtsdatum);

}
for (let l: number = 0; l < studiArray.length; l++) {
    showInfo(studiArray[l]);
}

//5.) 

// Aufgabe 2a)

function backwards(numbArray: number[]): number[] {
    let xArray: number[] = [];
    for (let i: number = 0; i < numbArray.length; i++) {
        xArray[i] = numbArray[numbArray.length - 1 - i];

    }
    return xArray;

}


//b)
function join(array1: number[], array2: number[]): number[] {
    let ergebnisArray: number[] = array1;
    for (let i: number = 0; i < array2.length; i++) {

        ergebnisArray.push(array2[i]);
    }


    return ergebnisArray;
}
//c) 
function split(arr: number[], index1: number, index2: number): number[] {
    let ergebnisArray: number[] = [];
    let variable: number = 0;
    for (let i: number = 0; i < arr.length; i++) {

        if (i >= index1 && i <= index2) {
            ergebnisArray[variable] += arr[i];
        }
        variable++;
    }
    return ergebnisArray;
}

let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack: number[] = backwards(arr);
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

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");


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


interface Rechteck {
    eckA: number;
    eckB: number;
    eckC: number;
    eckD: number;

}

