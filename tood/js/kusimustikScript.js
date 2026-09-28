function nimiLugemineKastist(){
    let vastus1 = document.getElementById("vastus1");
    let nimi = document.getElementById("nimi");

    vastus1.innerHTML = "sisestatud nimi on: " + nimi.value;
    vastus1.style.backgroundColor = "lightyellow";

    return nimi.value;
}
function radioValik(){
    let vastus2 = document.getElementById("vastus2");
    let spotify  = document.getElementById("spotify");
    let radio = document.getElementById("raadio");
    let youtube = document.getElementById("youtube");
    let vinplat = document.getElementById("vinüülplaat");

    let valik="";
    if(spotify.checked){
        valik = spotify.value;
    }
    else if(radio.checked){
        valik = radio.value;
    }
    else if(youtube.checked){
        valik = youtube.value;
    }
    else if(vinplat.checked){
        valik = vinplat.value;
    }
    else{
        valik = "Palun, tee oma valik."
    }
    vastus2.innerHTML = "Sinu valik on: " + valik;
    vastus2.style.backgroundColor = "lightyellow";

    return valik;
}

function checkboxValik(){
    let vastus3 = document.getElementById("vastus3");
    let rollingstones = document.getElementById("rollingstones");
    let balla  = document.getElementById("balla");
    let sabaton  = document.getElementById("sabaton");
    let hollyflame = document.getElementById("hollyflame");

    let valik2 = "";
    if(rollingstones.checked){
        valik2 += rollingstones.value + ', <br>';
    }
    if (balla.checked){
        valik2 += balla.value + ', <br>';
    }
    if (sabaton.checked){
        valik2 += sabaton.value + ', <br>';
    }
    if (hollyflame.checked){
        valik2 += hollyflame.value + ', <br>';
    }
    if (valik2 == ""){
        valik2 = "Palun, tee oma valik."
    }

    vastus3.innerHTML = "Simu lemmikud on: " + valik2;
    vastus3.style.backgroundColor = "lightyellow"

    return valik2;
}

function naitaKoike () {
    let vastuskoik=document.getElementById("vastusKoik");
    let nimi = nimiLugemineKastist();
    let valik = radioValik();
    let valik2 = checkboxValik();

    vastuskoik.innerHTML= "Sinu nimi on: " + nimi + '<br>' +
    'Sinu lemmikud on : ' + valik2 + '<br>'+
    'Sa kasutad ' + valik;
}

