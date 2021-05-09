namespace _A2_3 {
    

    export let div: HTMLDivElement = document.createElement("div");
    div.id = "canva";

    export let canvas1: HTMLCanvasElement = <HTMLCanvasElement>document.createElement("canvas");

    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.createElement("canvas");

    export let canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.createElement("canvas");
    
    export interface Burger {
        patty: Patty;
        bun: Bun;
        soße: Soße;
    }

    export interface Patty {
        name: string;
        form: CanvasRenderingContext2D;
        preis: number;
        vegan: boolean;
        gramm: number;

    }

    export interface Bun {
        name: string;
        form: CanvasRenderingContext2D;
        preis: number;
        vegan: boolean;
    }

    export interface Soße {
        name: string;
        form: CanvasRenderingContext2D;
        preis: number;
        vegan: boolean;
    }



}