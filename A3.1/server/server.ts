import * as Http from "http";

export namespace P_3_1 {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    
    if (!port)
        port = 8100; // Port wird auf 8100 gesetzt

    let server: Http.Server = Http.createServer(); //Erstellt einen Server
    server.addListener("request", handleRequest); //wird ausgeführt wenn der Server eine "request" erhalten hat
    server.addListener("listening", handleListen); 
    server.listen(port); //schaut nach ob der Port etwas entgegen nehmen kann

    function handleListen(): void {
        console.log("Listening"); // Konsolenausgabe sobald der Server parat ist
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); // Konsolenausgabe
        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Alle dürfen darauf zugreifen
        _response.write(_request.url); //Antwort was zurückgegeben wird
        console.log(_request.url); // Konsolenausgabe Antwort
        _response.end(); // Beenden und zurückschicken
    }
}