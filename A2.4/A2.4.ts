namespace A2_4 {

    console.log("Hello");

    function createDiv(_auswahl: Parts): HTMLDivElement {

        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("burger");

        let bild: HTMLImageElement = document.createElement("img");
        bild.src = _auswahl.form;
        div.appendChild(bild);

        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = _auswahl.name;
        button.addEventListener("click", hndClickSelection);
        div.appendChild(button);

        return div;

        function hndClickSelection(_event: Event): void {
            console.log("hallo");
            sessionStorage.setItem("bild", _auswahl.form);
        }

    }

    function showAuswahl(_burger: Parts[]): void {
        let divBurger: HTMLDivElement = <HTMLDivElement>document.getElementById("Burger");
        for (let i: number = 0; i < _burger.length; i++) {
            let div: HTMLDivElement = createDiv(_burger[i]);
            divBurger.appendChild(div);
        }
    }
    showAuswahl(auswahlJSON.buns);
   

}