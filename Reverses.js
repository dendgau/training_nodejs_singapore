"use strict"

var http = require("http");

http.createServer(function(request, response) {
    // Handle checking a random number is prime
    var randomString = "Hello World",
        result = reversesString(randomString);


    // Handle show the results
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('The reverse of "Hello World" string is: ' + result);
    response.end();
}).listen(3000);

/*
 * Reverses current string and return a new string
 * @param string randomString
 * @return string newString
 */
function reversesString(randomString) {
    var i = randomString.length,
        result = '';

    while (i > 0) {
        i--
        result += randomString[i];
    }

    return result;
}