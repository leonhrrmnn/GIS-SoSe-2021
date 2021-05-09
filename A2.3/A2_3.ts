namespace _A2_3 {
    let body: HTMLElement = document.body;

    let h1: HTMLParagraphElement = document.createElement("h1");
    body.appendChild(h1);
    h1.innerText = "Meine Burger";

    body.appendChild(div);

    let p: HTMLParagraphElement = document.createElement("p");
    div.appendChild(p);
    p.innerText = "DIE BUNS";

    div.appendChild(canvas1);
    canvas1.id = "canva";
    
    let div2: HTMLDivElement = document.createElement("div");
    body.appendChild(div2);
    div2.id = "Button";

    for (let i: number = 0; i < allBuns.length; i++) {
        let addButton1: HTMLButtonElement = document.createElement("button");
        div2.appendChild(addButton1);
        addButton1.innerText = allBuns[i].name + " " + allBuns[i].preis + "€";
        addButton1.addEventListener("click", hndclick);

        function hndclick(_event: Event): void {
            console.log(allBuns[i]);
        }
    }

    

   



}