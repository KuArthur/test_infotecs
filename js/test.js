//const table = document.querySelector('.table');
const fs = require('fs')
// const users = require('../user.json'); не стоит использовать т.к. файл будет прочитан только один раз

let users = fs.readFileSync("../test/user.json", 'utf-8')

users = JSON.parse(users)
module.exports = users;

