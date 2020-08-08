//const table = document.querySelector('.table');
const fs = require('fs')
// const users = require('../user.json'); не стоит использовать т.к. файл будет прочитан только один раз
// function readerFile(filepath,callback) {
//     fs.readFile(filepath, (err,data) => {
//         try {
//             const obj = JSON.parse(data);
//             callback && callback(null,obj);
//         }
//         catch {
//             return callback && callback(err);
//         }
//     })
// }



// readerFile("../test/user.json", (err,data) => { // почему не работает ../user.json
//     if(err) throw err;
//     //users.forEach((el,i) => table.appendChild('<tr><td>' + el.name.firstName + '</td><td>' + el.name.lastName + '</td></tr>'+ '</td><td>' + el.about + '</td></tr>' + '</td><td>' + el.eyeColor + '</td></tr>'))
//    // console.log(data);
//     return data;
// })

// console.log(users);

//users.forEach((el,i) => table.appendChild('<tr><td>' + el.name.firstName + '</td><td>' + el.name.lastName + '</td></tr>'+ '</td><td>' + el.about + '</td></tr>' + '</td><td>' + el.eyeColor + '</td></tr>'))

let users = fs.readFileSync("../test/user.json", 'utf-8')

users = JSON.parse(users)
module.exports = users;
//let contain = users.forEach((el,i) => table.appendChild('<tr><td>' + el.name.firstName + '</td><td>' + el.name.lastName + '</td></tr>'+ '</td><td>' + el.about + '</td></tr>' + '</td><td>' + el.eyeColor + '</td></tr>'))
//let contain = '<tr><td>' + users.name.firstName + '</td><td>' + users.name.lastName + '</td></tr>'+ '</td><td>' + users.about + '</td></tr>' + '</td><td>' + users.eyeColor + '</td></tr>'
//module.exports = contain;
