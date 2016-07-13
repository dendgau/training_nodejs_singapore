"use strict"

var http = require("http");

http.createServer(function(request, response) {
    // Handle find the Fibonacci with random number
    var numRandom = getRandomInt(1, 50),
        numsFibonacciSeries = exportNumberFibonacciSeries(numRandom);

    // Handle show the results
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("The first " + numRandom + " numbers in the Fibonacci series: " + numsFibonacciSeries);
    response.end();
}).listen(3000);

/*
 * Export n number of Fibonacci series (n = nRandom)
 * @param int nRandom
 * @return string strNumsFibonacciSeries
 */
function exportNumberFibonacciSeries(nRandom) {
    if (nRandom == 1) return "0";
    if (nRandom == 2) return "0 1";

    var arrNumsFibonacciSeries = [0, 1],
        strNumsFibonacciSeries = "0 1 ",
        i = 2;

    while (i < nRandom) {
        // Find next number in series
        var nextNumber = arrNumsFibonacciSeries[i - 1] + arrNumsFibonacciSeries[i - 2];
        arrNumsFibonacciSeries.push(nextNumber);
        strNumsFibonacciSeries += nextNumber.toString() + " ";
        i++;
    }

    return strNumsFibonacciSeries;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}