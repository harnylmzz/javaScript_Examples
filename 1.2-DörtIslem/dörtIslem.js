const toplaSabit = 1;
const cikarSabit = 2;
const carpSabit = 3;
const bolSabit = 4;

function islem(islemKodu) {
    var birinciSayi = +document.getElementById("input1").value;
    var ikinciSayi = +document.getElementById("input2").value;
    switch (islemKodu) {
        case toplaSabit:
            document.getElementById("prg-1").innerHTML = birinciSayi + ikinciSayi;
            break;
        case cikarSabit:
            document.getElementById("prg-1").innerHTML = birinciSayi - ikinciSayi;
            break;
        case carpSabit:
            document.getElementById("prg-1").innerHTML = birinciSayi * ikinciSayi;
            break;
        case bolSabit:
            document.getElementById("prg-1").innerHTML = birinciSayi / ikinciSayi;
            break;

    }

}

function temizle() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("prg-1").innerHTML = "Sonuçlar...";
}
