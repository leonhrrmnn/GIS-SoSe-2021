"use strict";
var _A2_3;
(function (_A2_3) {
    let body = document.body;
    let h1 = document.createElement("h1");
    body.appendChild(h1);
    h1.innerText = "Meine Burger";
    body.appendChild(_A2_3.div);
    let p = document.createElement("p");
    _A2_3.div.appendChild(p);
    p.innerText = "DIE BUNS";
    _A2_3.div.appendChild(_A2_3.canvas1);
    _A2_3.canvas1.id = "canva";
    let div2 = document.createElement("div");
    body.appendChild(div2);
    div2.id = "Button";
    for (let i = 0; i < _A2_3.allBuns.length; i++) {
        let addButton1 = document.createElement("button");
        div2.appendChild(addButton1);
        addButton1.innerText = _A2_3.allBuns[i].name + " " + _A2_3.allBuns[i].preis + "€";
        addButton1.addEventListener("click", hndclick);
        function hndclick(_event) {
            console.log(_A2_3.allBuns[i]);
        }
    }
})(_A2_3 || (_A2_3 = {}));
//# sourceMappingURL=A2_3.js.map