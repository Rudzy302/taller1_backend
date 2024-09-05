const http = require('http');

// Creación del servidor
console.log("Hola mundo");

const server = http.createServer((req, res) => {
    // Respuesta exitosa
    res.statusCode = 200;
    // El contenido de la respuesta será de tipo HTML
    res.setHeader('Content-Type', 'text/html');
    // Enviar la respuesta con estilo CSS
    res.end(`
        <html>
            <head>
                <style>
                    body {
                        background-color: beige;
                        color: darkblue;
                        font-family: Arial, sans-serif;
                    }
                </style>
            </head>
            <body>
                <h1>Hola Mundo!</h1>
                <p>esta es mi pagina</p>
            </body>
        </html>
    `);
});

// Asignación de puerto y hacer que el servidor escuche en ese puerto
const port = 3000;
server.listen(port, () => {
    console.log(`El servidor está escuchando en http://localhost:${port}`);
});
