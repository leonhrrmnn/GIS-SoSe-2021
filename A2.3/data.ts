namespace _A2_3 {

    //Patty
    export let allPattys: Patty[] = [];

    export let patty1: Patty = { name: "beef", form: canvas.getContext("2d"), preis: 2, vegan: false, gramm: 200 };
    patty1.form.fillStyle = "brown";
    patty1.form.fillRect(30, 30, 100, patty1.gramm / 10);
    allPattys.push(patty1);

    export let patty4: Patty = { name: "beef", form: canvas.getContext("2d"), preis: 2, vegan: false, gramm: 100 };
    patty4.form.fillStyle = "brown";
    patty4.form.fillRect(180, 30, 100, patty4.gramm / 10);
    allPattys.push(patty4);

    export let patty2: Patty = { name: "chicken", form: canvas.getContext("2d"), preis: 2, vegan: false, gramm: 100 };
    patty2.form.fillStyle = "yellow";
    patty2.form.fillRect(330, 30, 100, patty2.gramm / 10);
    allPattys.push(patty2);

    export let patty3: Patty = { name: "veggie", form: canvas.getContext("2d"), preis: 3, vegan: true, gramm: 100 };
    patty3.form.fillStyle = "green";
    patty3.form.fillRect(480, 30, 100, patty3.gramm / 10);
    allPattys.push(patty3);

    // Brötchen
    export let allBuns: Bun[] = [];

    export let bun1: Bun = { name: "Laugen-Bun", form: canvas1.getContext("2d"), preis: 3, vegan: true };
    bun1.form.moveTo(50, 100);
    bun1.form.bezierCurveTo(50, 0, 100, 0, 100, 100);
    bun1.form.closePath();
    bun1.form.fillStyle = "black";
    bun1.form.fill();
    bun1.form.beginPath();
    allBuns.push(bun1);

    export let bun2: Bun = { name: "Brioche-Bun", form: canvas1.getContext("2d"), preis: 1, vegan: false };
    bun2.form.moveTo(125, 100);
    bun2.form.bezierCurveTo(125, 0, 175, 0, 175, 100);
    bun2.form.closePath();
    bun2.form.fillStyle = "brown";
    bun2.form.fill();
    bun2.form.beginPath();
    allBuns.push(bun2);

    export let bun3: Bun = { name: "Sesam-Bun", form: canvas1.getContext("2d"), preis: 1, vegan: true };
    bun3.form.moveTo(200, 100);
    bun3.form.bezierCurveTo(200, 0, 250, 0, 250, 100);
    bun3.form.closePath();
    bun3.form.fillStyle = "wheat";
    bun3.form.fill();
    bun3.form.beginPath();
    allBuns.push(bun3);

    //Soßen
    export let allSoße: Soße[] = [];

    export let soße1: Soße = { name: "ketchup", form: canvas2.getContext("2d"), preis: 1, vegan: true };
    soße1.form.fillStyle = "red";
    soße1.form.fillRect(135, 30, 30, 70);
    allSoße.push(soße1);

    export let soße2: Soße = { name: "aioli", form: canvas2.getContext("2d"), preis: 2, vegan: false };
    soße2.form.fillStyle = "grey";
    soße2.form.fillRect(285, 30, 30, 70);
    allSoße.push(soße2);

    export let soße3: Soße = { name: "bbq", form: canvas2.getContext("2d"), preis: 2, vegan: true };
    soße3.form.fillStyle = "brown";
    soße3.form.fillRect(435, 30, 30, 70);
    allSoße.push(soße3);

}