let array = [
    { firstname1: 'Géza', firstname2: 'Ferenc', lastname: 'Kocsis', married: true, pet: 'kutya' },
    { firstname1: 'Mária', firstname2: 'Júlia', lastname: 'Horváth', married: false, pet: 'macska' },
    { firstname1: 'Ferenc', lastname: 'Balogh', married: false, pet: 'teknős' },
    { firstname1: 'Gábor', firstname2: 'Attila', lastname: 'Horváth', married: true, pet: 'macska' }
];

// Táblázat elemek létrehozása
const table = document.createElement('table');
const thead = document.createElement('thead');
const tr = document.createElement('tr');

// Fejléc cellák létrehozása az automatikus függvény használatával
automatikustable("th", "Vezetéknév", tr);
const th_firstname = automatikustable("th", "Keresztnév", tr);
automatikustable("th", "Házas e?", tr);
automatikustable("th", "Háziállat", tr);

th_firstname.colSpan = 2; // A keresztnevet 2 oszlop szélességűre állítjuk

// Hierarchia felépítése
document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);

// Törzselem (`tbody`) létrehozása és táblához rendelése
const tbody = document.createElement("tbody");
table.appendChild(tbody);

render(); // Kirajzolja az alapértelmezett táblázatot

// Űrlap eseménykezelő
const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Megakadályozza a form automatikus újratöltését

    // Mezők lekérése
    const lastname = document.getElementById('lastname');
    const firstname1 = document.getElementById('firstname1');
    const firstname2 = document.getElementById('firstname2');
    const married = document.getElementById('married');
    const pet = document.getElementById('pet');

    // Új személy adatai
    const newpers = {
        lastname: lastname.value,
        firstname1: firstname1.value,
        firstname2: firstname2.value || undefined,
        married: married.checked,
        pet: pet.value
    };

    // Validálás
    if (validateFields(lastname, firstname1, pet)) {
        array.push(newpers); // hozzáadjuk az `array` tömbhöz az új adatokat
        render(); // újra kirajzolja a táblázatot
        form.reset(); // az űrlapot alaphelyzetbe állítja
    }
});
