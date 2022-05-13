const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Ukuya4521',
    database: 'host1800535_sensor'
})

connection.connect((error)=>{
    if(error) {
        return console.log('Ошибка коннекта')
    } else{
        return console.log('Подключено к БД')
    }
})

module.exports = connection

