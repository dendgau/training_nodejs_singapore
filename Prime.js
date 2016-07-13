"use strict"

var http = require("http");

http.createServer(function(request, response) {
    // Handle checking a random number is prime
    var numRandom = getRandomInt(1, 100),
        isPrime = isCheckPrime(numRandom);

    // Handle show the results
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("The number " + numRandom + " is " + (isPrime ? "prime" : "not prime"));
    response.end();
}).listen(3000);

/*
 * Check a number is prime
 * @param int nRandom
 * @return bool
 */
function isCheckPrime(nRandom) {
    var i = nRandom - 1;

    while (i > 1) {
        if (nRandom % i == 0) return false;
        i--;
    }

    return true;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}