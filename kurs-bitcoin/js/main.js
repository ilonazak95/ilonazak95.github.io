$(document).ready(function () {
    $("#pobierz-dane").click(function () {
        $.getJSON("https://blockchain.info/pl/ticker", function (data) {
            console.log(data);
            $("#kupno").text(data.PLN.buy);
            $("#sprzedaz").text(data.PLN.sell);

            kupno(data.PLN.buy, data.PLN.last);
            sprzedaz(data.PLN.sell, data.PLN.last);
        })
    });
});


function kupno(buy, last) {
    if (buy > last) {
        $('#kupno').append('<i class="fa fa-arrow-up" aria-hidden="true"></i>')
        $(".fa-arrow-up").addClass("wzrost-kupna")
    } else if (buy < last) {
        $('#kupno').append('<i class="fa fa-arrow-down" aria-hidden="true"></i>')
        $(".fa-arrow-down").addClass("spadek-kupna")
    } else {
        console.log('stala');
        $('#kupno').append('<i class="fa fa-minus" aria-hidden="true"></i>')
        $(".fa-minus").addClass("stala-wartosc");
    }
};

function sprzedaz(sell, last) {
    if (sell > last) {
        $('#sprzedaz').append('<i class="fa fa-arrow-up" aria-hidden="true"></i>')
        $(".fa-arrow-up").addClass("wzrost-kupna")
    } else if (sell < last) {
        $('#sprzedaz').append('<i class="fa fa-arrow-down" aria-hidden="true"></i>')
        $(".fa-arrow-down").addClass("spadek-kupna")
    } else {
        $('#sprzedaz').append('<i class="fa fa-minus" aria-hidden="true"></i>')
        $(".fa-minus").addClass("stala-wartosc");
    }
};

