const express = requitre('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname+'/dist/web-app'));
app.get('/*', function(req,res){
    res.sendFile(path.join (__dirname+
        '/dist/web-app/index.html'));
});
//app.use( express.static(__dirname + '/client' ) );

app.listen(process.env.PORT ||4200);