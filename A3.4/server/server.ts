import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace P3_4 {

    interface Student {
        name: string;
        vorname: string;
        matrikel: string;
    }
    let students: Mongo.Collection;
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

    async function connectToDB(_url: string): Promise<void> {

        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        students = mongoClient.db("Test").collection("Students");
        console.log("Database connection ", students != undefined);
        let cursor: Mongo.Cursor = students.find();
        let result: Student[] = await cursor.toArray();
        console.log(result);
       
        
    }

    connectToDB("mongodb+srv://hallihallo:iKks2SkxNHHm1Oh2@cluster0.6xbgh.mongodb.net/Test?retryWrites=true&w=majority");

    function handleListen(): void {

        console.log("Listening"); // Konsolenausgabe sobald der Server parat ist

    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        console.log("I hear voices!"); // Konsolenausgabe
        console.log(_request.url); // Konsolenausgabe Antwort
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        console.log(url);
        let absenden: Student;
      
        if (url.pathname == "/senden") {

            
            absenden = {name: <string> url.query.name , vorname: <string> url.query.vorname , matrikel:  <string> url.query.matrikel };
            students.insert(absenden);
            let ausgabe: string = "Erfolgreich";
            _response.write("<p>" + ausgabe + "</p>" );

        }
        if (url.pathname == "/zurückgeben") {

            _response.setHeader("content-type", "application/json; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen
            let cursor: Mongo.Cursor = students.find();
            let result: Student[] = await cursor.toArray();
            console.log(result);
            let jsonString: string = JSON.stringify(result);
            _response.write("<p>" + jsonString + "</p>");

        }

        _response.end(); // Beenden und zurückschicken
    }
    
}