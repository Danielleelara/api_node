import http from "http";

const PORT = 3000;

const rotas = {
    "/": "Curso de Express API!",
    "/livros": "ENTREI NA ROTA LIVROS!",
    "/autores": "ENTREI NA ROTA autores!"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain"});
    res.end(rotas[req.url])
});

server.listen(PORT, () => {
    console.log("servidor escutando!");
});