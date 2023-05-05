
// (C1) GET THE SOURCE & DESTINATION ELEMENTS
var s = document.getElementsByClassName("col-xl-3 col-sm-6");
var d = document.getElementsByClassName("row");

// (C2) CREATE & APPEND EVIL CLONE
for(let i=0;i<4;i++){
var clone = s[0].cloneNode(true);

d[0].appendChild(clone);
}

async function table() {
    let User = document.getElementById("Username").value;
    let Pass = document.getElementById("Password").value;
    let email = document.getElementById("email").value;
    let firstname = document.getElementById("firstname").value;
    let lastnasme = document.getElementById("lastnasme").value;

    //fetch
    //call for POST to the url:
    let response = await fetch('http://localhost:3001/warehouse/watchItemForStatus', {
        //post
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    //get data from backend response as json!
    let body = await response.json()

    //if I dont get a variable called data from the back, something is wrong!

    if (!body.data) {
        alert(body.message);
        return;
    }
}
