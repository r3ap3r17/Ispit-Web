// 2.	[potrebno je napraviti samo .js datoteku] Kreirati niz koji se sastoji od niski '
// fink', 'os' i 'aisp'. Napisati funkciju ispisi_uvecane_niske koja prihvata niz niski kao parametar
// i ispisuje u konzoli svaku nisku iz datog niza pri čemu su sva slova velika. [zadatak nosi maksimalno 5 poena]

const niz = ['fink', 'os', 'aisp'];

const ispisi_uvecane_niske = (arr) => {
    arr.map(e => console.log(e.toUpperCase()));
}

ispisi_uvecane_niske(niz);