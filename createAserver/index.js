const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Anasayfa</h2>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>hakkımızda sayfasına hoşgeldiniz</h2>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>iletisim sayfasına hosgeldiniz</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h2>404 sayfa bulunamadı</h2>");
  }

  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
