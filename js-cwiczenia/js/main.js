$(document).ready(function () {

    $.getJSON('https://blockchain.info/pl/ticker', function (data) {
        $.each(data, function (key) {
            zbudujListeWalut(key);
            przelicz(key);
        });

    });
    //zbudujListeWalut
    function zbudujListeWalut(waluta) {
        $('#waluta').append('<option>' + waluta + '</option>');
        $('option').attr("id", "wybrana-waluta");
    }

    function przelicz(waluta, ilosc) {
        

    }


});
