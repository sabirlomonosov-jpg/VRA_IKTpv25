//keele valimine
function Keeled() {
    let checkboxid = document.getElementsByName("keeled");
    let keeled = [];
    for (let i = 0; i < checkboxid.length; i++) {
        if (checkboxid[i].checked) {
            if (keeled != ""){
                keeled = keeled + ", ";
            }
            keeled = keeled + checkboxid[i].value;
        }
    }
    document.getElementById("keeledVastus").innerHTML = "Sinu valitud programmerimiskeeled: " + keeled;
}

//Arvamuse näitamine
function Arvamus() {
    let arvamus = document.getElementById("arvamus").value;
    document.getElementById("arvamusVastus").innerHTML = "Sinu arvamus: " + arvamus;
}

//Tundide mäitamine
function Tunnid() {
    let tunnid = document.getElementById("tunnid").value;

    document.getElementById("tunnidVastus").innerHTML = "Tegeled programeerimisega " + tunnid + " tundi nädala";
}

//Meeldimise näitamine
function Meeldib(vastus) {
    if (vastus == "Jah") {
        document.getElementById("meeldibVastus").innerHTML = "Jah, sulle meeldid programmeerida!" +
            "<img src='../images/smile.png'>";
    }
    if (vastus == "Ei") {
        document.getElementById("meeldibVastus").innerHTML = "Ei, sulle ei meeldi programmeerida." +
            "<img src='../images/kurb.png'>";
    }
}

//Tööriistide näitamine
function Tooristad(){
    let tooristad = document.getElementById("tooristad").value;

    document.getElementById("tooristadVastus").innerHTML = "Sinu nimetatud tööristad: " + tooristad;
}

//Keele valimine
function Soovitudkeel(){
    let keel = document.getElementById("soovitudKeel").value;

    document.getElementById("soovitudVastus").innerHTML = "Sinu valik: " + keel;
}

//Vastuste saatmine
function saada(){
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
    let radiot = document.getElementsByName("meeldib").value;
    for (let i = 0; i < radiot.length; i++) {
        if (radiot[i].checked) {
            meeldib = radiot[i].value;
        }
    }
    document.getElementById("kokkuvote").innerHTML = "<h2>Kokkuvõte</h2>" + "<p><b>Programeerimiskeeled:</b>" + keeled + "</p>" +"<p><b>Arvamus:</b>" + arvamus + "</p>" + "<p><b>Tunnid nädalas:</b>" + tunnid + "</p>" + "<p><b>kas programeerimine meldib:</b>" + meeldib + "</p>" + "<p><b>Tööristad:</b>" + tooristad + "</p>" + "<p><b>Soovitud programeerimiskeel:</b>" + soovitudkeel + "</p>";
}

//Vastuste puhastamine
function puhasta(){
    let checkboxid = document.getElementsByName("keeled");
    for (let i = 0; i < checkboxid.length; i++) {
        (checkboxid[i].checked) = false;
    }
    let radiot = document.getElementsByName("meeldib");
    for (let i = 0; i < radiot.length; i++) {
        (radiot[i].checked) = false;
    }
    document.getElementById("arvamus").value = "";
    document.getElementById("tunnid").value = "";
    document.getElementById("tooristad").value = "";
    document.getElementById("soovitudKeel").value = "";
    document.getElementById("keeledVastus").value = "";
    document.getElementById("arvamusVastus").value = "";
    document.getElementById("tunnidVastus").value = "";
    document.getElementById("meeldibVastus").value = "";
    document.getElementById("tooristadVastus").value = "";
    document.getElementById("soovitudVastus").value = "";
    document.getElementById("kokkuvote").value = "";
}
