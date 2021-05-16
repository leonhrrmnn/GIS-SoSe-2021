"use strict";
var A2_4;
(function (A2_4) {
    A2_4.burgerJSON = `
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
    A2_4.auswahlJSON = JSON.parse(A2_4.burgerJSON);
})(A2_4 || (A2_4 = {}));
//# sourceMappingURL=data.js.map