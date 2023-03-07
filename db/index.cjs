const express = require('express');
const app = express();
const mysql = express();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: '',
})

app.listen(5174, () => {
    console.log('Testando porta 5174');
})