namespace P3_4 {

    let url: string = "https://testleonhrrmnn.herokuapp.com";
    let buttonAuslesen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("auslesen");
    let buttonAbsenden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("senden");
    let zurückgeben: HTMLDivElement = <HTMLDivElement>document.getElementById("zurückgeben");

    async function senden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        
        console.log(formData.get("name"));
         
        let session: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/senden?" + session.toString();
        let response: Response = await fetch(url);
        let ausgabe: string = await response.text();
        let formResponse: Student = JSON.parse(ausgabe);
        
        
        console.log(formResponse);
        
        

    }

    async function zurück(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData.get("name"));

        
        let session: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/zurückgeben?" + session.toString();
        let response: Response = await fetch(url);
        let ausgabe: string = await response.text();
        zurückgeben.innerHTML = ausgabe;
        
        
    }

    buttonAbsenden.addEventListener("click", senden);
    buttonAuslesen.addEventListener("click", zurück);

    
}
