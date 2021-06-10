import * as Http from "http";
import * as Url from "url";

export namespace P_3_2 {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100; // Port wird auf 8200 gesetzt

    let server: Http.Server = Http.createServer(); //Erstellt einen Server
    server.addListener("request", handleRequest); //wird ausgeführt wenn der Server eine "request" erhalten hat
    server.addListener("listening", handleListen);
    server.listen(port); //schaut nach ob der Port etwas entgegen nehmen kann

    function handleListen(): void {
        console.log("Listening"); // Konsolenausgabe sobald der Server parat ist
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); // Konsolenausgabe
        console.log(_request.url); // Konsolenausgabe Antwort


        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        console.log(url);
       

        if (url.pathname == "/html") {
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen
            for (let key in url.query) {           
            _response.write("<p>" + key + ": "  + url.query[key] + "</p>" );
           
            }       
        }
        if (url.pathname == "/json") {
            _response.setHeader("content-type", "application/json; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

        }
        _response.end(); // Beenden und zurückschicken
    }
}