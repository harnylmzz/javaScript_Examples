function karsilastir() {

    var birinciSayi = +document.getElementById("input1").value;
    var ikinciSayi = +document.getElementById("input2").value;
    var geciciDizgi = "";

    

    if (birinciSayi > ikinciSayi) {
        geciciDizgi = birinciSayi + ">" + ikinciSayi;
    } else
        geciciDizgi = ikinciSayi + ">" + birinciSayi;
        document.getElementById("prg-1").innerHTML = geciciDizgi;


}

function temizle() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("prg-1").innerHTML = "Sonuçlar...";
}