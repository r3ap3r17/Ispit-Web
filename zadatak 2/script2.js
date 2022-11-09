// Kreirati mešani niz koji se sastoji od narednih elemenata različitih tipova: 17.5, 'oop', 
// false, 1000, -12.457, 'kiaa', true, true. Napisati funkciju negiraj_bulove_vrednosti 
// koja prihvata mešani niz kao parametar i menja dati niz 
// tako što negira sve Bulove vrednosti u tom nizu, dok ostali elementi ostaju nepromenjeni

let niz = [17.5, 'oop', false, 1000, -12.457, 'kiaa', true, true];

const isBoolean = val => 'boolean' === typeof val;

const negiraj_bulove_vrednosti = (arr) => {
    arr.map(e => isBoolean(e) ? e = !e : null);
    return arr;
}

console.log(negiraj_bulove_vrednosti(niz));