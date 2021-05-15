"use strict";
var A2_4;
(function (A2_4) {
    A2_4.div = document.createElement("div");
    A2_4.div.id = "canva";
    A2_4.canvas1 = document.createElement("canvas");
    A2_4.canvas = document.createElement("canvas");
    A2_4.canvas2 = document.createElement("canvas");
    A2_4.burgerJSON = `
        { 
            "bun": [
                {
                    "name": "Laugen-Bun",
                    "form": "canvas1.getContext("2d")",
                    "preis": 3,
                    "vegan": true 
                },
                {
                    "name": "Brioche-Bun",
                    "form": "canvas1.getContext("2d")",
                    "preis": 1,
                    "vegan": false 
                },
                {
                    "name": "Sesam-Bun",
                    "form": "canvas1.getContext("2d")",
                    "preis": 1,
                    "vegan": true
                }

            ],
            "patty": [
                {
                    "name": "Beef",
                    "form": "canvas1.getContext("2d")",
                    "preis": 3,
                    "vegan": false, 
                    "gramm": 200
                },
                {
                    "name": "Beef",
                    "form": "canvas1.getContext("2d")",
                    "preis": 2,
                    "vegan": false, 
                    "gramm": 100
                },
                {
                    "name": "Chicken",
                    "form": "canvas1.getContext("2d")",
                    "preis": 2,
                    "vegan": false, 
                    "gramm": 100
                },
                {
                    "name": "Veggie",
                    "form": "canvas1.getContext("2d")",
                    "preis": 3,
                    "vegan": true, 
                    "gramm": 100
                }

            ],
            "soße": [
                {
                    "name": "Ketchup",
                    "form": canvas1.getContext("2d"),
                    "preis": 1,
                    "vegan": true
                },
                {
                    "name": "Aioli",
                    "form": canvas1.getContext("2d"),
                    "preis": 1,
                    "vegan": true
                },
                {
                    "name": "BBQ",
                    "form": canvas1.getContext("2d"),
                    "preis": 1,
                    "vegan": true
                }
            ]
        }
    `;
})(A2_4 || (A2_4 = {}));
//# sourceMappingURL=data.js.map