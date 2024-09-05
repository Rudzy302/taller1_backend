const http = require('http');

// Creación del servidor
console.log("Hola mundo");

const server = http.createServer((req, res) => {

    if(req.url==='/'){
        // Respuesta exitosa
    res.statusCode = 200;
    // El contenido de la respuesta será de tipo HTML
    res.setHeader('Content-Type', 'text/html');


    res.end(`
        <html>
            <head>
                <style>
                    body {
                        background-color: #f0f8ff; // Color de fondo muy claro (AliceBlue)
                        color: #000000; // Color del texto oscuro (negro)
                        font-family: Arial, sans-serif;
                    }
                    h1 {
                        text-align: center; // Centrar el texto del h1
                    }
                    a {
                        display: block;
                        margin: 10px 0;
                        color: #0000ff; // Color del enlace (azul)
                    }
                </style>
            </head>
            <body>
                <h1>BIENVENIDOS A MI PAGINA</h1>
                <p>Esta es mi pagina</p>
                <a href="https://www.facebook.com" target="_blank">Ir a Facebook</a>
                <a href="https://www.youtube.com" target="_blank">Ir a YouTube</a>
                <a href="https://www.youtube.com" target="_blank">Ver empleados</a>
            </body>
        </html>
    `);

    }else if(req.url === '/empleados'){
        res.statusCode = 200;
        // El contenido de la respuesta será de tipo HTML
        res.setHeader('Content-Type', 'text/html');
        res.end(`<h1>EMPLEADOS<h1>
            `);
    };

});


// Asignación de puerto y hacer que el servidor escuche en ese puerto
const port = 3002;
server.listen(port, () => {
    console.log(`El servidor está escuchando en http://localhost:${port}`);
});
