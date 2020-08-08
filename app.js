const http = require('http');
const fs = require('fs');

const users = require('./js/test.js')

http.createServer(function(req,res) {
    fs.readFile(__dirname + '/view/test.html','utf-8', (err,data) => {
        if(err) throw err;
        let rows;
        for (let user of users) {
            rows += '<tr><td>' + user.name.firstName + '</td><td>' + user.name.lastName + '</td></tr>'+ '</td><td>' + user.about + '</td></tr>' + '</td><td>' + user.eyeColor + '</td></tr>';
            
        }
        
       data = data.replace('{row}',rows);
        //users.forEach(el => data.replace('{row}', '<tr><td>' + el.name.firstName + '</td><td>' + el.name.lastName + '</td></tr>'+ '</td><td>' + el.about + '</td></tr>' + '</td><td>' + el.eyeColor + '</td></tr>'));
        res.end(data);
        // console.log(data);
    })

     //req.url has the pathname, check if it conatins '.css'

    //   fs.readFile(__dirname + '/public/test.css', (err, data) => {
    //     if(err) throw err;
    //     res.writeHead(200, {'Content-Type': 'text/css'});
    //     res.write(data);
    //     res.end();
    //   });

}).listen(3000)