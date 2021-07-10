"use strict";
var Modulprüfung;
(function (Modulprüfung) {
    let rezept = document.getElementById("Rezept");
    let dynamischRezepte;
    let pageID = document.querySelector("title").getAttribute("id");
    let url = "https://testleonhrrmnn.herokuapp.com";
    //let url: string = "http://localhost:8100";
    let aktuellerUser;
    //Login
    if (pageID == "pageLogin") {
        let buttonEinloggen = document.getElementById("einloggen");
        buttonEinloggen.addEventListener("click", hndEinloggen);
    }
    async function hndEinloggen() {
        let fehlermeldung = document.getElementById("Fehlermeldung");
        let formData = new FormData(document.forms[0]);
        console.log(formData.get("username") + " ist eingeloggt");
        let session = new URLSearchParams(formData);
        url = url + "/login?" + session.toString();
        let response = await fetch(url);
        let ausgabe = await response.text();
        //let ausgabe = "hallo";
        fehlermeldung.innerHTML = ausgabe;
        console.log(ausgabe);
        if (ausgabe == "Login erfolgreich") {
            window.location.href = "alleRezepte.html";
        }
    }
    function Rezept(_rezept) {
        dynamischRezepte = document.createElement("div");
        rezept.appendChild(dynamischRezepte);
        let rezeptname = document.createElement("h3");
        rezeptname.id = "Rezeptname";
        dynamischRezepte.appendChild(rezeptname);
        rezeptname.innerText = _rezept.rezeptname;
        let linie = document.createElement("p");
        linie.id = "Linie";
        dynamischRezepte.appendChild(linie);
        linie.innerText = "________________________";
        let fav = document.createElement("div");
        fav.id = "button";
        dynamischRezepte.appendChild(fav);
        let favorit = document.createElement("button");
        favorit.id = "Favorisieren";
        //if (favorisieren == false){
        favorit.innerText = "Favorisieren";
        /* } else{
            favorit.innerText =  "nicht mehr Favorisieren";
        }*/
        fav.appendChild(favorit);
        favorit.addEventListener("click", hndFavorisieren);
        let divZutaten = document.createElement("div");
        divZutaten.id = "Zutaten";
        dynamischRezepte.appendChild(divZutaten);
        let img = document.createElement("img");
        img.src = _rezept.img;
        divZutaten.appendChild(img);
        let h4 = document.createElement("h4");
        divZutaten.appendChild(h4);
        h4.innerText = "Zutaten:";
        let zutaten = document.createElement("div");
        zutaten.id = "Zutat";
        for (let i = 0; i < _rezept.zutaten.length; i++) {
            let listZutat = document.createElement("p");
            zutaten.appendChild(listZutat);
            listZutat.innerText = i + ": " + _rezept.zutaten[i];
        }
        divZutaten.appendChild(zutaten);
        let divZubereitung = document.createElement("div");
        divZubereitung.id = "Zubereitung";
        dynamischRezepte.appendChild(divZubereitung);
        h4 = document.createElement("h4");
        divZubereitung.appendChild(h4);
        h4.innerText = "Zubereitung";
        let textZubereitung = document.createElement("p");
        divZubereitung.appendChild(textZubereitung);
        textZubereitung.innerText = _rezept.zubereitung;
        let user = document.createElement("p");
        user.id = "user";
        user.innerText = "von " + _rezept.user;
        dynamischRezepte.appendChild(user);
    }
    function myRezept(_rezept) {
        dynamischRezepte = document.createElement("div");
        rezept.appendChild(dynamischRezepte);
        let rezeptname = document.createElement("h3");
        rezeptname.id = "Rezeptname";
        dynamischRezepte.appendChild(rezeptname);
        rezeptname.innerText = _rezept.rezeptname;
        let linie = document.createElement("p");
        linie.id = "Linie";
        dynamischRezepte.appendChild(linie);
        linie.innerText = "________________________";
        let fav = document.createElement("div");
        fav.id = "buttonBearbeitung";
        dynamischRezepte.appendChild(fav);
        let entfernen = document.createElement("button");
        entfernen.id = "entfernen";
        entfernen.innerText = "entfernen";
        fav.appendChild(entfernen);
        let bearbeiten = document.createElement("button");
        bearbeiten.id = "bearbeiten";
        bearbeiten.innerText = "bearbeiten";
        fav.appendChild(bearbeiten);
        let divZutaten = document.createElement("div");
        divZutaten.id = "Zutaten";
        dynamischRezepte.appendChild(divZutaten);
        let h4 = document.createElement("h4");
        divZutaten.appendChild(h4);
        h4.innerText = "Zutaten:";
        let zutaten = document.createElement("div");
        zutaten.id = "Zutat";
        for (let i = 0; i < _rezept.zutaten.length; i++) {
            let listZutat = document.createElement("p");
            zutaten.appendChild(listZutat);
            listZutat.innerText = i + ": " + _rezept.zutaten[i];
        }
        divZutaten.appendChild(zutaten);
        let img = document.createElement("img");
        img.src = _rezept.img;
        divZutaten.appendChild(img);
        let divZubereitung = document.createElement("div");
        divZubereitung.id = "Zubereitung";
        dynamischRezepte.appendChild(divZubereitung);
        h4 = document.createElement("h4");
        divZubereitung.appendChild(h4);
        h4.innerText = "Zubereitung";
        let textZubereitung = document.createElement("p");
        divZubereitung.appendChild(textZubereitung);
        textZubereitung.innerText = _rezept.zubereitung;
        let user = document.createElement("p");
        user.id = "user";
        user.innerText = "von " + _rezept.user;
        dynamischRezepte.appendChild(user);
    }
    function hndFavorisieren() {
        console.log("hello");
    }
    async function showAllRezepte() {
        url = url + "/alleRezepte?";
        let response = await fetch(url);
        let allString = await response.json();
        let all;
        for (let i = 0; i < allString.length; i++) {
            all = allString[i];
            if (all != null) {
                Rezept(all);
            }
        }
    }
    async function showFavRezepte() {
        url = url + "/meineFavoriten?";
        console.log("busch");
        let response = await fetch(url);
        let favString = await response.json();
        let fav;
        for (let i = 0; i < favString.length; i++) {
            fav = favString[i];
            if (fav != null) {
                Rezept(fav);
            }
            else {
                let p = document.createElement("p");
                rezept.appendChild(p);
                let anchor = document.createElement("a");
                p.appendChild(anchor);
                anchor.innerText = "um diesen Inhalt zu sehen müssen sie sich Hier anmelden";
                anchor.href = "login.html";
            }
        }
    }
    async function showMyRezepte() {
        url = url + "/meineRezepte?";
        let response = await fetch(url);
        let myString = await response.json();
        let my;
        for (let i = 0; i < myString.length; i++) {
            my = myString[i];
            if (my != null) {
                myRezept(my);
            }
            else {
                let anchor = document.createElement("a");
                rezept.appendChild(anchor);
                anchor.innerText = "um diesen Inhalt zu sehen müssen sie sich Hier anmelden";
                anchor.href = "login.html";
            }
        }
    }
    function LoginNav() {
        let loginUser = document.getElementById("User");
        if (aktuellerUser == null) {
            loginUser.innerText = "Login";
        }
        else {
            loginUser.innerText = "Logout";
            loginUser.addEventListener("click", hndLogout);
        }
    }
    function hndLogout() {
        console.log("ausloggen");
    }
    if (pageID == "AlleRezepte") {
        LoginNav();
        showAllRezepte();
    }
    // Rezept inhalte werden mit dynamisch Inhalten gefüllt
    //alleRezepte / meine Favoriten
    if (pageID == "MeineFavoriten") {
        LoginNav();
        showFavRezepte();
    }
    // meine Rezepte
    if (pageID == "MeineRezepte") {
        LoginNav();
        let buttonHinzufügen = document.getElementById("hinzufügen");
        buttonHinzufügen.addEventListener("click", hndHinzufügen);
        function hndHinzufügen(_event) {
            location.href = "hinzufügen.html";
        }
        showMyRezepte();
    }
    if (pageID == "hinzufügen") {
        LoginNav();
        let hinzu = document.getElementById("senden");
        hinzu.addEventListener("click", hndHinzufügen);
        let abbruch = document.getElementById("abbruch");
        abbruch.addEventListener("click", hndAbbruch);
    }
    async function hndHinzufügen() {
        let formData = new FormData(document.forms[0]);
        let session = new URLSearchParams(formData);
        url = url + "/hinzufuegen?" + session.toString();
        console.log("BAum");
        let response = await fetch(url);
        let string = await response.text();
        console.log(string);
        window.location.href = "meineRezepte.html";
    }
    function hndAbbruch() {
        window.location.href = "meineRezepte.html";
    }
})(Modulprüfung || (Modulprüfung = {}));
//# sourceMappingURL=client.js.map