$(document).ready(function () {
//    get json
    $.getJSON("https://blockchain.info/pl/ticker", function (data) {
        console.log(data);
        $("#kupno").text(data.PLN.buy);
        $("#sprzedaz").text(data.PLN.sell);
    })

//    ajax
    $("#pobierz-dane").click(function() {
        $.ajax({
            url: "https://blockchain.info/pl/ticker",
            dataType: "json",
            cache: false,
            success: function (obj) {

                $('#kupno').data(obj.PLN.buy);
                $("#sprzedaz").text(obj.PLN.sell);

                aktualizacjaKupna(obj.PLN.buy);
                aktualizacjaSprzedazy(obj.PLN.sell);
                    
            }
        });


    })

    function aktualizacjaKupna(normalneKupno, noweKupno) {
        if (normalneKupno < noweKupno) {
            $('#kupno').append('<i class="fa fa-arrow-up" aria-hidden="true"></i>');
            $(".fa-arrow-up").addClass("wzrost-kupna");
        } else if (normalneKupno > noweKupno) {
            $('#kupno').append('<i class="fa fa-arrow-up" aria-hidden="true"></i>');
            $(".fa-arrow-up").addClass("wzrost-kupna");
        } else {
            $('#kupno').append('<i class="fa fa-minus" aria-hidden="true"></i>')
            $(".fa-minus").addClass("stala-wartosc");
        }

    }


    function aktualizacjaSprzedazy(normalnaSprzedaz, nowaSprzedaz) {
        if (normalnaSprzedaz < nowaSprzedaz) {
            $('#sprzedaz').append('<i class="fa fa-arrow-up" aria-hidden="true"></i>');
            $(".fa-arrow-up").addClass("wzrost-kupna");
        } else if (normalnaSprzedaz > nowaSprzedaz) {
            $('#sprzedaz').append('<i class="fa fa-arrow-down" aria-hidden="true"></i>');
            $(".fa-arrow-down").addClass("spadek-kupna");
        } else {
            $('#sprzedaz').append('<i class="fa fa-minus" aria-hidden="true"></i>')
            $(".fa-minus").addClass("stala-wartosc");
        }
    }


});
