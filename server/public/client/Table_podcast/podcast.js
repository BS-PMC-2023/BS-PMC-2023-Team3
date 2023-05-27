
const itemsPerPage = 8;
let currentPage = 1;

function openFormorder() {
    document.getElementById("dateForm").style.display = "block";
}

function closeFormorder() {
    document.getElementById("dateForm").style.display = "none";
}

async function orderpodcast(type , num ){

    let date = document.getElementById("date_ps").value;
    console.log(date)
    date = date.split('-')[2]+"/"+date.split('-')[1]+"/"+date.split('-')[0];
    let time = document.getElementById("time_ps").value;
    console.log(time)
    const my_date = date + " " + time;

    if(date == null || time == null ){
        alert("Enter Date and time");
        return;
    }    

    const username = sessionStorage.username; 
    //call for get to the url:
    let response = await fetch('http://localhost:3001/orders/addOrderForPS', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            USERNAME:username,
            TYPE:type,
            NUM:num,
            DATE_TIME:my_date
        }) 
    });
    //get data from backend response as json!
    let body = await response.json()

   alert(body.message);
   location.reload();

}

function pagenum(num){
    table(num)
}
async function table(page) {
    //call for get to the url:
    let response = await fetch('http://localhost:3001/warehouse/getAllPS', {
        //Get
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    //get data from backend response as json!
    let body = await response.json()

    // (C1) GET THE SOURCE & DESTINATION ELEMENTS
    var d = document.getElementById("12item");

const startIndex = (page - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const paginatedItems = body.slice(startIndex, endIndex);
console.log(itemsPerPage);
d.innerHTML = '';

paginatedItems.forEach((item) => {
    if(sessionStorage.title != "StorageManger" ){
        document.getElementById("additem").hidden = true;
    }
  const itemHtml = `
    <div class="col-xl-3 col-sm-6">
      <div class="card">
        <div class="card-body">
          <div class="dropdown float-end">
          <a class="text-muted dropdown-toggle font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-horizontal-rounded"></i></a>
          <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#">עריכה</a><a class="dropdown-item" href="#">הסרה</a></div>
      </div>
      <div class="d-flex align-items-center">
          <div><img src="" alt="" class="avatar-md rounded-circle img-thumbnail" /></div>
          <div class="flex-1 ms-3">
              <h5 class="font-size-16 mb-1" id = "name-item"><a href="#" class="text-dark">${item.TYPE}</a></h5>
              <span class="badge badge-soft-success mb-0" id = "cat">${item.NUM}</span>
          </div>
      </div>
      <div class="mt-3 pt-1">

      <div class="d-flex gap-2 pt-4">
          <button type="button" class="btn btn-primary" onclick ="openFormorder()"> הזמנה</button>
          <div class="form-popup" id="dateForm">
                      <form class="form-container">
                        <input type="date" id="date_ps" required>

                        <input type="time" id="time_ps" required>

                        <button type="button" class="btn btn-primary" onclick = "orderpodcast('${item.TYPE}','${item.NUM}')" >Submit</button>
                        <button type="button" class="btn btn-danger" onclick="closeFormorder()">Close</button>
                      </form>
                    </div>
      </div>
        </div>
      </div>
    </div>`
    d.innerHTML += itemHtml;
});

}

async function nextpage(){
    //call for get to the url:
    let response = await fetch('http://localhost:3001/warehouse/getAllPS', {
        //Get
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    //get data from backend response as json!
    let body = await response.json()

    document.getElementById("size").innerText = "("+body.length+")"; 
    //if I dont get a variable called data from the back, something is wrong!
    let tot = Math.ceil(body.length/itemsPerPage);
    for(let i = 0 ; i <tot ;i++){
        const pageitemjtml = `<li class="page-item" onclick = "pagenum(${i+1})"><a href="#" class="page-link">${i+1}</a></li>`
        document.getElementById("pagenum").innerHTML += pageitemjtml
    }
    
}


nextpage();
table(currentPage);