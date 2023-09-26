function topla() {
    var birinciSayi = +document.getElementById("input1").value;
    var ikinciSayi = +document.getElementById("input2").value;
    var toplam;

    toplam = birinciSayi + ikinciSayi;
    document.getElementById("prg-1").innerHTML = toplam;
}

function cikar() {
    var birinciSayi = +document.getElementById("input1").value;
    var ikinciSayi = +document.getElementById("input2").value;
    var fark;

    fark = birinciSayi - ikinciSayi;
    document.getElementById("prg-1").innerHTML = fark;
}

function carp() {
    var birinciSayi = +document.getElementById("input1").value;
    var ikinciSayi = +document.getElementById("input2").value;
    var carpim;

    carpim = birinciSayi * ikinciSayi;
    document.getElementById("prg-1").innerHTML = carpim;
}

function bol() {
    var birinciSayi = +document.getElementById("input1").value;
    var ikinciSayi = +document.getElementById("input2").value;
    var bolum;

    bolum = birinciSayi / ikinciSayi;
    document.getElementById("prg-1").innerHTML = bolum;
}

function temizle() {
    document.getElementById("input1").innerText = "";
    document.getElementById("input2").innerText = "";
    document.getElementById("prg-1").innerHTML = "Sonuçlar...";
}