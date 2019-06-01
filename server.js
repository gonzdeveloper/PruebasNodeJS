const fs = require('fs');
// acronimo de file system para poder usar archivos del sistema

const http = require('http');
//servidor http que viene con nodeJS

// --> req tiene info de la peticion
// --> res tiene la respuesta de esa peticion
const server = http.createServer(function(req,res){
    //res.end('Hoal mundo!')

    const readStream = fs.createReadStream('index.html')
    readStream.pipe(res)
    // --> pipe nos permite leer informacion de una fuente
    //     y enviarla a un destino
})

// --> el puerto donde nuestro servidor escucha
server.listen(8080) 


// Se inicia nuestro servidro con 
// --> node server.js

// Con Ctrl+C se puede cancelar