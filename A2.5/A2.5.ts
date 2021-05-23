namespace A2_5 {

    export interface Burger {
        pattys: Parts[];
        buns: Parts[];
        soßen: Parts[];
    }
    export interface Parts {
        name: string;
        form: string;
        preis: number;
        vegan: boolean;
    }


    let pageID: string = document.querySelector("title").getAttribute("id");

    function createDiv(_auswahl: Parts): HTMLDivElement {

        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("burger");

        let bild: HTMLImageElement = document.createElement("img");
        bild.src = _auswahl.form;
        div.appendChild(bild);

        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = _auswahl.name;


        if (pageID == "Seite1") {
            button.addEventListener("click", hndClickSelection);
            div.appendChild(button);
            function hndClickSelection(_event: Event): void {
                sessionStorage.setItem("bild", _auswahl.form);
                sessionStorage.setItem("name", _auswahl.name);
                location.href = "pattys.html";
            }
        }
        if (pageID == "Seite2") {
            button.addEventListener("click", hndPattyClick);
            div.appendChild(button);
            function hndPattyClick(_event: Event): void {
                sessionStorage.setItem("bild2", _auswahl.form);
                sessionStorage.setItem("name2", _auswahl.name);
                location.href = "soßen.html";
            }
        }
        if (pageID == "Seite3") {
            button.addEventListener("click", hndSoßenClick);
            div.appendChild(button);
            function hndSoßenClick(_event: Event): void {
                sessionStorage.setItem("bild3", _auswahl.form);
                sessionStorage.setItem("name3", _auswahl.name);
                location.href = "burger.html";
            }
        }
        return div;

    }

    function showAuswahl(_burger: Parts[]): void {

        let divBurger: HTMLDivElement = <HTMLDivElement>document.getElementById("Burger");
        for (let i: number = 0; i < _burger.length; i++) {
            let div: HTMLDivElement = createDiv(_burger[i]);
            divBurger.appendChild(div);
        }
    }


    async function einlesen(): Promise<void> {
        let auswahl: Response = await fetch("https://leonhrrmnn.github.io/GIS-SoSe-2021/A2.5/data.json");
        console.log("Auswahl: ", auswahl);

        let auswahlBurger: Burger = await auswahl.json();

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
        let auswahl: HTMLDivElement = <HTMLDivElement>document.getElementById("Ausgewählt");
        auswahl.classList.add("currentlyPicked");

        if (pageID == "Seite2") {
            let bunBild: HTMLImageElement = document.createElement("img");
            bunBild.src = sessionStorage.getItem("bild");
            auswahl.appendChild(bunBild);
        }
        if (pageID == "Seite3") {
            let bunBild: HTMLImageElement = document.createElement("img");
            bunBild.src = sessionStorage.getItem("bild");
            auswahl.appendChild(bunBild);

            let pattyBild: HTMLImageElement = document.createElement("img");
            pattyBild.src = sessionStorage.getItem("bild2");
            auswahl.appendChild(pattyBild);

        }
    }

    if (pageID == "Seite4") {
        let auswahl: HTMLDivElement = <HTMLDivElement>document.getElementById("Ausgewählt");
        auswahl.classList.add("currentlyPicked");

        let bunBild: HTMLImageElement = document.createElement("img");
        bunBild.src = sessionStorage.getItem("bild");
        auswahl.appendChild(bunBild);

        let pattyBild: HTMLImageElement = document.createElement("img");
        pattyBild.src = sessionStorage.getItem("bild2");
        auswahl.appendChild(pattyBild);

        let soßeBild: HTMLImageElement = document.createElement("img");
        soßeBild.src = sessionStorage.getItem("bild3");
        auswahl.appendChild(soßeBild);

        let text: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("text");
        text.innerText = "Dein ausgewählter Burger besteht aus einem " + sessionStorage.getItem("name") + ", einem " + sessionStorage.getItem("name2") + " Patty und einer " + sessionStorage.getItem("name3") + " Soße";

        async function display(_url: RequestInfo): Promise<void> {

            let session: URLSearchParams = new URLSearchParams(sessionStorage);
            console.log(session.toString());
            _url = _url + "?" + session.toString();

            let response: Response = await fetch(_url);
            console.log(response);
            let ausgabe: EndBurger = await response.json();
            let zurückgeben: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("display");

            if (ausgabe.error) {
                zurückgeben.innerText = "error";
            } else {
                zurückgeben.innerText = "message";
            }

        }
        display("https://gis-communication.herokuapp.com");
    }
    interface EndBurger {
        error: string;
        
        
    }


}