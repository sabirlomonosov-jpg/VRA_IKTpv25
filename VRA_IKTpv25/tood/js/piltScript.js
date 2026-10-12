// juhuslik pilt - mida võetahse masiivist

function juhuslikPilt() {
    //masiiv pildifailidest
    pildid=[
        '../images/smile.png',
        '../images/neutral.png',
        '../images/kurb.png',
        '../images/lill.png',
    ];
    const pilt = pildid[Math.floor(Math.random()*pildid.length)];
    let randomPilt = document.getElementById('randomPilt');

    randomPilt.scr=pilt;
}

function selectValik() {
    let vastus=document.getElementById('vastus');
    let valik=document.getElementById('valik');
    let randomPilt=document.getElementById('randomPilt');

    if (randomPilt.getAttribute('src')==valik.valik) {
        vastus.innerHTML="Õige!"
        vastus.style.color="green"
    } else {
        vastus.innerHTML ="Vale!";
        vastus.style.color="red"
    }
}

function radioValik(){
    let piltValik = document.getElementsByName('piltValik');
    let valitudPilt = document.getElementById('valitudPilt');

    for(let i=0;i<piltValik.length;i++) {
        if (piltValik[i].checked) {
            valitudPilt.scr = piltValik[i].value;
        }
    }
}