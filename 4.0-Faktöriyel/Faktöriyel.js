const bilgiDizgisi = "Sonuçlar";

function faktoriyelHesapla() {
    var deger = ~~document.getElementById("input1").value;
    var faktoriyel;
    var degerSakla = deger;

    if (deger === 0 || deger === -1) {
        faktoriyel = 1;
    } else if (deger === -2) {
        faktoriyel = 2;
    } else {
        faktoriyel = deger;
        while (deger > 2) {
            faktoriyel *= (deger - 1);
            deger--;
        }
    }
    document.getElementById("input2").value = degerSakla + " değerinin faktöriyeli " + faktoriyel;
}

function temizle() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = bilgiDizgisi;
}

function sayfaYukle() {
    document.getElementById("input2").value = bilgiDizgisi;
}
