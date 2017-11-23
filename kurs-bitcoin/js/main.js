$("#pobierz-dane").click(function () {
    $.getJSON("https://blockchain.info/pl/ticker", function (data) {
    //        kupno
        var ostatniKursKupna = $("#kupno-waluty").html();
        var kupno = (data.PLN.buy);
        $("#kupno-waluty").html(data.PLN.buy);

        if (ostatniKursKupna < kupno) {
            $(".strzalka-kupna").append('<i class="fa fa-arrow-up" aria-hidden="true"></i>');
            $(".fa-arrow-up").addClass("wzrost");
        } else if (ostatniKursKupna > kupno) {
            $(".strzalka-kupna").append('<i class="fa fa-arrow-down" aria-hidden="true"></i>');
            $(".fa-arrow-down").addClass("spadek");

        } else {
            $(".strzalka-kupna").append('<i class="fa fa-minus" aria-hidden="true"></i>');
            $(".fa-minus").addClass("stala-wartosc");
        }

    //        sprzedaz
        var ostatniKursSprzedazy = $("#sprzedaz-waluty").html();
        var sprzedaz = (data.PLN.sell);
        $("#sprzedaz-waluty").html(data.PLN.sell);

        if (ostatniKursSprzedazy < sprzedaz) {
            $(".strzalka-sprzedazy").append('<i class="fa fa-arrow-up" aria-hidden="true"></i>');
            $(".fa-arrow-up").addClass("wzrost");
        } else if (ostatniKursSprzedazy > sprzedaz) {
            $(".strzalka-sprzedazy").append('<i class="fa fa-arrow-down" aria-hidden="true"></i>');
            $(".fa-arrow-down").addClass("spadek");

        } else {
            $(".strzalka-sprzedazy").append('<i class="fa fa-minus" aria-hidden="true"></i>');
            $(".fa-minus").addClass("stala-wartosc");
        }

    })
})
