// Node.js: HTTP SERVER Handling GET and POST Request 
// Show HTML Form at GET request.
// At POST Request: Grab form data and display them.
// Get Complete Source Code from Pabbly.com


var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

    console.log("SERVER Created!!")
    if (req.method === "GET") {
        var files = fs.createReadStream("VC.gltf");
        //res.writeHead(200, {'Content-disposition': 'attachment; filename=index.html'}); 
        files.pipe(res); // also you can set content-type
    } else if (req.method === "POST") {
    
        var body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(body);
        });
    }

}).listen(3000);
