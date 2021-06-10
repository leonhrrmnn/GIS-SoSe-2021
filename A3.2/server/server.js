"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2 = void 0;
const Http = require("http");
const Url = require("url");
var P_3_2;
(function (P_3_2) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100; // Port wird auf 8200 gesetzt
    let server = Http.createServer(); //Erstellt einen Server
    server.addListener("request", handleRequest); //wird ausgeführt wenn der Server eine "request" erhalten hat
    server.addListener("listening", handleListen);
    server.listen(port); //schaut nach ob der Port etwas entgegen nehmen kann
    function handleListen() {
        console.log("Listening"); // Konsolenausgabe sobald der Server parat ist
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // Konsolenausgabe
        console.log(_request.url); // Konsolenausgabe Antwort
        let url = Url.parse(_request.url, true);
        console.log(url);
        if (url.pathname == "/html") {
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen
            for (let key in url.query) {
                _response.write("<p>" + key + ": " + url.query[key] + "</p>");
            }
        }
        if (url.pathname == "/json") {
            _response.setHeader("content-type", "application/json; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.end(); // Beenden und zurückschicken
    }
})(P_3_2 = exports.P_3_2 || (exports.P_3_2 = {}));
//# sourceMappingURL=server.js.map