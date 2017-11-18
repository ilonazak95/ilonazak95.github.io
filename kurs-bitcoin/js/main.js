$(document).ready(function () {
    $("#pobierz-dane").click(function () {
            $.getJSON("https://blockchain.info/pl/ticker", function (data) {
                    console.log(data);
                    $("#kupno").text(data.PLN.buy);
                    $("#sprzedaz").text(data.PLN.sell);
                })
    });
});


function zachowanieWaluty() {
    if (data.PLN.buy > data.PLN.last) {
    }
};