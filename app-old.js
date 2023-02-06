const http = require('http');


http.createServer((req, res) => {

//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
//   res.writeHead(200, { 'Content-Type': 'application/csv' });

//   res.write('id, nombre\n');
//   res.write('1, Asdrubal\n');
//   res.write('2, Yamit\n');
//   res.write('3, Nely\n');
//   res.write('4, Eliana\n');
//   res.write('5, Angee\n');
//   res.end();
 
res.write('Hola Mundo');
res.end();


})
.listen(8080);

console.log('Escuchando el puerto', 8080);