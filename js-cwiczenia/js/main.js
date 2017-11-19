$(document).ready(function () {

    $.getJSON('https://blockchain.info/pl/ticker', function (data) {
        $.each(data, function (key) {
            zbudujListeWalut(key);
        });

    });
    function pobierzBtc(ilosc,waluta){
        $.getJSON('https://blockchain.info/tobtc?currency='+waluta+'&value='+ilosc, function(data){
            $('span').text('Wartość BTC: ' + data);
        });
    }
    function zbudujListeWalut(waluta) {
        $('#waluta').append('<option>'+waluta+'</option>');
    }

    $('#oblicz').click(function(event){
        event.preventDefault();
        var ilosc = $('#ilosc').val();
        var waluta = $('#waluta').val();
        pobierzBtc(ilosc,waluta);
    });


});
