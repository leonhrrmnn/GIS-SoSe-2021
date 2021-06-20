"use strict";
var P3_4;
(function (P3_4) {
    let url = "https://testleonhrrmnn.herokuapp.com";
    let buttonAuslesen = document.getElementById("auslesen");
    let buttonAbsenden = document.getElementById("senden");
    let zurückgeben = document.getElementById("zurückgeben");
    async function senden() {
        let formData = new FormData(document.forms[0]);
        console.log(formData.get("name"));
        let session = new URLSearchParams(formData);
        url = url + "/senden?" + session.toString();
        let response = await fetch(url);
        let ausgabe = await response.text();
        let formResponse = JSON.parse(ausgabe);
        console.log(formResponse);
    }
    async function zurück() {
        let formData = new FormData(document.forms[0]);
        console.log(formData.get("name"));
        let session = new URLSearchParams(formData);
        url = url + "/zurückgeben?" + session.toString();
        let response = await fetch(url);
        let ausgabe = await response.text();
        zurückgeben.innerHTML = ausgabe;
    }
    buttonAbsenden.addEventListener("click", senden);
    buttonAuslesen.addEventListener("click", zurück);
})(P3_4 || (P3_4 = {}));
//# sourceMappingURL=script.js.map