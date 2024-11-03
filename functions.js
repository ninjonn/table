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
    return cella; // visszatér a cellával
}

/**
 * Ellenőrzi a megadott mezőket, és megjeleníti a hibaüzenetet, ha üresen maradtak.
 * @param {HTMLElement} lastHTML 
 * @param {HTMLElement} firstHTML 
 * @param {HTMLElement} petHTML 
 * @returns {boolean} true, ha minden mező érvényes, false ha valamelyik üres
 */
function validateFields(lastHTML, firstHTML, petHTML) {
    let result = true;  // Kezdetben feltételezzük, hogy minden mező érvényes

    if (lastHTML.value === '') {
        const parent_element = lastHTML.parentElement;
        const error = parent_element.querySelector('.error');
        error.innerHTML = 'kotelezo';
        result = false;
    }

    if (firstHTML.value === '') {
        const parent_element = firstHTML.parentElement;
        const error = parent_element.querySelector('.error');
        error.innerHTML = 'kotelezo';
        result = false;
    }

    if (petHTML.value === '') {
        const parent_element = petHTML.parentElement;
        const error = parent_element.querySelector('.error');
        error.innerHTML = 'kotelezo';
        result = false;
    }

    return result; // Visszatér az eredménnyel (true vagy false)
}

/**
 * Kirajzolja a táblázat tartalmát a `tbody` elembe az `array` adataiból.
 */
function render() {
    tbody.innerHTML = ''; // törli a `tbody` korábbi tartalmát

    for (let pers of array) {
        const tr_body = document.createElement('tr'); // létrehozza a sort

        tr_body.addEventListener('click', function(e) { // kattintás eseménykezelő
            const select_tr = tbody.querySelector('.selected');
            if (select_tr) select_tr.classList.remove('selected');
            e.currentTarget.classList.add('selected'); // kijelöli az aktuális sort
        });

        tbody.appendChild(tr_body); // hozzáadja a sort a `tbody` elemhez

        // Vezetéknév cella hozzáadása
        const td_lastname = document.createElement('td');
        td_lastname.innerHTML = pers.lastname;
        tr_body.appendChild(td_lastname);

        // Első keresztnév cella hozzáadása
        const td_firstname = document.createElement('td');
        td_firstname.innerHTML = pers.firstname1;
        tr_body.appendChild(td_firstname);

        // Második keresztnév cella, ha létezik
        if (!pers.firstname2) {
            td_firstname.colSpan = 2; // két oszlopnyi széles legyen, ha nincs második keresztnév
        } else {
            const td_firstname2 = document.createElement('td');
            td_firstname2.innerHTML = pers.firstname2;
            tr_body.appendChild(td_firstname2);
        }

        // Házassági státusz cella hozzáadása
        const td_married = document.createElement('td');
        td_married.innerHTML = pers.married ? "igen" : "nem";
        tr_body.appendChild(td_married);

        // Háziállat cella hozzáadása
        const td_pet = document.createElement('td');
        td_pet.innerHTML = pers.pet;
        tr_body.appendChild(td_pet);
    }
}
