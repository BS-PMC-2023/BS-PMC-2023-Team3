
async function register() {
    let User = document.getElementById("Username").value;
    let Pass = document.getElementById("Password").value;
    let email = document.getElementById("email").value;
    let firstname = document.getElementById("firstname").value;
    let lastnasme = document.getElementById("lastnasme").value;

    //fetch
    //call for POST to the url:
    let response = await fetch('http://localhost:3001/users/register', {
        //post
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //this is the stuff we refer to as: req.body in the backend!!!!!
        body: JSON.stringify({
            FIRSTNAME : firstname ,
            LASTNAME : lastnasme ,
            EMAIL : email ,
            BIRTHDAY : date ,
            USERNAME : User ,
            PASSWORD : Pass
        }) 
    })
    
}