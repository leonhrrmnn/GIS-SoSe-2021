import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Modulprüfung {

    interface User {
        username: string;
        password: string;
    }
    interface Rezept {
        rezeptname: string;
        img: string;
        zutaten: string[];
        zubereitung: string;
        user: string;
    }
    interface Favorit {
        rezeptname: string;
        img: string;
        zutaten: string[];
        zubereitung: string;
        user: string;
    }

    let user: Mongo.Collection;
    let rezept: Mongo.Collection;
    let favorit: Mongo.Collection;

    let port: number = Number(process.env.PORT);
    if (!port) {
        port = 8100; // Port wird auf 8100 gesetzt
    }

    startServer(port);

    function startServer(_port: number): void {

        console.log("Starting server on Port " + _port);

        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }

    connectToDB("mongodb+srv://hallihallo:iKks2SkxNHHm1Oh2@cluster0.6xbgh.mongodb.net/Rezepteseite?retryWrites=true&w=majority");

    //connectToDB("mongodb://localhost:27017");
    async function connectToDB(_url: string): Promise<void> {

        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        user = mongoClient.db("Rezepteseite").collection("User");
        rezept = mongoClient.db("Rezepteseite").collection("Rezept");
        favorit = mongoClient.db("Rezepteseite").collection("Favorit");
        console.log("Database connection ", user != undefined);
        console.log("Database connection ", rezept != undefined);
        console.log("Database connection ", favorit != undefined);

    }

    function handleListen(): void {

        console.log("Listening"); // Konsolenausgabe sobald der Server parat ist

    }
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {


        console.log(_request.url); // Konsolenausgabe Antwort
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        let einloggen: User;
        let userSuchen: User;
        let aktuellerUser: string;
        
        
        
        

        if (url.pathname == "/login") {

            userSuchen = await user.findOne({"username": <string> url.query.username });

            einloggen = await user.findOne({ "username": <string> url.query.username, "password": <string> url.query.passwort });

            if (userSuchen == undefined) {
                let registrieren: User = { username: <string>url.query.username, password: <string>url.query.passwort };
                user.insertOne(registrieren);
                aktuellerUser = <string>url.query.username;
                
                console.log(aktuellerUser);
                _response.write("Login erfolgreich" );
                _response.end();
            } else {
                if (einloggen != undefined) {
                    let erfolgreich: string = "Login erfolgreich";
                    _response.write(erfolgreich);
                    aktuellerUser = <string>url.query.username;
                    console.log(aktuellerUser);
                    _response.end();
                } else {
                    
                    let error: string = "Username und Passwort stimmen nicht überein";
                    _response.write(error);
                    _response.end();
                }
            }

        }


        if (url.pathname == "/alleRezepte") {

            let cursor: Mongo.Cursor = rezept.find();
            let allRezepte: Rezept[] = await cursor.toArray();
            _response.write(JSON.stringify(allRezepte));
            _response.end();

        }

        if (url.pathname == "/meineRezepte") {
            console.log(aktuellerUser);
            let cursor: Mongo.Cursor = rezept.find({ "user": aktuellerUser });
            let myRezepte: Rezept[] = await cursor.toArray();
            _response.write(JSON.stringify(myRezepte));
            _response.end();
        }

        if (url.pathname == "/meineFavoriten") {
            
            let cursor: Mongo.Cursor = favorit.find({ "user": aktuellerUser });
            let favRezepte: Favorit[] = await cursor.toArray();
            _response.write(JSON.stringify(favRezepte));
            _response.end();
        }
        
        if (url.pathname == "/entfernen") {

        }

        if (url.pathname == "/bearbeiten") {

        }

        if (url.pathname == "/hinzufuegen") {
            
            let inputRezepte: Rezept = ({rezeptname: <string> url.query.rezeptname, img: <string> url.query.img, zutaten: <string[]> url.query.zutat, zubereitung: <string> url.query.zubereitungText, user: <string>aktuellerUser });
            rezept.insertOne(inputRezepte);
            _response.write(ausgabe);
            console.log(ausgabe);
            _response.end();
            
            
        }

        if (url.pathname == "/favorisieren") {


        }
    

    }

}