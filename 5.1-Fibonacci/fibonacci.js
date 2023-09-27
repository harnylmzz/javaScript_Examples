

const bilgiSatiri = "Fibonacci sayıları...";

function sayfaYukle() {
    document.getElementById("p1").innerHTML = bilgiSatiri;
    document.getElementById("button2").disabled = true;

}

function fibonacci(sayi) {
    
        var sayi1 = 1;
        var sayi2 = 1;
        var geciciSayi;
        var donguDenetim;
    
        for (donguDenetim = 3; donguDenetim <= sayi; donguDenetim++) {
    
            geciciSayi = sayi1 + sayi2;
            sayi1 = sayi2;
            sayi2 = geciciSayi;
    
        }
        return geciciSayi;
}

function fibonacciHesapla() {

    var sayiAdedi = ~~document.getElementById("input1").value;
    var geciciDizgi = "";
    var donguDenetim;
    var kacinciFibonacci;

    if (sayiAdedi < 3)
        alert("Lütfen en az üç değeri giriniz! İlk iki Fibonacci sayısı 1, 1'dir.");
    else {
        geciciDizgi = "İlk " + sayiAdedi + " adet Fibonacci sayısı: 1, 1"


        for (kacinciFibonacci = 3; kacinciFibonacci <= sayiAdedi; kacinciFibonacci++) {

            geciciDizgi = geciciDizgi + "," + fibonacci(kacinciFibonacci);

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




