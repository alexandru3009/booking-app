const express = require('express');
const http = require('http');
const path = require('path');
let app = express();
publicPath = path.join(__dirname, 'build');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath), 'index.html');
});
const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));