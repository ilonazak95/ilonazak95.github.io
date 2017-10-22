'use strict';

var wszystkieZgody = document.getElementById('wszystkie-zgody');
var zgodaMarketingowa1 = document.getElementById('zgoda-marketingowa-1');
var zgodaMarketingowa2 = document.getElementById('zgoda-marketingowa-2');
var inputImie = document.getElementById('name');
var inputEmail = document.getElementById('email');
var wiadomosc = document.getElementById('wiadomosc');

function stanCheckboxa(){
    
    zgodaMarketingowa1.checked = this.checked; 
    zgodaMarketingowa2.checked = this.checked;
    //disabled - widoczne pole ale nieaktywne, jak cos sie z nimi zrobi to nie mozna juz tego zmienic
    zgodaMarketingowa1.disabled = this.checked; 
    zgodaMarketingowa2.disabled = this.checked;
    
    //inna metoda
    /*if(wszystkieZgody.checked) {
        zgodaMarketingowa1.checked = true;
        zgodaMarketingowa2.checked = true;
    } else {
        zgodaMarketingowa1.checked = false;
        zgodaMarketingowa2.checked = false;
    }*/
}

function walidacjaFormularza(event) {
    
    wiadomosc.innerHTML = '<ul  id="wiadomosc></ul>';
    
    if(inputImie.value.trim() == ''){
        var msgImie = document.createElement('li');
        msgImie.innerHTML = 'Wpisz Imie';
        wiadomosc.appendChild(msgImie);
        
        event.preventDefault();
    }
    
    if(inputEmail.value.trim() == ''){
        var msgEmail = document.createElement('li');
        msgEmail.innerHTML = 'Wpisz Email';
        wiadomosc.appendChild(msgEmail);
        
        event.preventDefault();
    }
    if(zgodaMarketingowa1.checked == false){
        var msgZgoda1 = document.createElement('li');
        msgZgoda1.innerHTML = 'Nie wyraziłeś zgody 1';
        wiadomosc.appendChild(msgZgoda1);
        
        event.preventDefault();
    }
}

document.getElementById('wyslij').addEventListener('click', walidacjaFormularza);

wszystkieZgody.addEventListener('change', stanCheckboxa);