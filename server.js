let express = require('express');
let app = express();
let http = require('http').Server(app);
let https = require('https').Server(app);
let path = require('path');
let serveStatic = require('serve-static');
let fs = require('fs');


app.use(function(req,res,next) {
    if (!req.secure) {
        console.log("HTTP call detected, not allowed");
        return res.redirect('https://' + req.hostname + req.path);
    } else {
        console.log("HTTPs call detected, allowed");
        return next();
    }
});

// serve the index.html as starting page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
});


// serve all files in dist
app.use(express.static('dist'));

http.listen(process.env.PORT || 8090, function(){
    console.log(`listening on *: ${http.address().port}`);
});