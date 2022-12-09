const http = require('http');

//req es todo lo que recibo y el res es lo que le respondo al cliente
http.createServer((request, response) => {
    
    //response.writeHead(200, { 'Content-Type': 'application/json' })
    //response.setHeader('Content-Disposition', 'attachement; filename=lista.csv')
    //response.writeHead(200, { 'Content-Type': 'application/csv' })

    
    response.write('Hola mundo');

    response.end();

})
.listen(8080);

console.log('Escuchando en el puerto', 8080);