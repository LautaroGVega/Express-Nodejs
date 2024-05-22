const express = require('express');
const app = express();
const port = 3000;

// Ruta principal para servir el formulario con Bootstrap
app.get('/', (req, res) => {
    let id = req.query.id;
    let titulo = req.query.titulo;
    res.send('<html><head><title>Document</title></head><body><h1>Hola Mundo</h1></body></html>');
});

// Ruta para producto con parámetros id y titulo
app.get('/producto', function (req, res) {
    let id = req.query.id || '';
    let titulo = req.query.titulo || '';
    var html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formulario</title>
        <!-- Enlace a Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    </head>
    <body>
        <div class="container mt-5">
            <h2>Formulario</h2>
            <form id="miFormulario" class="row">
                <div class="col-md-4 bg-danger">
                    <label for="input1">Input 1</label>
                    <input type="text" class="form-control" id="input1" value="${id}" placeholder="Ingresa algo">
                </div>
                <div class="col-md-4">
                    <label for="input2">Input 2</label>
                    <input type="text" class="form-control" id="input2" value="${titulo}" placeholder="Ingresa algo">
                </div>
                <div class="col-md-4 offset-md-8">
                    <button type="submit" class="btn btn-primary btn-block">Enviar</button>
                </div>
            </form>
            <div id="resultados" class="mt-3"></div>
        </div>

        <!-- Scripts de Bootstrap y jQuery -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

        <!-- Script para manejar el formulario -->
        <script>
            document.getElementById('miFormulario').addEventListener('submit', function(event) {
                event.preventDefault();
                const input1 = document.getElementById('input1').value;
                const input2 = document.getElementById('input2').value;
                
                // Update the URL
                const url = new URL(window.location.href);
                url.searchParams.set('id', input1);
                url.searchParams.set('titulo', input2);
                window.history.pushState({}, '', url);

                // Display results
                document.getElementById('resultados').innerHTML = '<p><strong>Input 1:</strong> <strong>' + input1 + '</strong></p><p><strong>Input 2:</strong> <strong>' + input2 + '</strong></p>';
            });
        </script>
    </body>
    </html>`;
    res.send(html);
});



// Ruta para /formulario/producto/123/
app.get('/formulario/producto/123/', function (req, res) {
    res.send('<html><head><title>Document</title></head><body><h1>Hola 123 Mundo</h1></body></html>');
});

// Ruta para /alumnos/123/cuotas.html
app.get('/alumnos/123/cuotas.html', function (req, res) {
    res.send('<html><head><title>Document</title></head><body><h1>Hola Mundo</h1></body></html>');
});

// Iniciar el servidor en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
