const mysql = require('mysql2');
const { connect } = require('../router/bookRoutes');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '12345',
database: 'test_dbb'
});

connection.connect((err) => {
if (err){
    console.error('Erreur de connexion à la BDD:', err)
} else {
    console.log('Connecté à la BDD MySQL')
}
});

module.exports = connection;