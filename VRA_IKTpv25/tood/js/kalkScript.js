function teisandamine() {
    let vastus = document.getElementById('vastus');
    let valik = document.getElementsByName('valik'); //mitu elementi ühe nimeta
    let arv = document.getElementById('arv');

    const toll = 39.37;
    const meeter = 0.0254;

//tsükli
    for (let i = 0; i < valik.length; i++) {
        if (valik[i].checked) {
            if (valik[i].value == "meeter") {
                vastus.innerHTML = arv.value + ' meetri = ' +
                    arv.value * toll + ' tolli';
            } else if (valik[i].value == "tolli") {
                vastus.innerHTML = arv.value + ' tolli = ' +
                    arv.value * meeter + ' meetrit';
            } else {
                vastus.innerHTML = "vali ühiku - kas meeter või toll";
            }
        }
    }
}