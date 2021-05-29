"use strict";
var P_3_1;
(function (P_3_1) {
    async function daten(_url) {
        let formData = new FormData(document.forms[0]);
        console.log(formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        let session = new URLSearchParams(formData);
        console.log(session.toString());
        _url = _url + "?" + session.toString();
        console.log(_url);
        let response = await fetch(_url);
        console.log(response);
        let ausgabe = await response.text();
        console.log(ausgabe);
        let zurückgeben = document.getElementById("display");
        zurückgeben.innerText = ausgabe;
    }
    async function hndData() {
        daten("https://testleonhrrmnn.herokuapp.com");
    }
    let button = document.getElementById("button");
    button.addEventListener("click", hndData);
})(P_3_1 || (P_3_1 = {}));
//# sourceMappingURL=script.js.map