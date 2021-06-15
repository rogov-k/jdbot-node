const app = require('./index')

app.listen(3000, (err) => {
    if (err) throw err
    console.log('Server running in http://127.0.0.1:3000');
})

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});
