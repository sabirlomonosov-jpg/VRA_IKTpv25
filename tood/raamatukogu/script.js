function kuva(tekst) {
    console.log(tekst);
    document.getElementById("tulemused").textContent += tekst + "\n";
}

let raamat = {
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,

    kuvaKirjeldus() {
        kuva(this.pealkiri + " - " + this.autor + " (" + this.aasta + ")");
    },

    muudaAasta(uusAasta) {
        this.aasta = uusAasta;
    }
};

kuva("RAAMAT");
kuva("Enne muutmist:");
raamat.kuvaKirjeldus();
// Muudan selles näites väljaande aastat.
raamat.muudaAasta(2020);
kuva("Pärast muutmist:");
raamat.kuvaKirjeldus();

let raamatukogu = {
    raamatud: [
        raamat,
        { pealkiri: "Rehepapp", autor: "Andrus Kivirähk", aasta: 2000 },
        { pealkiri: "Mees, kes teadis ussisõnu", autor: "Andrus Kivirähk", aasta: 2007 }
    ],

    kuvaRaamatud() {
        for (let i = 0; i < this.raamatud.length; i++) {
            let yksRaamat = this.raamatud[i];
            kuva((i + 1) + ". " + yksRaamat.pealkiri + " - " + yksRaamat.autor + " (" + yksRaamat.aasta + ")");
        }
    },

    lisaRaamat(uusRaamat) {
        this.raamatud.push(uusRaamat);
        kuva("Lisatud: " + uusRaamat.pealkiri);
    },

    kuvaRaamatuteArv() {
        kuva("Raamatuid kokku: " + this.raamatud.length);
    },

    loeParast2000() {
        let arv = 0;
        for (let i = 0; i < this.raamatud.length; i++) {
            if (this.raamatud[i].aasta > 2000) {
                arv++;
            }
        }
        kuva("Pärast 2000. aastat ilmunud raamatuid: " + arv);
    },

    // Minu meetod kuvab kõik ühe autori raamatud.
    otsiAutoriJargi(autor) {
        let leitud = 0;
        kuva("Autor: " + autor);
        for (let i = 0; i < this.raamatud.length; i++) {
            let yksRaamat = this.raamatud[i];
            if (yksRaamat.autor === autor) {
                kuva(yksRaamat.pealkiri + " (" + yksRaamat.aasta + ")");
                leitud++;
            }
        }
        if (leitud === 0) {
            kuva("Raamatuid ei leitud.");
        }
    }
};

kuva("\nRAAMATUKOGU ENNE LISAMIST");
raamatukogu.kuvaRaamatud();
raamatukogu.kuvaRaamatuteArv();

kuva("\nUUE RAAMATU LISAMINE");
let uusRaamat = {
    pealkiri: "Apteeker Melchior ja Oleviste mõistatus",
    autor: "Indrek Hargla",
    aasta: 2010
};
raamatukogu.lisaRaamat(uusRaamat);

kuva("\nRAAMATUKOGU PÄRAST LISAMIST");
raamatukogu.kuvaRaamatud();
raamatukogu.kuvaRaamatuteArv();
raamatukogu.loeParast2000();

kuva("\nMINU MEETOD: OTSING AUTORI JÄRGI");
raamatukogu.otsiAutoriJargi("Andrus Kivirähk");
