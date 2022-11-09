// Neka su data dva niza niz1 = ['a', 'b'] I niz2 = ['a', 'b']. Napisati funkciju da_li_su_jednaki 
// koja prihvata dva niza i proverava da li su jednaki po strukturi(da li imaju isti broj elemenata i 
// da li su elementi na istim pozicijama međusobno jednaki i po vrednosti i po tipu).Pretpostaviti 
// da elementi datih nizova nisu neki drugi nizovi, odnosno, da nizovi nisu višedimenzionalni. 
// Ispitati da li su nizovi jednaki pomoću napisane funkcije


let niz1 = ['a', 'b']
let niz2 = ['a', 'b']

const da_li_su_jednaki = (arr1, arr2) => {
    if (arr1.length === arr2.length && typeof arr1 == typeof arr2) {
        console.log("Nizovi su jednake duzine i tipa");
    } else {
        console.log("Nizovi nisu jednake duzine i tipa");
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log("Nizovi nisu jednaki");
            break;
        }

    }
}

da_li_su_jednaki(niz1, niz2);