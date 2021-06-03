namespace P_3_1 {
   
    async function daten(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData.get("name"));

        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        let url: string = "https://testleonhrrmnn.herokuapp.com";
        let session: URLSearchParams = new URLSearchParams(<any>formData);
        console.log(session.toString());
        url = url + "?" + session.toString();
        console.log(url);
        let response: Response = await fetch(url);
        console.log(response);
        let ausgabe: string = await response.text();
        console.log(ausgabe);
        let zurückgeben: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("display");
        zurückgeben.innerText = ausgabe;
    }
    
       
    

    let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button");
    button.addEventListener("click", daten);

}