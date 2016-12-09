var http = require('http');

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
    if(request.method=='POST') 
   {
        var body = [];
        request.on('data', function(chunk) {
            body.push(chunk);
        }).on('end', function() {
            body = Buffer.concat(body).toString();
                // at this point, `body` has the entire request body stored in it as a string
                var responseMessage = 'Your provided e-mail address is: '+body;
                
                if (authorization) 
                    responseMessage += '\nYour provided Authorization header is: '+authorization;
                
                if (username)
                    responseMessage += '\nYour provided username is: '+username;

                if (password)
                    responseMessage += '\nYour provided password is: '+password;
                
                response.end(responseMessage);
       
            });       
    }
   else
   {
        // Send the response body as "Hello Cloud"
        response.end('Hello Cloud\n'); 
   } 
}).listen(process.env.PORT);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
