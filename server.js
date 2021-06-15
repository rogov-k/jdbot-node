const app = require('./index')

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/index.html');
});
