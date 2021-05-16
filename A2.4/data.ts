namespace A2_4 {

    export interface Burger {
        pattys: Parts[];
        buns: Parts[];
        soßen: Parts[];
    }
    export interface Parts {
        name: string;
        form: string;
        preis: number;
        vegan: boolean;
    }

    export let burgerJSON: string =
        `
        { 
            "buns": [
                {
                    "name": "Laugen-Bun",
                    "form": "A2.4/Bilder/laugen-bun.png",
                    "preis": 3,
                    "vegan": "true" 
                },
                {
                    "name": "Brioche-Bun",
                    "form": "A2.4/Bilder/brioche-bun.png",
                    "preis": 1,
                    "vegan": "false" 
                },
                {
                    "name": "Sesam-Bun",
                    "form": "A2.4/Bilder/sesam-bun.png",
                    "preis": 1,
                    "vegan": "true"
                }

            ],
            "pattys": [
                {
                    "name": "Beef",
                    "form": "A2.4/Bilder/beef200.png",
                    "preis": 3,
                    "vegan": "false"
                    
                },
                {
                    "name": "Beef",
                    "form": "A2.4/Bilder/beef.png",
                    "preis": 2,
                    "vegan": "false"
                    
                },
                {
                    "name": "Chicken",
                    "form": "A2.4/Bilder/chicken.png",
                    "preis": 2,
                    "vegan": "false"
                    
                },
                {
                    "name": "Veggie",
                    "form": "A2.4/Bilder/veggie.png",
                    "preis": 3,
                    "vegan": "true"
                    
                }

            ],
            "soßen": [
                {
                    "name": "Ketchup",
                    "form": "A2.4/Bilder/ketchup.png",
                    "preis": 1,
                    "vegan": "true"
                },
                {
                    "name": "Aioli",
                    "form": "A2.4/Bilder/aioli.png"),
                    "preis": 1,
                    "vegan": "true"
                },
                {
                    "name": "BBQ",
                    "form": "A2.4/Bilder/bbq.png",
                    "preis": 1,
                    "vegan": "true"
                }
            ]
        }
    `;

    export let auswahlJSON: Burger = JSON.parse(burgerJSON);


}