"use strict";
var Modulprüfung;
(function (Modulprüfung) {
    let rezept = document.getElementById("Rezept");
    let dynamischRezepte;
    let pageID = document.querySelector("title").getAttribute("id");
    let url = "https://testleonhrrmnn.herokuapp.com";
    //let url: string = "http://localhost:8100";
    let aktuellerUser = localStorage.getItem("name");
    let favorisierenText;
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
        let responseText = await response.text();
        let ausgabe = JSON.parse(responseText);
        localStorage.setItem("name", ausgabe.username);
        console.log(ausgabe);
        if (responseText != undefined) {
            window.location.href = "alleRezepte.html";
            fehlermeldung.innerHTML = "Login erfolgreich";
        }
        else {
            fehlermeldung.innerHTML = "Username oder Passwort falsch";
        }
    }
    function Rezept(_rezept, _favText) {
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
        favorit.innerText = _favText;
        favorit.innerText = favorisierenText;
        if (favorit.innerText == "Favorisieren") {
            favorit.addEventListener("click", hndFavorisieren);
        }
        else {
            favorit.addEventListener("click", hndNichtFavorisieren);
        }
        favorit.id = "Favorisieren";
        favorit.setAttribute("_id", _rezept._id);
        fav.appendChild(favorit);
        async function hndFavorisieren() {
            url = "http://localhost:8100";
            url = url + "/favorisieren?" + "_id=" + _rezept._id.toString() + "&name=" + localStorage.getItem("name");
            let response = await fetch(url);
            let ausgabe = await response.text();
            window.location.href = "meineFavoriten.html";
        }
        async function hndNichtFavorisieren() {
            url = "http://localhost:8100";
            url = url + "/nichtFavorisieren?" + "_id=" + _rezept._id.toString() + "&name=" + localStorage.getItem("name");
            let response = await fetch(url);
            let ausgabe = await response.text();
            window.location.href = "meineFavoriten.html";
        }
        let divZutaten = document.createElement("div");
        divZutaten.id = "Zutaten";
        dynamischRezepte.appendChild(divZutaten);
        let img = document.createElement("img");
        img.src = "./meme.png";
        divZutaten.appendChild(img);
        let h4 = document.createElement("h4");
        divZutaten.appendChild(h4);
        h4.innerText = "Zutaten:";
        let zutaten = document.createElement("div");
        zutaten.id = "Zutat";
        for (let i = 0; i < _rezept.zutaten.length; i++) {
            if (_rezept.zutaten[i] != undefined || _rezept.zutaten[i] != "") {
                let listZutat = document.createElement("p");
                zutaten.appendChild(listZutat);
                listZutat.innerText = (i + 1) + ". " + _rezept.zutaten[i];
            }
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
        console.log("Baum");
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
        entfernen.addEventListener("click", hndEntfernen);
        fav.appendChild(entfernen);
        async function hndEntfernen() {
            url = "http://localhost:8100";
            url = url + "/entfernen?" + "_id=" + _rezept._id.toString();
            let response = await fetch(url);
            let ausgabe = await response.text();
            console.log(ausgabe);
            location.href = "meineRezepte.html";
        }
        let divZutaten = document.createElement("div");
        divZutaten.id = "Zutaten";
        dynamischRezepte.appendChild(divZutaten);
        let h4 = document.createElement("h4");
        divZutaten.appendChild(h4);
        h4.innerText = "Zutaten:";
        let zutaten = document.createElement("div");
        zutaten.id = "Zutat";
        for (let i = 0; i < _rezept.zutaten.length; i++) {
            if (_rezept.zutaten[i] != undefined || _rezept.zutaten[i] != "") {
                let listZutat = document.createElement("p");
                zutaten.appendChild(listZutat);
                listZutat.innerText = (i + 1) + ". " + _rezept.zutaten[i];
            }
        }
        divZutaten.appendChild(zutaten);
        let img = document.createElement("img");
        img.src = "./meme.png";
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
    async function ifRezeptFav(_rezept) {
        url = "http://localhost:8100";
        url = url + "/rezeptFav?" + "_id=" + _rezept._id.toString();
        let response = await fetch(url);
        let string = await response.text();
        favorisierenText = string;
        Rezept(_rezept, favorisierenText);
    }
    async function showAllRezepte() {
        console.log(aktuellerUser);
        url = url + "/alleRezepte?";
        let response = await fetch(url);
        let allString = await response.json();
        let all;
        for (let i = 0; i < allString.length; i++) {
            all = allString[i];
            if (all != null) {
                ifRezeptFav(all);
            }
        }
    }
    async function showFavRezepte() {
        url = url + "/meineFavoriten?" + "name=" + localStorage.getItem("name");
        let response = await fetch(url);
        let favString = await response.json();
        let fav;
        favorisierenText = "nicht mehr Favorisieren";
        for (let i = 0; i < favString.length; i++) {
            fav = favString[i];
            if (fav != null) {
                Rezept(fav, favorisierenText);
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
        url = url + "/meineRezepte?" + "name=" + localStorage.getItem("name");
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
        localStorage.removeItem("name");
        window.location.href = "login.html";
    }
    if (pageID == "AlleRezepte") {
        LoginNav();
        showAllRezepte();
    }
    // Rezept inhalte werden mit dynamisch Inhalten gefüllt
    //alleRezepte / meine Favoriten
    if (pageID == "MeineFavoriten") {
        let nachricht = document.createElement("p");
        nachricht.id = "Nachricht";
        rezept.appendChild(nachricht);
        LoginNav();
        if (aktuellerUser == null) {
            nachricht.innerText = "Um diesen Inhalt zu sehen musst du dich einloggen";
        }
        else {
            showFavRezepte();
        }
    }
    // meine Rezepte
    if (pageID == "MeineRezepte") {
        LoginNav();
        let flex = document.getElementById("flexHinzufügen");
        let nachricht = document.createElement("p");
        nachricht.id = "Nachricht";
        rezept.appendChild(nachricht);
        LoginNav();
        if (aktuellerUser == null) {
            nachricht.innerText = "Um diesen Inhalt zu sehen musst du dich einloggen";
        }
        else {
            let buttonHinzufügen = document.createElement("button");
            buttonHinzufügen.id = "hinzufügen";
            buttonHinzufügen.innerText = "+";
            flex.appendChild(buttonHinzufügen);
            buttonHinzufügen.addEventListener("click", hndHinzufügen);
            showMyRezepte();
        }
        function hndHinzufügen(_event) {
            location.href = "hinzufügen.html";
        }
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
        url = url + "/hinzufuegen?" + session.toString() + "&name=" + localStorage.getItem("name");
        let response = await fetch(url);
        let string = await response.text();
        console.log(string);
        console.log("BAum");
        window.location.href = "meineRezepte.html";
    }
    function hndAbbruch() {
        window.location.href = "meineRezepte.html";
    }
})(Modulprüfung || (Modulprüfung = {}));
//# sourceMappingURL=client.js.map