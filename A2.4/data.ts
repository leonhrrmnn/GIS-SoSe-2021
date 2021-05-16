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
                    "form": "laugen-bun.png",
                    "preis": 3,
                    "vegan": "true" 
                },
                {
                    "name": "Brioche-Bun",
                    "form": "brioche-bun.png",
                    "preis": 1,
                    "vegan": "false" 
                },
                {
                    "name": "Sesam-Bun",
                    "form": "sesam-bun.png",
                    "preis": 1,
                    "vegan": "true"
                }

            ],
            "pattys": [
                {
                    "name": "Beef 200g",
                    "form": "beef200.png",
                    "preis": 3,
                    "vegan": "false"
                    
                },
                {
                    "name": "Beef 100g",
                    "form": "beef.png",
                    "preis": 2,
                    "vegan": "false"
                    
                },
                {
                    "name": "Chicken",
                    "form": "chicken.png",
                    "preis": 2,
                    "vegan": "false"
                    
                },
                {
                    "name": "Veggie",
                    "form": "veggie.png",
                    "preis": 3,
                    "vegan": "true"
                    
                }

            ],
            "soßen": [
                {
                    "name": "Ketchup",
                    "form": "ketchup.png",
                    "preis": 1,
                    "vegan": "true"
                },
                {
                    "name": "Aioli",
                    "form": "aioli.png",
                    "preis": 1,
                    "vegan": "true"
                },
                {
                    "name": "BBQ",
                    "form": "bbq.png",
                    "preis": 1,
                    "vegan": "true"
                }
            ]
        }
    `;

    export let auswahlJSON: Burger = JSON.parse(burgerJSON);


}