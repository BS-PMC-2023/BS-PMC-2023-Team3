/*// (C1) GET THE SOURCE & DESTINATION ELEMENTS
var s = document.getElementsByClassName("col-md-6");
var d = document.getElementsByClassName("row");

// (C2) CREATE & APPEND EVIL CLONE
for(let i=0; i<3; i++){
  var clone = s[0].cloneNode(true);

  d[0].appendChild(clone);

}*/

async function OrderTable() {
  //call for get to the url:
  let response = await fetch('', {
      //Get
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify( {
        USERNAME:username
      }),
  })
  //get data from backend response as json!
  let body = await response.json()

  // (C1) GET THE SOURCE & DESTINATION ELEMENTS
  var d = document.getElementsByClassName("row");

  //if I dont get a variable called data from the back, something is wrong!

body.forEach((item) => {
const itemHtml = `
<div class="row">
<div class="col-md-6">
  <div class="panel">
    <div class="panel-body">
      <div class="bio-desk">
        <h4 class="red">${item[1]}:שם הפריט</h4>
        <p>מקט הפריט</p>
        <p>מתי הושאל הפריט?</p>
        <p>מתי צריך להחזיר אותו</p>
      </div>
      <div class="bio-chart">
        <div style="display: inline; width: 100px; height: 100px">
          <canvas width="100" height="100px"></canvas
          ><input
            class="knob"
            data-width="100"
            data-height="100"
            data-displayprevious="true"
            data-thickness=".2"
            value="35"
            data-fgcolor="#e06b7d"
            data-bgcolor="#e8e8e8"
            style="
              width: 54px;
              height: 33px;
              position: absolute;
              vertical-align: middle;
              margin-top: 33px;
              margin-left: -77px;
              border: 0px;
              font-weight: bold;
              font-style: normal;
              font-variant: normal;
              font-stretch: normal;
              font-size: 20px;
              line-height: normal;
              font-family: Arial;
              text-align: center;
              color: rgb(224, 107, 125);
              padding: 0px;
              -webkit-appearance: none;
              background: none;
            "
          />
        </div>
      </div>
    </div>
  </div>
</div>
</div>`

  d[0].innerHTML += itemHtml;
});
}

OrderTable();
async function OrderTable() {

  const username = sessionStorage.username
   //call for get to the url:
   let response = await fetch('http://localhost:3001/users/watchUser?USERNAME='+username, {
    //Get
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },

})
//get data from backend response as json!
let body = await response.json()
if(body.message){
  alert(body.message)
  return;
}
document.getElementById("firstname").innerText = body[0][0];
document.getElementById("lastname").innerText = body[0][1];
document.getElementById("DateOfBirth").innerText = body[0][3];
document.getElementById("email").innerText = body[0][2];
document.getElementById("username").innerText = body[0][5];
document.getElementById("title").innerText = body[0][4];
document.getElementById("fullname").innerText = body[0][0] +" "+ body[0][1];

}