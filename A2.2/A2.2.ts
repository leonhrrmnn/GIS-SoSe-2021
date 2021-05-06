// Aufgabe 1a)

function min(...numberArray: number[]): number {
    let minimum: number = numberArray[0];
    for (let i: number = 1; i < numberArray.length; i++) {
        if (numberArray[i] < minimum) {
            minimum = numberArray[i];
        }
    }
    return minimum;
}
console.log(min(23, 12, 43, 1));
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
            ergebnisArray[variable] = arr[i];
            variable++;
        }

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
console.log(split(arr, 2, 3));
//console.log(split(arr, 2, 0));     // Bonus c)
//console.log(split(arr, -1, 2));    // Bonus c)
//console.log(split(arr, 0, 7));     // Bonus c)


//Aufgabe 3a)

let canvas1: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas1");
let context1: CanvasRenderingContext2D = canvas1.getContext("2d");


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

//b)
interface Rechteck {
    color: string;
    breite: number;
    höhe: number;
    posX: number;
    posY: number;

}

//c)
function createRect(): Rechteck {

    let x: number = Math.random() * 500;
    let y: number = Math.random() * 500;
    let w: number = Math.random() * (500 - 50) + 50;
    let h: number = Math.random() * (500 - 50) + 50;

    let r: number = Math.random() * 255;
    let g: number = Math.random() * 255;
    let b: number = Math.random() * 255;

    return {
        posX: x,
        posY: y,
        breite: w,
        höhe: h,
        color: `rgb(${r}, ${g}, ${b})`
    };
}

//d)
let canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas2");
let context2: CanvasRenderingContext2D = canvas2.getContext("2d");

function drawRect(rechteck: Rechteck): void {
    context2.fillStyle = rechteck.color;
    context2.fillRect(rechteck.posX, rechteck.posY, rechteck.breite, rechteck.höhe);
}

//e)



let rechtecke: Rechteck[] = [];
for (let i: number = 0; i < 8; i++) {
    rechtecke.push(createRect());
}

for (let rect: number = 0; rect <= rechtecke.length; rect++) {
    drawRect(rechtecke[rect]);
}

