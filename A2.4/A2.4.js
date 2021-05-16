"use strict";
var A2_4;
(function (A2_4) {
    let pageID = document.querySelector("title").getAttribute("id");
    console.log("Hello");
    function createDiv(_auswahl) {
        let div = document.createElement("div");
        div.classList.add("burger");
        let bild = document.createElement("img");
        bild.src = _auswahl.form;
        div.appendChild(bild);
        let button = document.createElement("button");
        button.innerText = _auswahl.name;
        if (pageID == "Seite1") {
            button.addEventListener("click", hndClickSelection);
            div.appendChild(button);
            function hndClickSelection(_event) {
                sessionStorage.setItem("bild", _auswahl.form);
                sessionStorage.setItem("name", _auswahl.name);
                location.href = "pattys.html";
            }
        }
        if (pageID == "Seite2") {
            button.addEventListener("click", hndPattyClick);
            div.appendChild(button);
            function hndPattyClick(_event) {
                sessionStorage.setItem("bild2", _auswahl.form);
                sessionStorage.setItem("name2", _auswahl.name);
                location.href = "soßen.html";
            }
        }
        if (pageID == "Seite3") {
            button.addEventListener("click", hndSoßenClick);
            div.appendChild(button);
            function hndSoßenClick(_event) {
                sessionStorage.setItem("bild3", _auswahl.form);
                sessionStorage.setItem("name3", _auswahl.name);
                location.href = "burger.html";
            }
        }
        return div;
    }
    function showAuswahl(_burger) {
        let divBurger = document.getElementById("Burger");
        for (let i = 0; i < _burger.length; i++) {
            let div = createDiv(_burger[i]);
            divBurger.appendChild(div);
        }
    }
    if (pageID == "Seite1") {
        showAuswahl(A2_4.auswahlJSON.buns);
    }
    if (pageID == "Seite2") {
        showAuswahl(A2_4.auswahlJSON.pattys);
    }
    if (pageID == "Seite3") {
        showAuswahl(A2_4.auswahlJSON.soßen);
    }
    if (pageID == "Seite2" || pageID == "Seite3") {
        let auswahl = document.getElementById("Ausgewählt");
        auswahl.classList.add("currentlyPicked");
        if (pageID == "Seite2") {
            let bunBild = document.createElement("img");
            bunBild.src = sessionStorage.getItem("bild");
            auswahl.appendChild(bunBild);
        }
        if (pageID == "Seite3") {
            let bunBild = document.createElement("img");
            bunBild.src = sessionStorage.getItem("bild");
            auswahl.appendChild(bunBild);
            let pattyBild = document.createElement("img");
            pattyBild.src = sessionStorage.getItem("bild2");
            auswahl.appendChild(pattyBild);
        }
    }
    if (pageID == "Seite4") {
        let auswahl = document.getElementById("Ausgewählt");
        auswahl.classList.add("currentlyPicked");
        let bunBild = document.createElement("img");
        bunBild.src = sessionStorage.getItem("bild");
        auswahl.appendChild(bunBild);
        let pattyBild = document.createElement("img");
        pattyBild.src = sessionStorage.getItem("bild2");
        auswahl.appendChild(pattyBild);
        let soßeBild = document.createElement("img");
        soßeBild.src = sessionStorage.getItem("bild3");
        auswahl.appendChild(soßeBild);
        let text = document.getElementById("text");
        text.innerText = "Dein ausgewählter Burger besteht aus einem " + sessionStorage.getItem("name") + ", einem " + sessionStorage.getItem("name2") + " Patty und einer " + sessionStorage.getItem("name3") + " Soße";
    }
})(A2_4 || (A2_4 = {}));
//# sourceMappingURL=A2.4.js.map