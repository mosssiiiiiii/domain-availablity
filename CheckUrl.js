var dns = require ( 'dns' );
var sentence = require("./SentenceMaker");


var array = sentence.makeSentence().match(/.{1,4}/g);
for (var i=array.length; i--;) {
    array[i] = array[i] + ".ir";
}


function checkAvailable( url ) {
    //uses the core modules to run an IPv4 resolver that returns 'err' on error
    url.forEach(function (element) {
        dns.resolve4( element, function (err, addresses) {
            console.log('addresses: ' + JSON.stringify(addresses));
            if(err) {
                console.log(element + ' is possibly available : ' + err);
            }else {
                console.log(element + ' this is not  available');
            }
        })
    })
}

checkAvailable( array );


