async function ChooseProfile() {

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
ChooseProfile();


async function OrderTable() {

  const username = sessionStorage.username
  var d = document.getElementById("items");
  if(d[2] != null){
    d[2].innerHTML="";
  }
  //call for get to the url:
  let response = await fetch('http://localhost:3001/orders/getAllOrderItemForUser?USERNAME='+username, {
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
  //if I dont get a variable called data from the back, something is wrong!

body.forEach((item) => {
const itemHtml = `
<div class="row">
<div class="col-md-6">
  <div class="panel">
    <div class="panel-body">
    <div class="bio-desk">
    <h4 class="red">${item.NAMEITEM}:שם הפריט</h4>
    <p>${item.S_N}:מקט הפריט</p>
    <p>${item.BORROW_DATE}:תאריך השאלה</p>
    <p>${item.RETURN_DATE}:תאריך החזרה</p>
  </div>
      <div class="bio-chart">
        <button class="button-14" role="button">דווח</button>
        <div style="display: inline; width: 100px; height: 100px">
          <canvas width="100" height="100px"></canvas
          ><input
            class="knob"
            data-width="100"
            data-height="100"
            data-displayprevious="true"
            data-thickness=".2"
            value = "16"
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

  d.innerHTML += itemHtml;
});
}

OrderTable();


async function faultItem() {
  
  var d = document.getElementById("items");
  if(d[2] != null){
    d[2].innerHTML="";
  }
 
  //call for get to the url:
  let response = await fetch('http://localhost:3001/warehouse/watchItemForStatus?STATUS=FAULTY', {
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
  //if I dont get a variable called data from the back, something is wrong!

body.forEach((item) => {
const itemHtml = `
<div class="row">
<div class="col-md-6">
  <div class="panel">
    <div class="panel-body">
    <div class="bio-desk">
    <h4 class="red">${item.NAMEITEM}:שם הפריט</h4>
    <p>${item.S_N}:מקט הפריט</p>
  </div>
      <div class="bio-chart">
      <button class="button-14" role="button">תקין</button>
      <button class="button-14" role="button">יצא מכלל שימוש</button>
        <div style="display: inline; width: 100px; height: 100px">
          <canvas width="100" height="100px"></canvas
          ><input
            class="knob"
            data-width="100"
            data-height="100"
            data-displayprevious="true"
            data-thickness=".2"
            value = "16"
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

  d.innerHTML += itemHtml;
});
}

faultItem();