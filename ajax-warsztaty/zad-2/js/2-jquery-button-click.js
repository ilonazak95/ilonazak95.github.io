'use strict';

function pobierzDane(){
      
$.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(data){
    console.log(data);
    console.log("user id : " + data.userId);
    console.log("user name : " + data.userName);
    console.log("user url : " + data.userURL);
});

}
    