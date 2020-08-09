const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');


const users = require('./js/test.js')

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json'
};

http.createServer((req,res) => {
    let filePath = '.' + req.url;
//при запуске сервера переход на index.html
    if (filePath == './') {
        filePath = './index.html';
    }
    
    fs.readFile(filePath,'utf-8', (err,data) => {
        if(err) throw err;
        let rows = '';
        for (let user of users) {
            rows += '<tr class ="table__row"><td class ="table__column">' + user.name.firstName + '</td><td class ="table__column">' + user.name.lastName + '</td>'+ '<td class ="table__column table__about">' + user.about + '</td>' + '<td class ="table__column">' + user.eyeColor + '</td></tr>';
        }
        
        data = data.replace('{row}',rows);

        res.end(data);
    })

}).listen(3000)
//TODO: в чем различие кода ниже и выше?
// http.createServer(function (req, res) {
//     console.log('req ', req.url);
// //при запуске сервера переход на index.html
//     let filePath = '.' + req.url;
//     if (filePath == './') {
//         filePath = './index.html';
//     }
// //получаем расширение файла из его ссылки
//     // let extname = String(path.extname(filePath)).toLowerCase();

//     // let contentType = mimeTypes[extname];
    
//     // if(filePath.indexOf('index.html',-1)) {
//         fs.readFile(filePath, (err,data) => {
//             if(err) throw err;
//             let rows = '';
//             for (let user of users) {
//                 rows += '<tr><td>' + user.name.firstName + '</td><td>' + user.name.lastName + '</td>'+ '<td>' + user.about + '</td>' + '<td>' + user.eyeColor + '</td></tr>';
//             }
            
//             data = data.replace('{row}',rows);

//             res.end(data);
//         })
//     // }
   
//     // fs.readFile(filePath, (err, data) => {
//     //     // обработка ошибок
//     //     if(err) throw err
//     //     // пишем в заголовок HTTP-код, говорящий о том,что страница успешно загружена
//     //     // res.writeHead(200, { 'Content-Type': contentType });
        
//     //      res.end(data, 'utf-8');
    
//     // });

// }).listen(3000);