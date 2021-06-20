"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var P3_4;
(function (P3_4) {
    let students;
    let port = Number(process.env.PORT);
    if (!port) {
        port = 8100; // Port wird auf 8100 gesetzt
    }
    startServer(port);
    function startServer(_port) {
        console.log("Starting server on Port " + _port);
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectToDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        students = mongoClient.db("Test").collection("Students");
        console.log("Database connection ", students != undefined);
        let cursor = students.find();
        let result = await cursor.toArray();
        console.log(result);
    }
    connectToDB("mongodb+srv://hallihallo:iKks2SkxNHHm1Oh2@cluster0.6xbgh.mongodb.net/Test?retryWrites=true&w=majority");
    function handleListen() {
        console.log("Listening"); // Konsolenausgabe sobald der Server parat ist
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!"); // Konsolenausgabe
        console.log(_request.url); // Konsolenausgabe Antwort
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen
        let url = Url.parse(_request.url, true);
        console.log(url);
        let absenden;
        if (url.pathname == "/senden") {
            absenden = { name: url.query.name, vorname: url.query.vorname, matrikel: url.query.matrikel };
            students.insert(absenden);
            let ausgabe = "Erfolgreich";
            _response.write("<p>" + ausgabe + "</p>");
        }
        if (url.pathname == "/zurückgeben") {
            _response.setHeader("content-type", "application/json; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen
            let cursor = students.find();
            let result = await cursor.toArray();
            console.log(result);
            let jsonString = JSON.stringify(result);
            _response.write("<p>" + jsonString + "</p>");
        }
        _response.end(); // Beenden und zurückschicken
    }
})(P3_4 = exports.P3_4 || (exports.P3_4 = {}));
//# sourceMappingURL=server.js.map