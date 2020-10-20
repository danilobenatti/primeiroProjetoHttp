const http = require('http');

http.createServer((req, res) => {
    // ...CRTL + C para interromper.
    console.log("Servidor está rodando...");
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    //res.writeHead(200,{"Content-type":"text/plain"});
    switch (req.url) {
        case "/":
            res.end("Você está na página home!");
            break;
        case "/contato":
            res.end("Você está na página contato!")
            break;
        default:
            res.end("Página não encontrada!");
            break;
    }
    //res.end("Meu primeiro servidor!");
    
}).listen(3030,'localhost');