'use strict';

function ajax(ajaxOptions) {


    // parametry połączenia i jego typu
    var options = {
        type: ajaxOptions.type || "POST",
        url: ajaxOptions.url || "",
        onComplete: ajaxOptions.onComplete || function () {},
        onError: ajaxOptions.onError || function () {},
        onSuccess: ajaxOptions.onSuccess || function () {},
        dataType: ajaxOptions.dataType || "text"
    };

    // funkcja sprawdzająca czy połączenie się udało?
    function httpSuccess(httpRequest) {
        try {
            return (httpRequest.status >= 200 && httpRequest.status < 300 ||
                httpRequest.status == 304 ||
                navigator.userAgent.indexOf("Safari") >= 0 && typeof httpRequest.status == "undefined");
        } catch (e) {
            return false;
        }
    }

    var httpReq = new XMLHttpRequest();

    httpReq.open(options.type, options.url, true);

    httpReq.onreadystatechange = function () {

        if (httpReq.readyState == 4) {

            if (httpSuccess(httpReq)) {

                var returnData = (options.dataType == "xml") ? httpReq.responseXML : httpReq.responseText;

                options.onSuccess(returnData);
                //                console.log(returnData);

                httpReq = null;

            } else {

                options.onError(httpReq.statusText);
            }

        }

    }

    httpReq.send();
}

window.onscroll = function () {

    //pobiera dokument html
    var d = document.documentElement;

    //pobiera cala dlugosc strony
    var height = d.offsetHeight;

    //ile jestesmy przesunieci od gory
    var offset = d.scrollTop + window.innerHeight;

    // console.log("height : "+ height);
    //console.log("offset : " + offset);

    if (offset >= height) {

        ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            onError: function (msg) {
                console.log(msg);
            },
            onSuccess: function (response) {

                var jsonObjArray = JSON.parse(response);
                //console.log(jsonObjArray);

                jsonObjArray.forEach(function (element) {
                    console.log(element);

                    var paragraf = document.createElement('p');
                    paragraf.innerHTML = element.name;

                    document.body.appendChild(paragraf);
                });
            }
        });

    }
}
   