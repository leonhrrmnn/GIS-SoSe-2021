"use strict";
var P_3_2;
(function (P_3_2) {
    let url = "http://testleonhrrmnn.herokuapp.com";
    let buttonHTML = document.getElementById("HTML");
    let buttonJSON = document.getElementById("JSON");
    let zurückgeben = document.getElementById("zurückgeben");
    async function datenHTML() {
        let formData = new FormData(document.forms[0]);
        console.log(formData.get("name"));
        let session = new URLSearchParams(formData);
        url = url + "/html?" + session.toString();
        let response = await fetch(url);
        let ausgabe = await response.text();
        zurückgeben.innerHTML = ausgabe;
    }
    async function datenJSON() {
        let formData = new FormData(document.forms[0]);
        console.log(formData.get("name"));
        let session = new URLSearchParams(formData);
        url = url + "/json?" + session.toString();
        let response = await fetch(url);
        let ausgabe = await response.text();
        let formResponse = JSON.parse(ausgabe);
        console.log(formResponse);
    }
    buttonHTML.addEventListener("click", datenHTML);
    buttonJSON.addEventListener("click", datenJSON);
})(P_3_2 || (P_3_2 = {}));
//# sourceMappingURL=script.js.map