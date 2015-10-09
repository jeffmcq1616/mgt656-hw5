var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('I am a complete ninja now');
});


app.get('/nickname', function(request, response){
    response.send('helpful-emu');
});

app.listen(process.env.PORT || 4000);