/**
 * Létrehoz egy táblázat cellát a megadott típussal, tartalommal és szülő elemmel.
 * @param {'td'|'th'} fajta 
 * @param {string} taratlom 
 * @param {HTMLTableRowElement} szulo 
 * @returns {HTMLElement} A létrehozott cella elem
 */
function automatikustable(fajta, taratlom, szulo) {
    const cella = document.createElement(fajta); // létrehoz egy új cellát a megadott típussal
    cella.innerHTML = taratlom; // beállítja a cella tartalmát
    szulo.appendChild(cella); // hozzáadja a cellát a szülő elemhez
    return cella;
}

/**
 * Ellenőrzi, hogy a megadott HTML elem értéke nem üres-e.
 * Ha a mező üres, beállítja a hibaüzenetet, és `false`-t ad vissza.
 * @param {HTMLElement} htmlElement - A HTML elem, amelyet ellenőrizni kell
 * @param {string} errorMessage - A megjelenítendő hibaüzenet, ha az elem értéke üres
 * @returns {boolean} true, ha az elem értéke nem üres, false ha üres
 */
function validateElement(htmlElement, errorMessage) {
    const errorField = htmlElement.parentElement.querySelector('.error'); // megkeresi a hibaüzenet helyét
    if (htmlElement.value === '') {
        errorField.innerHTML = errorMessage; // beállítja a hibaüzenetet
        return false;
    } else {
        errorField.innerHTML = ''; // törli a hibaüzenetet, ha van érték
        return true;
    }
}

/**
 * Ellenőrzi az összes szükséges mezőt a `validateElement` függvénnyel, és hibaüzenetet jelenít meg.
 * @param {HTMLElement} lastHTML 
 * @param {HTMLElement} firstHTML 
 * @param {HTMLElement} petHTML 
 * @returns {boolean} true, ha minden mező érvényes, false ha valamelyik üres
 */
function validateFields(lastHTML, firstHTML, petHTML) {
    return (
        validateElement(lastHTML, 'Kötelező vezetéknév') &
        validateElement(firstHTML, 'Kötelező keresztnév') &
        validateElement(petHTML, 'Kötelező háziállat')
    );
}

/**
 * Kirajzolja a táblázat tartalmát a `tbody` elembe az `array` adataiból.
 */
function render() {
    tbody.innerHTML = ''; // törli a `tbody` korábbi tartalmát

    array.forEach((pers) => {
        const tr_body = document.createElement('tr'); // létrehozza a sort

        // Sort kijelölő eseménykezelő
        tr_body.addEventListener('click', function() { 
            tbody.querySelector('.selected')?.classList.remove('selected');
            tr_body.classList.add('selected');
        });

        tbody.appendChild(tr_body); // hozzáadja a sort a `tbody` elemhez

        // Cella hozzáadása vezetéknév, keresztnév1, keresztnév2, házas, és háziállat mezőknek
        automatikustable('td', pers.lastname, tr_body);
        const td_firstname = automatikustable('td', pers.firstname1, tr_body);

        if (pers.firstname2) {
            automatikustable('td', pers.firstname2, tr_body);
        } else {
            td_firstname.colSpan = 2; // két oszlopnyi széles legyen, ha nincs második keresztnév
        }

        automatikustable('td', pers.married ? "igen" : "nem", tr_body);
        automatikustable('td', pers.pet, tr_body);
    });
}
