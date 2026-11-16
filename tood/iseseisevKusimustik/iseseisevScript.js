
//keele valimine
function Keeled() {
    let checkboxid = document.getElementsByName("keeled");
    let keeled = "";

    for (let i = 0; i < checkboxid.length; i++) {
        if (checkboxid[i].checked) {
            if (keeled != ""){
                keeled = keeled + ", ";
            }
            keeled = keeled + checkboxid[i].value;
        }
    }

    document.getElementById("keeledVastus").innerHTML =
        "Sinu valitud programmeerimiskeeled: " + keeled;
}

//Arvamuse näitamine
function Arvamus() {
    let arvamus = document.getElementById("arvamus").value;

    document.getElementById("arvamusVastus").textContent =
        "Sinu arvamus: " + arvamus;
}

//Tundide näitamine
function Tunnid() {
    let tunnid = document.getElementById("tunnid").value;

    document.getElementById("tunnidVastus").textContent =
        "Tegeled programmeerimisega " + tunnid + " tundi nädalas";
}

//Meeldimise näitamine
function Meeldib(vastus) {
    if (vastus == "Jah") {
        document.getElementById("meeldibVastus").innerHTML =
            "Jah, sulle meeldib programmeerida!" +
            "<img src='../images/smile.png' alt='Naeratus'>";
    }

    if (vastus == "Ei") {
        document.getElementById("meeldibVastus").innerHTML =
            "Ei, sulle ei meeldi programmeerida." +
            "<img src='../images/kurb.png' alt='Kurb nägu'>";
    }
}

//Tööriistade näitamine
function Tooristad() {
    let tooristad = document.getElementById("tooristad").value;

    document.getElementById("tooristadVastus").textContent =
        "Sinu nimetatud tööriistad: " + tooristad;
}

//Keele valimine
function Soovitudkeel() {
    let keel = document.getElementById("soovitudKeel").value;

    document.getElementById("soovitudVastus").textContent =
        "Sinu valik: " + keel;
}

//Vastuste saatmine
function saada() {
    let checkboxid = document.getElementsByName("keeled");
    let keeled = "";

    for (let i = 0; i < checkboxid.length; i++) {
        if (checkboxid[i].checked) {
            if (keeled != ""){
                keeled = keeled + ", ";
            }
            keeled = keeled + checkboxid[i].value;
        }
    }

    let arvamus = document.getElementById("arvamus").value;
    let tunnid = document.getElementById("tunnid").value;
    let tooristad = document.getElementById("tooristad").value;
    let soovitudkeel = document.getElementById("soovitudKeel").value;

    let meeldib = "";
    let radiot = document.getElementsByName("meeldib");

    for (let i = 0; i < radiot.length; i++) {
        if (radiot[i].checked) {
            meeldib = radiot[i].value;
        }
    }

    let kokkuvote = document.getElementById("kokkuvote");

    kokkuvote.innerHTML =
        "<h2>Kokkuvõte</h2>" +
        "<p><b>Programmeerimiskeeled:</b> " + keeled + "</p>" +
        "<p><b>Arvamus:</b> " + document.createElement("span").textContent + "</p>";

    kokkuvote.innerHTML =
        "<h2>Kokkuvõte</h2>" +
        "<p><b>Programmeerimiskeeled:</b> " + keeled + "</p>" +
        "<p><b>Arvamus:</b> </p>" +
        "<p><b>Tunnid nädalas:</b> " + tunnid + "</p>" +
        "<p><b>Kas programmeerimine meeldib:</b> " + meeldib + "</p>" +
        "<p><b>Tööriistad:</b> </p>" +
        "<p><b>Soovitud programmeerimiskeel:</b> " + soovitudkeel + "</p>";

    // Lisa kasutaja tekst turvaliselt
    let read = kokkuvote.getElementsByTagName("p");

    read[1].appendChild(document.createTextNode(arvamus));
    read[4].appendChild(document.createTextNode(tooristad));
}

//Vastuste puhastamine
function puhasta() {
    let checkboxid = document.getElementsByName("keeled");

    for (let i = 0; i < checkboxid.length; i++) {
        checkboxid[i].checked = false;
    }

    let radiot = document.getElementsByName("meeldib");

    for (let i = 0; i < radiot.length; i++) {
        radiot[i].checked = false;
    }

    document.getElementById("arvamus").value = "";
    document.getElementById("tunnid").value = "";
    document.getElementById("tooristad").value = "";
    document.getElementById("soovitudKeel").value = "vali";

    document.getElementById("keeledVastus").innerHTML = "";
    document.getElementById("arvamusVastus").innerHTML = "";
    document.getElementById("tunnidVastus").innerHTML = "";
    document.getElementById("meeldibVastus").innerHTML = "";
    document.getElementById("tooristadVastus").innerHTML = "";
    document.getElementById("soovitudVastus").innerHTML = "";
    document.querySelector(".kokkuvote").innerHTML = "";
}
