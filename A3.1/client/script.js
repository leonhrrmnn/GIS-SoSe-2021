"use strict";
var P_3_1;
(function (P_3_1) {
    async function daten() {
        let formData = new FormData(document.forms[0]);
        console.log(formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        let url = "https://testleonhrrmnn.herokuapp.com";
        let session = new URLSearchParams(formData);
        console.log(session.toString());
        url = url + "?" + session.toString();
        console.log(url);
        let response = await fetch(url);
        console.log(response);
        let ausgabe = await response.text();
        console.log(ausgabe);
        let zurückgeben = document.getElementById("display");
        zurückgeben.innerText = ausgabe;
    }
    let button = document.getElementById("button");
    button.addEventListener("click", daten);
})(P_3_1 || (P_3_1 = {}));
//# sourceMappingURL=script.js.map