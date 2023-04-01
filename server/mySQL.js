const mysql = require('mysql2');

// התחברות למסד נתונים, לא יודע איך להתחבר לאורקל תאכלס.

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: '1234',
  database: ''
});

// Connect to the database
connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database');
});

// Export the connection
module.exports = connection;