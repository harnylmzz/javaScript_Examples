

const bilgiSatiri = "Fibonacci sayıları...";

function sayfaYukle() {
    document.getElementById("p1").innerHTML = bilgiSatiri;
    document.getElementById("button2").disabled = true;

}

function fibonacciHesapla() {

    var sayiAdedi = ~~document.getElementById("input1").value;
    var ikiOnce, birOnce, fibonacci;
    var geciciDizgi = "";
    var donguDenetim;

    if (sayiAdedi < 3)
        alert("Lütfen en az üç değeri giriniz! İlk iki Fibonacci sayısı 1, 1'dir.");
    else {
        geciciDizgi = "İlk " + sayiAdedi + " adet Fibonacci sayısı: 1, 1"


        ikiOnce = 1;
        birOnce = 1;

        for (donguDenetim = 0; donguDenetim < sayiAdedi - 2; donguDenetim++) {
            fibonacci = birOnce + ikiOnce;
            ikiOnce = birOnce;
            birOnce = fibonacci;

            geciciDizgi += " , " + fibonacci;

        }
        document.getElementById("p1").innerHTML = geciciDizgi;
    }

}

function veriGirisi() {

    if (document.getElementById("button2").disabled)
        document.getElementById("button2").disabled = false;

}

function temizle() {
    document.getElementById("input1").value = "";
    document.getElementById("p1").innerHTML = bilgiSatiri;
    document.getElementById("button2").disabled = true;
}
