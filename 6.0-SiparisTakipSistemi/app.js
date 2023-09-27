const bilgiIletisi = "Siparişleriniz:";
const tesekkur = "Teşekkürler <3 | Siparişleriniz: ";
const sabitSiparis = 10;

function sayfaYukle() {
    document.getElementById("p1").innerHTML = bilgiIletisi;
}

function adetSiparis(tip) {
    var urun = document.getElementById("input1").value;
    var siparisAdedi = parseInt(document.getElementById("input2").value);
    var geciciDizgi = tesekkur;

    if (isNaN(siparisAdedi)) {
        siparisAdedi = 0;
    }

    if (tip === "ON") {
        siparisAdedi += sabitSiparis;
    } else if (tip === "EKLE") {
        siparisAdedi += 1;
    }

    for (var donguDenetim = 0; donguDenetim < siparisAdedi; donguDenetim++) {
        geciciDizgi += ", " + urun;
    }

    document.getElementById("p1").innerHTML = geciciDizgi;
}

function temizle() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("p1").innerHTML = bilgiIletisi;
}
