// 1. Erinevad funktsioonid
function minuNimi() {
    console.log("Sabir Lomonosov");
}

const minuNimiNool = () => {
    console.log("Sabir Lomonosov");
};

minuNimi();
minuNimiNool();


// 2. Argumendiga funktsioon
function kuupaevEesti(kuupaev) {
    const kuud = [
        "jaanuar", "veebruar", "märts", "aprill",
        "mai", "juuni", "juuli", "august",
        "september", "oktoober", "november", "detsember"
    ];

    const osad = kuupaev.split(".");
    const paev = Number(osad[0]);
    const kuu = Number(osad[1]);
    const aasta = 2000 + Number(osad[2]);

    console.log(paev + ". " + kuud[kuu - 1] + " " + aasta);
}

kuupaevEesti("19.07.25");


// 3. Teadmata hulk
function arvudeInfo(...arvud) {
    let summa = 0;

    arvud.forEach(function(arv) {
        summa += arv;
    });

    let keskmine = 0;

    if (arvud.length > 0) {
        keskmine = summa / arvud.length;
    }

    return {
        koguarv: arvud.length,
        keskmine: keskmine
    };
}

console.log(arvudeInfo(2, 4, 6, 8));


// 4. Salajane sõnum
const salajaneSonum = sonum => {
    const vokaalid = "aeiouõäöüAEIOUÕÄÖÜ";
    let tulemus = "";

    for (let i = 0; i < sonum.length; i++) {
        if (vokaalid.includes(sonum[i])) {
            tulemus += "*";
        } else {
            tulemus += sonum[i];
        }
    }

    return tulemus;
};

console.log(salajaneSonum("Tere maailm!"));


// 5. Unikaalsed nimed
const leiaUnikaalsedNimed = nimed => {
    const unikaalsed = [];

    nimed.forEach(nimi => {
        if (!unikaalsed.includes(nimi)) {
            unikaalsed.push(nimi);
        }
    });

    return unikaalsed;
};

const nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
console.log(leiaUnikaalsedNimed(nimed));