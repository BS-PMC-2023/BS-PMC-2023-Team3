async function showProfile() {

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
  document.getElementById("titlefullname").innerText = body[0][0] +" "+ body[0][1];
  
  }
  showProfile();

  

async function faultItem() {
  
  var d = document.getElementById("items");
  var elements = d.getElementsByClassName("col-md-6");
  while(elements.length > 0){
    elements[0].remove();
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
<div class="col-md-6">
  <div class="panel">
    <div class="panel-body">
    <div class="bio-desk">
    <h4 class="red">${item.name}:שם הפריט</h4>
    <p>${item.s_n}:מקט הפריט</p>
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
</div>`

  d.innerHTML += itemHtml;
});
}


async function showItem() {
    var d = document.getElementById("items");
    var elements = d.getElementsByClassName("col-md-6");
    while(elements.length > 0){
      elements[0].remove();
    }
   
    //call for get to the url:
    let response = await fetch('http://localhost:3001/orders/getAllOrdersItem', {
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
  <div class="col-md-6">
    <div class="panel">
      <div class="panel-body">
      <div class="bio-desk">
        <h4 class="red">${item.USERNAME}:שם המשאיל</h4>
        <p>${item.NAMEITEM}:שם הפריט</p>
        <p>${item.S_N}:מקט הפריט</p>
        <p>${item.BORROW_DATE}:תאריך השאלה</p>
        <p>${item.RETURN_DATE}:תאריך החזרה</p>
        <p>${item.STATUS}: סטטוס</p>
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
    </div>`
    d.innerHTML += itemHtml;
  });
  }
  

  async function showPS() {
  
    var d = document.getElementById("items");
    var elements = d.getElementsByClassName("col-md-6");
    while(elements.length > 0){
        elements[0].remove();
    }
   
    //call for get to the url:
    let response = await fetch('http://localhost:3001/orders/getAllOrdersPS', {
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
  <div class="col-md-6">
    <div class="panel">
      <div class="panel-body">
      <div class="bio-desk">
        <h4 class="red">${item.USERNAME}:שם המשאיל</h4>
        <p>${item.NUM}:מספר חדר</p>
        <p>${item.DATE_TIME}:תאריך השאלה</p>
        <p>${item.STATUS}: סטטוס</p>
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
    </div>`
  
    d.innerHTML += itemHtml;
  });
  }
  

  async function showImage() {
    var imageContainer = document.getElementById("imageContainer");
    imageContainer.style.display = "block";
  }


  function generateChart() {
    // Get the canvas element
    var ctx = document.getElementById('myChart').getContext('2d');

    // Define the chart data
    var data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Example Dataset',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };

    // Create the chart
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  /*async function statisticsPage() {

    const username = sessionStorage.username
    const title = sessionStorage.title
  
    
    if(title == "StorgeManger"){
      window.location.href = "http://localhost:3001/Statistics";
    }
    }
    */
  