"use strict";
/*Aufgabe 1a)
Ausgabe:
Alles
Klar?
Logo!

Welche Namen sind zulässig?
Es dürfen keine Zahlenreihen benutzt werden. Zahlen dürfen jedoch in Verbindung mit Buchstaben genutzt werden.
Zusätzlich dürfen keine Leertasten benutzt werden, wenn man einen Abstand nutzen möchte ist ein _ möglich.
Ein . oder - kann nicht im namen genutzt werden.
Ansonsten dürfen alle Buchstaben genutzt werden.

b)
Zuerst wird die function a1 aufgerufen
in der 3. Zeile wird Alles ausgegeben, da die Variable x für Alles steht.
dann wird in Zeile 4 die func1 aufgerufen und in Zeile 11 das Klar? ausgegeben.
zum Schluss wird in Zeile 5 das Logo! ausgegeben

c)
*/
function a1() {
    let x = "Alles";
    console.log(x);
    func1();
    console.log(x);
    func2();
    console.log(x);
    func3();
}
a1();
function func1() {
    console.log("Gute!");
}
function func2() {
    console.log("Klar?");
}
function func3() {
    console.log("Logo!");
}
/*
Aufgabe 2
Die Ausgabe ist 9 8 7 6 5 4 3 2 1
In Zeile 6 wird die Variable i immer neu definiert und zwar wird von dem aktuellen i immer 1 abgezogen,
somit ensteht dieser "Countdown" von 9-1.
sobald i dann kleiner als 1 ist bzw. nicht mehr größer 0 wird der Vorgang abgebrochen.

Aufgabe 4a)
Ausgabe:
Hallo
Bla
Hallo
Blubb
Test

Variable x wird als Hallo definiert und wird in Zeile 2 somit ausgegeben
In zeile 3 wird die func1 aufgerufen innerhalb dieser funktion wird
y neu festgelegt und ausgegeben in dem Fall Bla
in Zeile 4 passiert das selbe wie in Zeile 2
in Zeile 5 wird func2 aufgerufen dort wird x auf Blubb gesetzt und ausgegeben
in Zeile 6 wird func3 aufgerufen dort wird die Variable x auf Test gesetzt und über den Aufruf
wird x (Test) in Zeile 7 ausgegeben

b)
Variablen die innerhalb einer Funktion vorkommen sind lokale Variablen
Funktionen werden wie Variablen bennannt (1a).
Wenn Funktionen einen Rückgabewert haben müssen sie genau wie Variablen mit console.log aufgerufen werden um das Ergebnis ausgeben zu können, sonst werden sie nicht angezeigt.
Variablen wird immer ein Wert zugewiesen, sei es besispielsweise ein String oder number.
Funktionen haben nicht immer einen Rückgabewert. In dem Fall werden sie mit void geschrieben.
*/
//Aufgabe 5a)
function multiply(x, y) {
    console.log(x * y);
}
//b)
function max(v, z) {
    if (v > z) {
        console.log(v);
    }
    if (v < z) {
        console.log(z);
    }
}
//c)
let i = 1;
let j = 0;
while (i <= 100) {
    j += i;
    i++;
}
console.log(j);
//d)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
for (let k = 0; k < 10; k++) {
    console.log(getRandomInt(100));
}
//e)
function factorial(n) {
    let ausgabe = 1;
    if (n < 1) {
        return 1;
    }
    for (let l = 1; l <= n; l++) {
        ausgabe *= l;
    }
    return ausgabe;
}
console.log(factorial(0));
//f)
leaplayers();
function leaplayers() {
    for (let i = 1900; i <= 2021; i++) {
        if (i % 4 == 0 && i % 100 != 0) {
            console.log(i);
        }
        if (i % 400 == 0) {
            console.log(i);
        }
    }
}
//Aufgabe 6a)
let ausgabe = "";
for (let i = 1; i <= 7; i++) {
    ausgabe += "#";
    console.log(ausgabe);
}
//b)
for (let i = 1; i <= 100; i++) {
    if (i % 3 != 0 && i % 5 != 0) {
        console.log(i);
    }
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    if (i % 5 == 0 && i % 3 != 0) {
        console.log("Buzz");
    }
}
//c)
for (let i = 1; i <= 100; i++) {
    if (i % 3 != 0 && i % 5 != 0) {
        console.log(i);
    }
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    if (i % 5 == 0) {
        console.log("Buzz");
    }
}
//d)
function schach() {
    for (let i = 1; i <= 8; i++) {
        let ausgabe = "";
        for (let j = 0; j < 4; j++) {
            if (i % 2 == 0) {
                ausgabe += "# ";
            }
            if (i % 2 != 0) {
                ausgabe += " #";
            }
        }
        console.log(ausgabe);
    }
}
schach();
//e)
function schach2(höhe, breite) {
    for (let i = 1; i <= höhe; i++) {
        let ausgabe = "";
        for (let j = 1; j <= breite; j++) {
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    ausgabe += " ";
                }
                else {
                    ausgabe += "#";
                }
            }
            if (i % 2 != 0) {
                if (j % 2 == 0) {
                    ausgabe += "#";
                }
                else {
                    ausgabe += " ";
                }
            }
        }
        console.log(ausgabe);
    }
}
//# sourceMappingURL=A2.1.js.map