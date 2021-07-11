namespace Modulprüfung {

    interface Rezept {
        _id: string;
        rezeptname: string;
        img: string;
        zutaten: string[];
        zubereitung: string;
        user: string;
    }

    interface Favorit {
        _id: string;
        rezeptname: string;
        img: string;
        zutaten: string[];
        zubereitung: string;
        user: string;
        userFavorit: string;
    }

    let rezept: HTMLDivElement = <HTMLDivElement>document.getElementById("Rezept");
    let dynamischRezepte: HTMLDivElement;
    let pageID: string = document.querySelector("title").getAttribute("id");
    let url: string = "https://testleonhrrmnn.herokuapp.com";
    //let url: string = "http://localhost:8100";
    let aktuellerUser: string = localStorage.getItem("name");

    let favorisierenText: string;

    //Login
    if (pageID == "pageLogin") {


        let buttonEinloggen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("einloggen");
        buttonEinloggen.addEventListener("click", hndEinloggen);
    }
    async function hndEinloggen(): Promise<void> {

        let fehlermeldung: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("Fehlermeldung");

        let formData: FormData = new FormData(document.forms[0]);

        console.log(formData.get("username") + " ist eingeloggt");
        let session: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/login?" + session.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let ausgabe: User = JSON.parse(responseText);

        localStorage.setItem("name", ausgabe.username);

        console.log(ausgabe);
        if (responseText != undefined) {
            window.location.href = "alleRezepte.html";
            fehlermeldung.innerHTML = "Login erfolgreich";
        } else {
            fehlermeldung.innerHTML = "Username oder Passwort falsch";
        }




    }

    function Rezept(_rezept: Rezept, _favText: string): void {


        dynamischRezepte = document.createElement("div");
        rezept.appendChild(dynamischRezepte);

        let rezeptname: HTMLParagraphElement = document.createElement("h3");
        rezeptname.id = "Rezeptname";
        dynamischRezepte.appendChild(rezeptname);
        rezeptname.innerText = _rezept.rezeptname;

        let linie: HTMLParagraphElement = document.createElement("p");
        linie.id = "Linie";
        dynamischRezepte.appendChild(linie);
        linie.innerText = "________________________";

        let fav: HTMLDivElement = document.createElement("div");
        fav.id = "button";
        dynamischRezepte.appendChild(fav);

        let favorit: HTMLButtonElement = document.createElement("button");
        favorit.innerText = _favText;

        favorit.innerText = favorisierenText;
        if (favorit.innerText == "Favorisieren") {
            favorit.addEventListener("click", hndFavorisieren);
        } else {
            favorit.addEventListener("click", hndNichtFavorisieren);
        }


        favorit.id = "Favorisieren";

        favorit.setAttribute("_id", _rezept._id);
        fav.appendChild(favorit);



        async function hndFavorisieren(): Promise<void> {
            url = "http://localhost:8100";
            url = url + "/favorisieren?" + "_id=" + _rezept._id.toString() + "&name=" + localStorage.getItem("name");
            let response: Response = await fetch(url);
            let ausgabe: string = await response.text();
            window.location.href = "meineFavoriten.html";

        }
        async function hndNichtFavorisieren(): Promise<void> {
            url = "http://localhost:8100";
            url = url + "/nichtFavorisieren?" + "_id=" + _rezept._id.toString() + "&name=" + localStorage.getItem("name");
            let response: Response = await fetch(url);
            let ausgabe: string = await response.text();
            window.location.href = "meineFavoriten.html";

        }

        let divZutaten: HTMLDivElement = document.createElement("div");
        divZutaten.id = "Zutaten";
        dynamischRezepte.appendChild(divZutaten);

        let img: HTMLImageElement = document.createElement("img");


        img.src = "./meme.png";

        divZutaten.appendChild(img);

        let h4: HTMLParagraphElement = document.createElement("h4");
        divZutaten.appendChild(h4);
        h4.innerText = "Zutaten:";

        let zutaten: HTMLDivElement = document.createElement("div");
        zutaten.id = "Zutat";
        for (let i: number = 0; i < _rezept.zutaten.length; i++) {
            if (_rezept.zutaten[i] != undefined || _rezept.zutaten[i] != "") {
                let listZutat: HTMLParagraphElement = document.createElement("p");
                zutaten.appendChild(listZutat);
                listZutat.innerText = (i + 1) + ". " + _rezept.zutaten[i];
            }

        }
        divZutaten.appendChild(zutaten);



        let divZubereitung: HTMLDivElement = document.createElement("div");
        divZubereitung.id = "Zubereitung";
        dynamischRezepte.appendChild(divZubereitung);

        h4 = document.createElement("h4");
        divZubereitung.appendChild(h4);
        h4.innerText = "Zubereitung";

        let textZubereitung: HTMLParagraphElement = document.createElement("p");
        divZubereitung.appendChild(textZubereitung);
        textZubereitung.innerText = _rezept.zubereitung;

        let user: HTMLParagraphElement = document.createElement("p");
        user.id = "user";
        user.innerText = "von " + _rezept.user;
        dynamischRezepte.appendChild(user);

    }

    function myRezept(_rezept: Rezept): void {
        console.log("Baum");

        dynamischRezepte = document.createElement("div");
        rezept.appendChild(dynamischRezepte);

        let rezeptname: HTMLParagraphElement = document.createElement("h3");
        rezeptname.id = "Rezeptname";
        dynamischRezepte.appendChild(rezeptname);
        rezeptname.innerText = _rezept.rezeptname;

        let linie: HTMLParagraphElement = document.createElement("p");
        linie.id = "Linie";
        dynamischRezepte.appendChild(linie);
        linie.innerText = "________________________";

        let fav: HTMLDivElement = document.createElement("div");
        fav.id = "buttonBearbeitung";
        dynamischRezepte.appendChild(fav);

        let entfernen: HTMLButtonElement = document.createElement("button");
        entfernen.id = "entfernen";
        entfernen.innerText = "entfernen";
        entfernen.addEventListener("click", hndEntfernen);
        fav.appendChild(entfernen);

        async function hndEntfernen(): Promise<void> {

            url = "http://localhost:8100";
            url = url + "/entfernen?" + "_id=" + _rezept._id.toString();
            let response: Response = await fetch(url);
            let ausgabe: string = await response.text();
            console.log(ausgabe);
            location.href = "meineRezepte.html";

        }
       
        let divZutaten: HTMLDivElement = document.createElement("div");
        divZutaten.id = "Zutaten";
        dynamischRezepte.appendChild(divZutaten);

        let h4: HTMLParagraphElement = document.createElement("h4");
        divZutaten.appendChild(h4);
        h4.innerText = "Zutaten:";

        let zutaten: HTMLDivElement = document.createElement("div");
        zutaten.id = "Zutat";
        for (let i: number = 0; i < _rezept.zutaten.length; i++) {
            if (_rezept.zutaten[i] != undefined || _rezept.zutaten[i] != "") {
                let listZutat: HTMLParagraphElement = document.createElement("p");
                zutaten.appendChild(listZutat);
                listZutat.innerText = (i + 1) + ". " + _rezept.zutaten[i];
            }
        }
        divZutaten.appendChild(zutaten);

        let img: HTMLImageElement = document.createElement("img");
        img.src = "./meme.png";

        divZutaten.appendChild(img);

        let divZubereitung: HTMLDivElement = document.createElement("div");
        divZubereitung.id = "Zubereitung";
        dynamischRezepte.appendChild(divZubereitung);

        h4 = document.createElement("h4");
        divZubereitung.appendChild(h4);
        h4.innerText = "Zubereitung";

        let textZubereitung: HTMLParagraphElement = document.createElement("p");
        divZubereitung.appendChild(textZubereitung);
        textZubereitung.innerText = _rezept.zubereitung;

        let user: HTMLParagraphElement = document.createElement("p");
        user.id = "user";
        user.innerText = "von " + _rezept.user;
        dynamischRezepte.appendChild(user);



    }

    async function ifRezeptFav(_rezept: Rezept): Promise<void> {
        url = "http://localhost:8100";
        url = url + "/rezeptFav?" + "_id=" + _rezept._id.toString();
        let response: Response = await fetch(url);
        let string: string = await response.text();

        favorisierenText = string;

        Rezept(_rezept, favorisierenText);

    }




    async function showAllRezepte(): Promise<void> {



        console.log(aktuellerUser);
        url = url + "/alleRezepte?";
        let response: Response = await fetch(url);
        let allString: Rezept[] = await response.json();
        let all: Rezept;


        for (let i: number = 0; i < allString.length; i++) {

            all = allString[i];
            if (all != null) {
                ifRezeptFav(all);
            }
        }





    }

    async function showFavRezepte(): Promise<void> {
        url = url + "/meineFavoriten?" + "name=" + localStorage.getItem("name");


        let response: Response = await fetch(url);
        let favString: Favorit[] = await response.json();
        let fav: Favorit;
        favorisierenText = "nicht mehr Favorisieren";


        for (let i: number = 0; i < favString.length; i++) {

            fav = favString[i];
            if (fav != null) {
                Rezept(fav, favorisierenText);
            } else {
                let p: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
                rezept.appendChild(p);
                let anchor: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
                p.appendChild(anchor);
                anchor.innerText = "um diesen Inhalt zu sehen müssen sie sich Hier anmelden";
                anchor.href = "login.html";



            }
        }



    }

    async function showMyRezepte(): Promise<void> {
        url = url + "/meineRezepte?" + "name=" + localStorage.getItem("name");
        let response: Response = await fetch(url);
        let myString: Rezept[] = await response.json();
        let my: Rezept;


        for (let i: number = 0; i < myString.length; i++) {
            my = myString[i];
            if (my != null) {
                myRezept(my);
            } else {

                let anchor: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
                rezept.appendChild(anchor);
                anchor.innerText = "um diesen Inhalt zu sehen müssen sie sich Hier anmelden";
                anchor.href = "login.html";



            }
        }

    }

    function LoginNav(): void {

        let loginUser: HTMLAnchorElement = <HTMLAnchorElement>document.getElementById("User");
        if (aktuellerUser == null) {
            loginUser.innerText = "Login";
        } else {
            loginUser.innerText = "Logout";
            loginUser.addEventListener("click", hndLogout);
        }
    }

    function hndLogout(): void {
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
        let nachricht: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
        nachricht.id = "Nachricht";
        rezept.appendChild(nachricht);
        LoginNav();
        if (aktuellerUser == null) {
            nachricht.innerText = "Um diesen Inhalt zu sehen musst du dich einloggen";
        } else {
            showFavRezepte();
        }
    }

    // meine Rezepte

    if (pageID == "MeineRezepte") {
        LoginNav();

        let flex: HTMLDivElement = <HTMLDivElement>document.getElementById("flexHinzufügen");

        let nachricht: HTMLParagraphElement = document.createElement("p");
        nachricht.id = "Nachricht";
        rezept.appendChild(nachricht);
        LoginNav();
        if (aktuellerUser == null) {
            nachricht.innerText = "Um diesen Inhalt zu sehen musst du dich einloggen";
        } else {
            let buttonHinzufügen: HTMLButtonElement = document.createElement("button");
            buttonHinzufügen.id = "hinzufügen";
            buttonHinzufügen.innerText = "+";
            flex.appendChild(buttonHinzufügen);
            buttonHinzufügen.addEventListener("click", hndHinzufügen);
            showMyRezepte();
        }

        function hndHinzufügen(_event: Event): void {
            location.href = "hinzufügen.html";
        }

    }

    if (pageID == "hinzufügen") {
        LoginNav();

        let hinzu: HTMLButtonElement = <HTMLButtonElement>document.getElementById("senden");
        hinzu.addEventListener("click", hndHinzufügen);

        let abbruch: HTMLButtonElement = <HTMLButtonElement>document.getElementById("abbruch");
        abbruch.addEventListener("click", hndAbbruch);

    }

    async function hndHinzufügen(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let session: URLSearchParams = new URLSearchParams(<any>formData);

        url = url + "/hinzufuegen?" + session.toString() + "&name=" + localStorage.getItem("name");

        let response: Response = await fetch(url);
        let string: String = await response.text();
        console.log(string);
        console.log("BAum");

        window.location.href = "meineRezepte.html";

    }

    function hndAbbruch(): void {

        window.location.href = "meineRezepte.html";
    }




}