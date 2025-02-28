import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<p> respuesta GET </p>');
});

app.post('/registro', (req, res) => {
    res.sendStatus(201);
    res.send('Registro exitoso');
});

app.put('/usuario/actualizar', (req, res) => {
    res.sendStatus(200);
    res.send('Actualización exitosa');
});

app.patch('/usuario/modificar', (req, res) => {
    res.sendStatus(200);
    res.send('Modificación exitosa');
});

app.delete('/usuario/eliminar', (req, res) => {
    res.sendStatus(200);
    res.send('Eliminación exitosa');
});

app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
});
