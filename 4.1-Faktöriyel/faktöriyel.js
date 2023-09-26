const bilgiDizgisi = "Sonuçlar";

function faktoriyel(n) {
    switch (n) {
        case 0:
        case 1:
            return 1;
        default:
            return n * faktoriyel(n - 1);
    }
}

function faktoriyelHesapla() {
    var deger = parseInt(document.getElementById("input1").value);

    if (isNaN(deger)) {
        alert("Lütfen geçerli bir sayı girin.");
        return;
    }

    if (deger < 0) {
        alert("Negatif bir sayı girdiniz. Faktöriyel hesaplamak için pozitif bir sayı giriniz.");
        return;
    }

    var sonuc = faktoriyel(deger);
    document.getElementById("input2").value = sonuc;
}


function temizle() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = bilgiDizgisi;
}

function sayfaYukle() {
    document.getElementById("input2").value = bilgiDizgisi;
}
