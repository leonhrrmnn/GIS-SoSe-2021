namespace P_3_2 {

    let url: string = "https://testleonhrrmnn.herokuapp.com";
    let buttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("HTML");
    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("JSON");
    let zurückgeben: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("zurückgeben");

    async function datenHTML(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        
        console.log(formData.get("name"));
         
        let session: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/html?" + session.toString();
        let response: Response = await fetch(url);
        let ausgabe: string = await response.text();
        zurückgeben.innerHTML = ausgabe;
        

    }

    async function datenJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData.get("name"));

        
        let session: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/json?" + session.toString();
        let response: Response = await fetch(url);
        let ausgabe: string = await response.text();
        let formResponse: Form = JSON.parse(ausgabe);
        
        
        console.log(formResponse);
        
    }

    buttonHTML.addEventListener("click", datenHTML);
    buttonJSON.addEventListener("click", datenJSON);

    interface Form {
        straße: string;
        hausnummer: string;
        plz: string;
        ort: string;
        eMail: string;
    }
}