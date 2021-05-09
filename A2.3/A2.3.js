"use strict";
var A2_3;
(function (A2_3) {
    //Aufgabe1
    let body = document.body;
    //Button1
    let addButton = document.createElement("button");
    addButton.innerText = "Neues Rechteck";
    addButton.addEventListener("click", hndNewRect);
    body.appendChild(addButton);
    function hndNewRect(_event) {
        console.log("neues Rechteck");
        drawDiv(createDiv());
    }
    //Button2
    let addButton2 = document.createElement("button");
    addButton2.innerText = "Seite neu Laden";
    addButton2.addEventListener("click", hndClick);
    body.appendChild(addButton2);
    function hndClick(_event) {
        window.location.reload();
    }
    function createDiv() {
        let h = Math.random() * 500;
        let w = Math.random() * 500;
        let l = Math.random() * 500;
        let t = Math.random() * 500;
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        return {
            height: h,
            width: w,
            color: `rgb(${r}, ${g}, ${b})`,
            left: l,
            top: t
        };
    }
    let previousElement = document.body;
    function drawDiv(div1) {
        let div = document.createElement("div");
        div.style.backgroundColor = div1.color;
        div.style.height = div1.height.toString() + "px";
        div.style.width = div1.width.toString() + "px";
        div.style.left = div1.left.toString() + "px";
        div.style.top = div1.top.toString() + "px";
        div.classList.add("rect");
        previousElement.appendChild(div);
        previousElement = div;
    }
    let divs = [];
    for (let i = 0; i < 8; i++) {
        divs.push(createDiv());
    }
    for (let rect = 0; rect < divs.length; rect++) {
        drawDiv(divs[rect]);
    }
})(A2_3 || (A2_3 = {}));
//# sourceMappingURL=A2.3.js.map