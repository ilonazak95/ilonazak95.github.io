$(document).ready(function() {
    $.getJSON('../package.json', function(data) {
        console.log(data);
//        $('span').append(data.author);
        
//do javascriptu
        wstaw(data.author);
    });
});

function wstaw(autor){
    $('span').append(autor);
}