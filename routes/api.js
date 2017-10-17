// Configuration du module
let express = require('express');
let router = express.Router();

// Configuration de mysql
let mysql = require('mysql');
const mysqlConfig = {
    host     : 'localhost',
    port     : '8889',
    user     : 'root',
    password : 'root',
    database : 'ANGmysql'
}

// Configuration de la route principale => http://localhost:8080/api/posts
router.get('/posts', (req, res, next) => {

    let connection = mysql.createConnection(mysqlConfig);

    connection.connect();

    connection.query('SELECT * FROM posts', (error, results, fields) => {
        if (error) throw error;
        res.json(results)

    });

    connection.end();

});

// Configuration de la route principale => http://localhost:8080/api/posts/:id
router.get('/posts/:id', (req, res, next) => {

    let connection = mysql.createConnection(mysqlConfig);

    let postId = req.params.id
    
    connection.connect();
    
    connection.query('SELECT * FROM posts WHERE id=' + postId, (error, results, fields) => {
        if (error) throw error;
        console.log(results);
         
        res.json(results)

    });

    connection.end();

});

// Export du module
module.exports = router;