interface User {
    username: string;
    password: string;
}
interface Rezept {
    rezeptname: string;
    img: string;
    zutaten: string[];
    zubereitung: string;
    user: string;
}
interface Favorit {
    rezeptname: string;
    img: string;
    zutaten: string[];
    zubereitung: string;
    user: string;
}