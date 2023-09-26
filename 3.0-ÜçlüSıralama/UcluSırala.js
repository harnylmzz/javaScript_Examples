
const bilgiSatiri = "Sonuçlar...";



function ucluSirala() {
    var birinciSayi, ikinciSayi, ucuncuSayi;
    var buyuk, orta, kucuk;

    birinciSayi = +document.getElementById("input1").value;
    ikinciSayi = +document.getElementById("input2").value;
    ucuncuSayi = +document.getElementById("input3").value;

    if (birinciSayi > ikinciSayi) {
        buyuk = birinciSayi;
        kucuk = ikinciSayi;
    } else {
        kucuk = birinciSayi;
        buyuk = ikinciSayi;
    }
    if (ucuncuSayi > buyuk) {
        orta = buyuk;
        buyuk = ucuncuSayi;
    } else {
        if (ucuncuSayi > kucuk) {
            orta = ucuncuSayi;
        } else {
            orta = kucuk;
            kucuk = ucuncuSayi;
        }
    }
    document.getElementById("p1").innerHTML = buyuk + "," + orta + "," + kucuk;
}

function sayfaYukle() {
    document.getElementById("p1").innerHTML = bilgiSatiri;
}

function temizle() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("p1").innerHTML = bilgiSatiri;
}
