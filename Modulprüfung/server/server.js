"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modulprüfung = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Modulprüfung;
(function (Modulprüfung) {
    let user;
    let rezept;
    let favorit;
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
    connectToDB("mongodb+srv://hallihallo:iKks2SkxNHHm1Oh2@cluster0.6xbgh.mongodb.net/Rezepteseite?retryWrites=true&w=majority");
    //connectToDB("mongodb://localhost:27017");
    async function connectToDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        user = mongoClient.db("Rezepteseite").collection("User");
        rezept = mongoClient.db("Rezepteseite").collection("Rezept");
        favorit = mongoClient.db("Rezepteseite").collection("Favorit");
        console.log("Database connection ", user != undefined);
        console.log("Database connection ", rezept != undefined);
        console.log("Database connection ", favorit != undefined);
    }
    function handleListen() {
        console.log("Listening"); // Konsolenausgabe sobald der Server parat ist
    }
    async function handleRequest(_request, _response) {
        console.log(_request.url); // Konsolenausgabe Antwort
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen
        let url = Url.parse(_request.url, true);
        let einloggen;
        let userSuchen;
        let aktuellerUser;
        if (url.pathname == "/login") {
            userSuchen = await user.findOne({ "username": url.query.username });
            einloggen = await user.findOne({ "username": url.query.username, "password": url.query.passwort });
            if (userSuchen == undefined) {
                let registrieren = { username: url.query.username, password: url.query.passwort };
                user.insertOne(registrieren);
                aktuellerUser = url.query.username;
                console.log(aktuellerUser);
                _response.write("Login erfolgreich");
                _response.end();
            }
            else {
                if (einloggen != undefined) {
                    let erfolgreich = "Login erfolgreich";
                    _response.write(erfolgreich);
                    aktuellerUser = url.query.username;
                    console.log(aktuellerUser);
                    _response.end();
                }
                else {
                    let error = "Username und Passwort stimmen nicht überein";
                    _response.write(error);
                    _response.end();
                }
            }
        }
        if (url.pathname == "/alleRezepte") {
            let cursor = rezept.find();
            let allRezepte = await cursor.toArray();
            _response.write(JSON.stringify(allRezepte));
            _response.end();
        }
        if (url.pathname == "/meineRezepte") {
            console.log(aktuellerUser);
            let cursor = rezept.find({ "user": aktuellerUser });
            let myRezepte = await cursor.toArray();
            _response.write(JSON.stringify(myRezepte));
            _response.end();
        }
        if (url.pathname == "/meineFavoriten") {
            let cursor = favorit.find({ "user": aktuellerUser });
            let favRezepte = await cursor.toArray();
            _response.write(JSON.stringify(favRezepte));
            _response.end();
        }
        if (url.pathname == "/entfernen") {
        }
        if (url.pathname == "/bearbeiten") {
        }
        if (url.pathname == "/hinzufuegen") {
            let inputRezepte = ({ rezeptname: url.query.rezeptname, img: url.query.img, zutaten: url.query.zutat, zubereitung: url.query.zubereitungText, user: aktuellerUser });
            rezept.insertOne(inputRezepte);
            _response.write(ausgabe);
            console.log(ausgabe);
            _response.end();
        }
        if (url.pathname == "/favorisieren") {
        }
    }
})(Modulprüfung = exports.Modulprüfung || (exports.Modulprüfung = {}));
//# sourceMappingURL=server.js.map