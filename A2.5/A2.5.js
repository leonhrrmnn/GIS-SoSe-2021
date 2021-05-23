"use strict";
var A2_5;
(function (A2_5) {
    let pageID = document.querySelector("title").getAttribute("id");
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
    async function einlesen() {
        let auswahl = await fetch("https://leonhrrmnn.github.io/GIS-SoSe-2021/A2.5/data.json");
        console.log("Auswahl: ", auswahl);
        let auswahlBurger = await auswahl.json();
        if (pageID == "Seite1") {
            showAuswahl(auswahlBurger.buns);
        }
        if (pageID == "Seite2") {
            showAuswahl(auswahlBurger.pattys);
        }
        if (pageID == "Seite3") {
            showAuswahl(auswahlBurger.soßen);
        }
    }
    einlesen();
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
        async function display(_url) {
            let session = new URLSearchParams(sessionStorage);
            console.log(session.toString());
            _url = _url + "?" + session.toString();
            let response = await fetch(_url);
            console.log(response);
            let ausgabe = await response.json();
            let zurückgeben = document.createElement("p");
            auswahl.appendChild(zurückgeben);
            if (ausgabe.error) {
                zurückgeben.innerText = ausgabe.error;
            }
            else {
                zurückgeben.innerText = ausgabe.message;
            }
        }
        display("https://gis-communication.herokuapp.com");
    }
})(A2_5 || (A2_5 = {}));
//# sourceMappingURL=A2.5.js.map