import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Bienvenido a mi pagina web</h1>");
});

app.get('/about', (req, res) => {
    res.send("<h1>Acerca de</h1>");
});

app.get('*', (req, res) => {
    res.status(400).send("<h1>404 Not Found</h1>");
});

app.listen(port, () => {
    console.log(`Server running en http://localhost:3000`);
});

