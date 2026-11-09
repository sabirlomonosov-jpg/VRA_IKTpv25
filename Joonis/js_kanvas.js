

function joon() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle="red";
        tx.lineWidth = 2;
        tx.moveTo(200, 50); // algus
        tx.lineTo(400, 300); //lopu
        tx.stroke();
    }
}
function puhasta() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.clearRect(0,0,500,500);
    }
}
function kolmnurk() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle="red";
        tx.lineWidth = 2;
        tx.moveTo(50, 50); // algus
        tx.lineTo(400, 300); //lopu
        tx.moveTo(50, 50);
        tx.lineTo(50, 300);
        tx.moveTo(50, 300);
        tx.lineTo(400, 300);
        tx.stroke();
    }
}
function ristkylik() {
    const canvas = document.getElementById('canvas');
    const l = document.getElementById('laius');
    const k = document.getElementById('korgus');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.fillStyle="black";
        tx.fillRect(200, 200, l.value, k.value);
    }
}
function ring() {
    const canvas = document.getElementById('canvas');
    const r = document.getElementById('raadius');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle="black";
        tx.fillStyle= "blue";
        tx.arc(100, 100, r.value ,0, 2*Math.PI, true);
        tx.fill();
        tx.stroke();
    }
}
function pilt() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        const file = new Image();

        file.src = "https://picsum.photos/200/300?random=1"
        file.onload=()=>{
            tx.drawImage(file, 350, 350, 150, 150);
        }
    }
}
function ratas1() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = "black"
        tx.arc(50, 400, 20, 0, 2 * Math.PI, true);
        tx.fill();
    }
}
function ratas2() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = "black"
        tx.arc(150, 400, 20, 0, 2 * Math.PI, true);
        tx.fill();
    }
}
function keere1() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = "red"
        tx.fillRect(10, 350, 180, 50)
    }
}
function keere2() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = "lightblue"
        tx.fillRect(50, 300, 100, 50)
    }
}
function tuled() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = "yellow";
        tx.moveTo(200, 360);
        tx.lineTo(400, 420);
        tx.moveTo(400, 420);
        tx.lineTo(400, 480);
        tx.moveTo(400, 480);
        tx.lineTo(200, 360);
        tx.fill();
    }
}
function katus() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle = "red";
        tx.lineWidth = 2;
        tx.moveTo(50, 300);
        tx.lineTo(150, 300);
        tx.moveTo(50, 300);
        tx.lineTo(50, 350);
        tx.stroke();
    }
}
function koik(){
    joon();
    kolmnurk();
    ristkylik();
    ring();
    pilt();
    ratas1();
    ratas2();
    keere1();
    keere2();
    tuled();
    katus();
}