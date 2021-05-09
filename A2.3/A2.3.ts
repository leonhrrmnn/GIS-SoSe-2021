namespace A2_3 {
    //Aufgabe1

    let body: HTMLElement = document.body;
    //Button1
    let addButton: HTMLButtonElement = document.createElement("button");
    addButton.innerText = "Neues Rechteck";
    addButton.addEventListener("click", hndNewRect);
    body.appendChild(addButton);



    function hndNewRect(_event: MouseEvent): void {
        console.log("neues Rechteck");
        drawDiv(createDiv());


    }
    //Button2
    let addButton2: HTMLButtonElement = document.createElement("button");
    addButton2.innerText = "Seite neu Laden";
    addButton2.addEventListener("click", hndClick);
    body.appendChild(addButton2);
    

    function hndClick(_event: MouseEvent): void {
        window.location.reload();
    }

    // Div erzeugen 
    interface Div {
        color: string;
        height: number;
        width: number;
        left: number;
        top: number;

    }

    function createDiv(): Div {
        let h: number = Math.random() * 500;
        let w: number = Math.random() * 500;
        let l: number = Math.random() * 500;
        let t: number = Math.random() * 500;

        let r: number = Math.random() * 255;
        let g: number = Math.random() * 255;
        let b: number = Math.random() * 255;

        return {
            height: h,
            width: w,
            color: `rgb(${r}, ${g}, ${b})`,
            left: l,
            top: t
        };
    }
    let previousElement: HTMLElement = document.body;
    function drawDiv(div1: Div): void {
        let div: HTMLDivElement = document.createElement("div");
        div.style.backgroundColor = div1.color;
        div.style.height = div1.height.toString() + "px";
        div.style.width = div1.width.toString() + "px";
        div.style.left = div1.left.toString() + "px";
        div.style.top = div1.top.toString() + "px";
        div.classList.add("rect");
        previousElement.appendChild(div);
        previousElement = div;
    }

    let divs: Div[] = [];
    for (let i: number = 0; i < 8; i++) {
        divs.push(createDiv());
    }

    for (let rect: number = 0; rect < divs.length; rect++) {

        drawDiv(divs[rect]);
    }
   


}
