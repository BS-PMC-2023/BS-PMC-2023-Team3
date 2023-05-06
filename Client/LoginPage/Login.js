

async function login() {
    let user = document.getElementById("USERNAME").value;
    let pass = document.getElementById("PASSWORD").value;
    let ip = sessionStorage.getItem("ip")
    //fetch
    //call for POST to the url:
    let response = await fetch(`http://localhost:3001/LoginPage/Login.html`, {
        //post
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //this is the stuff we refer to as: req.body in the backend!!!!!
        body: JSON.stringify({
            username: user,
            password: pass
        })
    })
    //get data from backend response as json!
    let body = await response.json()

    //if I dont get a variable called data from the back, something is wrong!

    if (!body.data) {
        alert(body.message);
        return;
    }
    //if im here i have the data so lets save it!!!
    sessionStorage.setItem("user", body.data.username);
    sessionStorage.setItem("role", body.data.role);
    sessionStorage.setItem("phone_number", body.data.phone_number)
    //data.data keeps username and role, lets use the role to see to where to navigate
  
    window.location.href = "HomePage/HP.html";
     
}





/*
const mysql = require('mysql');

function validateCredentials(email, password) {
  // Regular expression pattern for matching a valid email
  const emailPattern = /^([a-zA-Z0-9_-]+)@ac\.sce\.ac\.il$/;

  // Check if the email matches the pattern
  if (!emailPattern.test(email)) {
    return "Invalid email format";
  }

  // Connect to the database
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name'
  });

  connection.connect();

  // Check if the email and password match a record in the database
  const sql = `SELECT * FROM Login WHERE email = ? AND password = ?`;
  const params = [email, password];

  connection.query(sql, params, function (error, results, fields) {
    if (error) {
      connection.end();
      return "Database error";
    }

    if (results.length === 0) {
      connection.end();
      return "Invalid email or password";
    }

    // If the email and password match a record in the database, return true
    connection.end();
    return true;
  });
}*/
/*
console.log(validateCredentials('user1@ac.sce.ac.il', 'password1')); // true
console.log(validateCredentials('user2@ac.sce.ac.il', 'wrongpassword')); // "Invalid email or password"
console.log(validateCredentials('not-an-email', 'password3')); // "Invalid email format"
*/

  
  